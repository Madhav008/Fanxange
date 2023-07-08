const getPlayerStats = require('./Player.info');
const getCrickvizPlayer = require('./Cricviz.player');

const getMatchStats = require('./Match.stats');
const { calculateBattingPoints, calculateFieldingPoints } = require('./Points.table');
const getPlayerPoints = require('./Points.table');

var MarketData = require('./market-info.json')
const fs = require('fs');
const insertData = require('./SeedData/Seed.Playerinfo');

MarketData = JSON.stringify(MarketData)
// Parse JSON
const data = JSON.parse(MarketData);

// Accessing each key



async function getPlayerData() {
  const players = data.data.players;
  Object.keys(players).forEach(playerKey => {
    const player = players[playerKey];

    // if (player.name == "V Kohli") {

      getCrickvizPlayer(player.symbol, player.cricviz_id).then(async (player_stats) => {
        const teams = player_stats.data.sixergame_sixers[0].allTeams;
        const teamIds = []; // Array to store the team IDs
        // console.log(teams)
        for (const team of teams) {
          const teamId = await getTeamIdByCode(team);
          teamIds.push(teamId);
        }

        let player_info = {
          "Player": playerKey,
          "Name": player.name,
          "Player Type": player.playerType,
          "Tournaments": player.tournaments,
          "Jersy Number": player.jersey_number,
          "Sixer ID": player.sixer_id,
          "Cricviz ID": player.cricviz_id,
          "Sport ID": player.sportId,
          "Symbol": player.symbol,
        }
        console.log(player_info)

        // Insert player_info into Hasura table
        insertData({
          cricviz_id:player.cricviz_id, jersy_number:player.jersey_number, name:player.name, player_type:player.playerType, sixer_id:parseInt(player.sixer_id), sport_id:player.sportId, symbol:player.symbol
        });



      })

      // getPlayerStats(player?.cricviz_id).then((player_stats) => {
      //   getPlayerMatchStats(player_stats)
      //   // fs.writeFile(`${player.symbol}.json`, JSON.stringify(player_stats), (err) => {
      //   //     if (err) {
      //   //         console.error('Error writing JSON file:', err);
      //   //     } else {
      //   //         console.log('JSON file has been written successfully.');
      //   //     }


      // });



      // })
    // }
    // Access other keys as needed
  });
}
getPlayerData()


function getPlayerMatchStats(player_stats) {
  player_stats?.data?.datascience_cricviz_player_match.forEach(match => {
    // console.log("Start Time:", match.start_timestamp);
    // console.log("Match Id:", match.match_scoring.sixer_player_match_id);
    // console.log("Start Time:", match.start_timestamp);
    getMatchStats(match?.match_scoring?.sixer_player_match_id).then((player_stats) => {

      // fs.writeFile(`${match.match_scoring.match}.json`, JSON.stringify(player_stats), (err) => {
      //     if (err) {
      //         console.error('Error writing JSON file:', err);
      //     } else {
      //         console.log('JSON file has been written successfully.');
      //     }
      // });

      player_stats?.data?.datascience_cricviz_match_scoring.forEach(element => {
        let player_current_performance = {
          "bat_runs": player_stats.data.datascience_cricviz_match_scoring[0].bat_runs,
          "balls_faced": player_stats.data.datascience_cricviz_match_scoring[0].balls_faced,
          "fours_hit": player_stats.data.datascience_cricviz_match_scoring[0].fours_hit,
          "sixes_hit": player_stats.data.datascience_cricviz_match_scoring[0].sixes_hit,
          "bowl_wickets": player_stats.data.datascience_cricviz_match_scoring[0].bowl_wickets,
          "balls_bowled": player_stats.data.datascience_cricviz_match_scoring[0].balls_bowled,
          "bowl_runs": player_stats.data.datascience_cricviz_match_scoring[0].bowl_runs,
          "dot_balls": player_stats.data.datascience_cricviz_match_scoring[0].dot_balls,
          "maidens": player_stats.data.datascience_cricviz_match_scoring[0].maidens,
          "catch": player_stats.data.datascience_cricviz_match_scoring[0].catch,
          "stumping": player_stats.data.datascience_cricviz_match_scoring[0].stumping,
          "run_out": player_stats.data.datascience_cricviz_match_scoring[0].run_out,
          "run_points": player_stats.data.datascience_cricviz_match_scoring[0].run_points,
          "milestone_bonus": player_stats.data.datascience_cricviz_match_scoring[0].milestone_bonus,
          "batting_participation_points": player_stats.data.datascience_cricviz_match_scoring[0].batting_participation_points,
          "batting_multiplier": player_stats.data.datascience_cricviz_match_scoring[0].batting_multiplier,
          "match": match.match_scoring.match,
          "Date": match.start_timestamp
        };

        console.log("\nPLAYER Performace\n")
        console.log(player_current_performance)

        console.log("\nPLAYER POINTS\n")
        getPlayerPoints(player_current_performance)
      });



    })
  });
}
// getPlayerMatchStats()






