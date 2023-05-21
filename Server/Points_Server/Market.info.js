const getPlayerStats = require('./Player.info');
const getCrickvizPlayer = require('./Cricviz.player');

var MarketData = require('./market-info.json')
const fs = require('fs')

MarketData = JSON.stringify(MarketData)
// Parse JSON
const data = JSON.parse(MarketData);

// Accessing each key



function getPlayerData() {
    const players = data.data.players;
    Object.keys(players).forEach(playerKey => {
        const player = players[playerKey];

        if (player.name == "V Kohli") {
            console.log("Player:", playerKey);
            console.log("Name:", player.name);
            console.log("Player Type:", player.playerType);
            console.log("Tournaments:", player.tournaments);
            console.log("Jersy Number", player.jersey_number);
            console.log("Sixer ID:", player.sixer_id);
            console.log("Cricviz ID:", player.cricviz_id);
            console.log("Sport ID:", player.sportId);
            console.log("Symbol:", player.symbol);
            console.log();


            getCrickvizPlayer(player.symbol,player.cricviz_id).then((player_stats) => {
                console.log("Teams:", player_stats.data.sixergame_sixers[0].allTeams);
            })

            getPlayerStats(player.cricviz_id).then((player_stats) => {
                getPlayerMatchStats(player_stats)
                // fs.writeFile(`${player.symbol}.json`, JSON.stringify(player_stats), (err) => {
                //     if (err) {
                //         console.error('Error writing JSON file:', err);
                //     } else {
                //         console.log('JSON file has been written successfully.');
                //     }


                });



            // })
        }
        // Access other keys as needed
    });
}
getPlayerData()

const getMatchStats = require('./Match.stats');

function getPlayerMatchStats(player_stats) {
    player_stats.data.datascience_cricviz_player_match.forEach(match => {
        console.log("Start Time:", match.start_timestamp);
        console.log("Match Id:", match.match_scoring.sixer_player_match_id);
        // console.log("Start Time:", match.start_timestamp);
        getMatchStats(match.match_scoring.sixer_player_match_id).then((player_stats) => {

            // fs.writeFile(`${match.match_scoring.match}.json`, JSON.stringify(player_stats), (err) => {
            //     if (err) {
            //         console.error('Error writing JSON file:', err);
            //     } else {
            //         console.log('JSON file has been written successfully.');
            //     }
            // });

            
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
                "batting_multiplier":player_stats.data.datascience_cricviz_match_scoring[0].batting_multiplier,
                "match":match.match_scoring.match,
                "Date":match.start_timestamp
              };

            console.log(player_current_performance)

        })
    });
}
// getPlayerMatchStats()
