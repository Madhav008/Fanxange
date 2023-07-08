const { calculateOneDayBowlingPoints, calculateOneDayBattingPoints, calculateOneDayFieldingPoints } = require("../Server/Points_Server/PointType/CalculateOnedayPoints");
const { calculateT10FieldingPoints, calculateT10BattingPoints, calculateT10BowlingPoints } = require("../Server/Points_Server/PointType/CalculateT10Points");
const { calculateBattingPoints, calculateBowlingPoints, calculateFieldingPoints } = require("../Server/Points_Server/Deprecated/CalculateT20Points");
const axios = require("axios");
const { calculateTestBattingPoints, calculateTestBowlingPoints, calculateTestFieldingPoints } = require("../Server/Points_Server/PointType/CalculateTestPoints");


async function getRecentMacthes() {
    const recentMatches = await getEspnData("https://hs-consumer-api.espncricinfo.com/v1/ui/edition/details?trendingMatches=true&keySeriesItems=true&edition=in&lang=en");

    const matches = recentMatches.trendingMatches.matches;

    /* Iterate over the each match and get the MatchData by Series Id and Match Id
    Returns 
        1. Teams 
        2. Players 
        3. Batting Stats of each player in map
        4. Bowling Stats of each player in map
        5. Fielding Stats of each player in map
    */

    const seriesId = matches[0].series.objectId;
    const matchId = matches[0].objectId;

    const data = await getMatchData(seriesId, matchId);
    console.log(data);


    /*  matches.forEach(async (match) => {
         const seriesId = match.series.objectId;
         const matchId = match.objectId;
 
         const data = await getMatchData(seriesId, matchId);
         console.log(data);
 
     }) */
}
/* 
Returns 
1.playerid
2.image
3.name
4.longName
5.battingName
6.filedingName
7.country
8.10 recent matches played [matchesid]; 
*/

async function getPlayerData(playerId) {
    const url = `https://hs-consumer-api.espncricinfo.com/v1/pages/player/matches?playerId=${playerId}`;
    const playerData = await getEspnData(url);
    const player = playerData.player;


    const matches = playerData.content.matches.types[0].recent;

    matches.forEach(async (match) => {
        const seriesId = match.series.objectId;
        const matchId = match.objectId;

        const data = await getMatchData(seriesId, matchId);
        console.log(data);

    })
    let res = {
        "playerId": player.objectId,
        "name": player.name,
        "longName": player.longName,
        "mobileName": player.mobileName,
        "indexName": player.indexName,
        "battingName": player.battingName,
        "fieldingName": player.fieldingName,
        "imageUrl": player.imageUrl,
        "country": player.country.name,
    }

    return res;
}







/* 

Returns 
1. Teams 
2. Players 
3. Batting Stats
4. Bowling Stats
5. Fielding Stats


*/


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
        if (matchData.format == "T20") {
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

        } else if (matchData.format == "TEST") {
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

        } else if (matchData.format == "ODI") {
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
        // console.log(bowlingPoints)
        // await startExecuteInsertBowlingStats(balls_bowled, dot_balls, four_given, is_ball, maidian_over, match_id, player_id, bowlingPoints, runs_given, six_given, wicket)

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
        if (matchData.format === "T20") {
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
        } else if (matchData.format === "TEST") {
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
        } else if (matchData.format === "ODI") {
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

        // console.log(battingPoints)
        // await startExecuteInsertBattingStats(is_bat, is_out, balls_faced, bat_runs, fifty, four_hit, hundred, matchId, playerId, battingPoints, six_hit)
    }

    for (let [key, value] of fieldingStats) {
        let {
            playerId,
            matchId,
            catches, runouts, stumping

        } = value
        // console.log(value)

        let fieldingPoints = 0;
        if (matchData.format === "T20") {
            fieldingPoints = calculateFieldingPoints({ catches, runouts, stumping });
        } else if (matchData.format === "TEST") {
            fieldingPoints = calculateTestFieldingPoints({ catches, runouts, stumping });
        } else if (matchData.format === "ODI") {
            fieldingPoints = calculateOneDayFieldingPoints({ catches, runouts, stumping });
        } else {
            fieldingPoints = calculateT10FieldingPoints({ catches, runouts, stumping });
        }

        fieldingPointMap.set(playerId, fieldingPoints)

        // console.log(fieldingPoints)
        // await startExecuteInsertFieldingStats(catches, matchId, playerId, fieldingPoints, runouts, stumping)

    }
    //Seed the Teams
    // console.log(teams)
    // teams.forEach(async team => {
    //     await startExecuteInsertTeams(team.objectId, team.longName)
    // })

    //Seed the Players
    // console.log(teamPlayers)
    // teamPlayers.forEach(async player => {
    //     await startExecuteInsertPlayerStats(player.playerId, player.teamId, player.name, player.shortName)
    // })


    return {
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