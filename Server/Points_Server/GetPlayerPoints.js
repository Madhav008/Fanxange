// const {calculateT20Points} = require("./PointType/CalculateT20Points");

const { calculateT20Points } = require("./PointType/CalculateT20Points");


const playerStats = [];

// // Extract batting stats
// const battingStats = data.Stats['Batting Stats'];
// for (const playerName in battingStats) {
//   const player = {
//     Player: playerName,
//     BattingStats: {
//       BatRuns: battingStats[playerName]['Bat Runs'],
//       FoursHit: battingStats[playerName]['Fours Hit'],
//       SixesHit: battingStats[playerName]['Sixes Hit'],
//       BallsFaced: battingStats[playerName]['Balls Faced'],
//       Fifty: battingStats[playerName]['Fifty'],
//       Hundred: battingStats[playerName]['Hundred'],
//       IsBatting: battingStats[playerName]['Is Batting'],
//       IsOut: battingStats[playerName]['Is Out']
//     },
//     BowlingStats: {},
//     FieldingStats: {}
//   };
//   playerStats.push(player);
// }

// // Extract bowling stats
// const bowlingStats = data.Stats['Bowling Stats'];
// for (const playerName in bowlingStats) {
//   const player = playerStats.find(p => p.Player === playerName);
//   if (player) {
//     player.BowlingStats = {
//       RunsGiven: bowlingStats[playerName]['Runs Given'],
//       FoursGiven: bowlingStats[playerName]['Fours Given'],
//       SixesGiven: bowlingStats[playerName]['Sixes Given'],
//       BallsBowled: bowlingStats[playerName]['Balls Bowled'],
//       CatchesTaken: bowlingStats[playerName]['Catches Taken'],
//       Runouts: bowlingStats[playerName]['Runouts'],
//       Stumping: bowlingStats[playerName]['Stumping'],
//       IsBall: bowlingStats[playerName]['Is Ball'],
//       DotBalls: bowlingStats[playerName]['Dot Balls'],
//       MaidenOver: bowlingStats[playerName]['Maiden Over'],
//       WicketsTaken: bowlingStats[playerName]['Wickets Taken']
//     };
//   }
// }

// // Extract fielding stats
// const fieldingStats = data.Stats['Fielding Stats'];
// for (const playerName in fieldingStats) {
//   const player = playerStats.find(p => p.Player === playerName);
//   if (player) {
//     player.FieldingStats = {
//       CatchesTaken: fieldingStats[playerName]['Catches Taken'],
//       Runouts: fieldingStats[playerName]['Runouts']
//     };
//   }
// }
const axios = require('axios');
const startExecuteInsertFildingStats = require("./SeedData/UpdateStats");

axios.get('https://hasura.depthfirstsearch.tk/api/rest/players')
    .then(response => {
        const playerStats = response.data["Players_Matches"];

        playerStats.forEach(player => {
            // if(player.name==="Washington Sundar"){
            const matchId = player.id;
            let { name, Batting_stats, Bowling_stats, Filding_stats } = player;
            if (Batting_stats.length === 0 || Bowling_stats.length === 0 || Filding_stats.length === 0) {
                // console.log(`Incomplete stats for player: ${name}`);
                return; // Skip this player and move to the next iteration
            }


            Filding_stats.forEach((stats) => {


                // let {
                //     bat_runs, four_hit, six_hit, balls_faced, fifty, hundred, is_bat, is_out, player_id,
                // } = stats;

                // let {
                //   is_ball, runs_given, four_given, six_given, balls_bowled,
                //   dot_balls, maidian_over, wicket,player_id
                // } = stats;

                let { catches, runouts, stumping ,player_id} = stats;

                const playerPerformance = {
                      catches: catches,
                      runouts: runouts,
                      stumping: stumping,
                    //   isBall: Boolean(is_ball),
                    //   runs_given: runs_given,
                    //   four_faces: four_given,
                    //   six_faces: six_given,
                    //   ball_bowled: balls_bowled,
                    //   dot_balls: dot_balls,
                    //   madian_over: maidian_over,
                    //   wickets: wicket,
                    // bat_runs: bat_runs,
                    // fours_hit: four_hit,
                    // sixes_hit: six_hit,
                    // ball_faced: balls_faced,
                    // fifty: fifty,
                    // hundred: hundred,
                    // isBat: is_bat,
                    // isOut: is_out
                };

                let points = calculateT20Points(playerPerformance);
                console.log(points);
                points = points.toFixed(2)
                startExecuteInsertFildingStats(matchId, player_id, points)
            })
            // }
        });
    })
    .catch(error => {
        console.error(error.message);
    });
