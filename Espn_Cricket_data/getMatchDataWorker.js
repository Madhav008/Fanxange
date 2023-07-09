// getMatchDataWorker.js
const { calculateOneDayBowlingPoints, calculateOneDayBattingPoints, calculateOneDayFieldingPoints } = require("../Server/Points_Server/PointType/CalculateOnedayPoints");
const { calculateT10FieldingPoints, calculateT10BattingPoints, calculateT10BowlingPoints } = require("../Server/Points_Server/PointType/CalculateT10Points");
const { calculateBattingPoints, calculateBowlingPoints, calculateFieldingPoints } = require("../Server/Points_Server/PointType/CalculatedT20Point");
const axios = require("axios");
const { calculateTestBattingPoints, calculateTestBowlingPoints, calculateTestFieldingPoints } = require("../Server/Points_Server/PointType/CalculateTestPoints");
const { workerData, parentPort } = require('worker_threads');

// Implement the actual getMatchData logic here
async function getMatchData(seriesId, matchId) {
  if (seriesId === undefined || matchId === undefined) {
      return;
  }   
  const url = `https://hs-consumer-api.espncricinfo.com/v1/ui/match/details?latest=true&lang=en&seriesId=${seriesId}&matchId=${matchId}`;

  // const url = "https://hs-consumer-api.espncricinfo.com/v1/ui/match/details?latest=true&lang=en&seriesId=1347399&matchId=1347569"
  console.log(url)
  const matchData = await getEspnData(url);
  let fieldingStats = new Map();
  let battingStats = new Map();
  let bowlingStats = new Map();

  var teams = [];
  var teamPlayers = [];

  matchData?.matchPlayers?.teamPlayers.forEach(e => {
      teams.push(e.team);
      // teamPlayers.push(players);
      e.players.forEach(d => {
          var playerdata = {
              "playerId": d.player.objectId,
              "name": d.player.longName,
              "shortName": d.player.name,
              'teamId': e.team.objectId
          }
          teamPlayers.push(playerdata);

          fieldingStats.set(playerdata.name, {
              playerId: playerdata.playerId,
              matchId: matchId,
              catches: 0,
              runouts: 0,
              stumping: 0
          });
      })
  })

  matchData.scorecard?.innings.forEach((inning) => {

      inning?.inningBatsmen.forEach((batsman) => {
          var hundred = 0;
          var fifty = 0;
          var tempRuns = batsman.runs;
          if (batsman.battedType === "yes" && batsman.runs != null) {
              if (batsman.runs >= 100) {
                  hundred = Math.floor(batsman.runs / 100);
                  batsman.runs -= hundred * 100;
              }

              if (batsman.runs >= 50) {
                  fifty = Math.floor(batsman.runs / 50);
                  batsman.runs -= fifty * 50;
              }


              battingStats.set(batsman.player.objectId, {
                  playerId: batsman.player.objectId,
                  matchId: matchId,
                  bat_runs: tempRuns,
                  balls_faced: batsman.balls,
                  six_hit: batsman.sixes,
                  four_hit: batsman.fours,
                  is_bat: true,
                  is_out: batsman.isOut,
                  hundred: hundred,
                  fifty: fifty,
              })
          }
      })


      inning?.inningBowlers.forEach((bowler) => {
          bowlingStats.set(bowler.player.objectId, {
              balls_bowled: bowler.balls,
              dot_balls: bowler.dots,
              four_given: bowler.fours,
              maidian_over: bowler.maidens,
              runs_given: bowler.conceded,
              six_given: bowler.sixes,
              wicket: bowler.wickets,
              is_ball: true,
              match_id: matchId,
              player_id: bowler.player.objectId
          })

      })

      inning?.inningBatsmen.forEach(e => {
          if (e.dismissalType != null && e.dismissalType != 2 && e.dismissalType != 12) {
              // console.log(e.dismissalText)
              if (e.dismissalType === 1) {
                  if (e.dismissalText.long.split(" ")[1] === "&") {
                      // console.log("Caught out by " + e.dismissalText.long.split(" ")[3])
                      var fielderName = e.dismissalText.long.split(" ")[3];

                      //: Search the fielder name in the players array
                      const player = searchFielderName(fielderName, teamPlayers);

                      if (player) {
                          let playerStats = fieldingStats.get(player?.name);
                          playerStats.catches += 1;
                      }


                  } else {
                      // console.log("Caught out by " + e.dismissalText.long.split(" ")[1])
                      var fielderName = e.dismissalText.long.split(" ")[1];

                      //: Search the fielder name in the players array
                      const player = searchFielderName(fielderName, teamPlayers);
                      if (player) {
                          let playerStats = fieldingStats.get(player?.name);
                          playerStats.catches += 1;
                      }

                  }
              } else if (e.dismissalType === 4) {
                  var fielderName = e.dismissalText.long.split(" ")[2];

                  fielderName = fielderName.replace(/\(|\)/g, "");
                  // console.log("Run out by " + fielderName)

                  //: Search the fielder name in the players array
                  const player = searchFielderName(fielderName, teamPlayers);

                  if (player) {
                      let playerStats = fieldingStats.get(player.name);
                      playerStats.runouts += 1;
                  }


              }
          }
      })
  })



  var fielding = mapToJSON(fieldingStats)
  var batting = mapToJSON(battingStats)
  var bowling = mapToJSON(bowlingStats)

  let fieldingPointMap = new Map();
  let battingPointMap = new Map();
  let bowlingPointMap = new Map();

  for (let [key, value] of bowlingStats) {
      // console.log();
      let {
          balls_bowled,
          dot_balls,
          four_given,
          maidian_over,
          runs_given,
          six_given,
          wicket,
          is_ball,
          match_id,
          player_id

      } = value


      let bowlingPoints = 0;
      if (matchData.match.format==="T20") {
          bowlingPoints = calculateBowlingPoints({
              wickets: wicket,
              dot_balls: dot_balls,
              ball_bowled: balls_bowled,
              madian_over: maidian_over,
              four_faces: four_given,
              six_faces: six_given,
              runs_given: runs_given,
              isBall: is_ball
          })

      } else if (matchData.match.format==="TEST") {
          bowlingPoints = calculateTestBowlingPoints({
              wickets: wicket,
              dot_balls: dot_balls,
              ball_bowled: balls_bowled,
              madian_over: maidian_over,
              four_faces: four_given,
              six_faces: six_given,
              runs_given: runs_given,
              isBall: is_ball
          })

      } else if (matchData.match.format==="ODI") {
          bowlingPoints = calculateOneDayBowlingPoints({
              wickets: wicket,
              dot_balls: dot_balls,
              ball_bowled: balls_bowled,
              madian_over: maidian_over,
              four_faces: four_given,
              six_faces: six_given,
              runs_given: runs_given,
              isBall: is_ball
          })

      } else {
          
          bowlingPoints = calculateT10BowlingPoints({
              wickets: wicket,
              dot_balls: dot_balls,
              ball_bowled: balls_bowled,
              madian_over: maidian_over,
              four_faces: four_given,
              six_faces: six_given,
              runs_given: runs_given,
              isBall: is_ball
          })

      }


      bowlingPointMap.set(player_id, bowlingPoints)
   
  }

  for (let [key, value] of battingStats) {
      let {
          playerId,
          matchId,
          bat_runs,
          balls_faced,
          six_hit,
          four_hit,
          is_bat,
          is_out,
          hundred,
          fifty

      } = value


      let battingPoints = 0;
      if (matchData.match.format==="T20") {
          console
          battingPoints = calculateBattingPoints({
              bat_runs,
              fours_hit: four_hit,
              sixes_hit: six_hit,
              fifty,
              hundred,
              isBat: is_bat,
              isOut: is_out,
              balls_faced
          });
      } else if (matchData.match.format==="TEST") {
          battingPoints = calculateTestBattingPoints({
              bat_runs,
              fours_hit: four_hit,
              sixes_hit: six_hit,
              fifty,
              hundred,
              isBat: is_bat,
              isOut: is_out,
              balls_faced
          });
      } else if (matchData.match.format==="ODI") {
          battingPoints = calculateOneDayBattingPoints({
              bat_runs,
              fours_hit: four_hit,
              sixes_hit: six_hit,
              fifty,
              hundred,
              isBat: is_bat,
              isOut: is_out,
              balls_faced
          });
      } else {
          
          battingPoints = calculateT10BattingPoints({
              bat_runs,
              fours_hit: four_hit,
              sixes_hit: six_hit,
              fifty,
              hundred,
              isBat: is_bat,
              isOut: is_out,
              balls_faced
          });
      }


      battingPointMap.set(playerId, battingPoints)

  }

  for (let [key, value] of fieldingStats) {
      let {
          playerId,
          matchId,
          catches, runouts, stumping

      } = value
      // console.log(value)

      let fieldingPoints = 0;
      if (matchData.match.format==="T20") {
          console
          fieldingPoints = calculateFieldingPoints({ catches, runouts, stumping });
      } else if (matchData.match.format==="TEST") {
          fieldingPoints = calculateTestFieldingPoints({ catches, runouts, stumping });
      } else if (matchData.match.format==="ODI") {
          fieldingPoints = calculateOneDayFieldingPoints({ catches, runouts, stumping });
      } else {
          
          fieldingPoints = calculateT10FieldingPoints({ catches, runouts, stumping });
      }

      fieldingPointMap.set(playerId, fieldingPoints)

  }



  return {
      "matchId": matchId,
      "name": matchData.match.slug,
      "seriesId": seriesId,
      "seriesName": matchData.match.series.longName,
      "teams": teams,
      "teamPlayers": teamPlayers,
      "batting": batting,
      "bowling": bowling,
      "fieding": fielding,
      "batPoints": mapToJSON(battingPointMap),
      "bowlPoints": mapToJSON(bowlingPointMap),
      "fieldoints": mapToJSON(fieldingPointMap),
  }
}


function searchFielderName(fielderName, teamPlayers) {
  let foundPlayer = null;

  teamPlayers.forEach(element => {
    if (element.name && element.name.includes(fielderName)) {
      foundPlayer = element;
    }

  });

  return foundPlayer;
}


function mapToJSON(map) {
  const obj = {};

  map.forEach((value, key) => {
    obj[key] = value;
  });

  return obj;
}




async function getEspnData(url) {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error(error.message);
  }

}

const { seriesId, matchId } = workerData;

getMatchData(seriesId, matchId)
  .then((matchData) => {
    parentPort.postMessage(matchData);
  })
  .catch((error) => {
    console.error(`Error occurred in worker for seriesId: ${seriesId} and matchId: ${matchId}`, error);
    parentPort.postMessage({ error: error.message, stack: error.stack });
  });

