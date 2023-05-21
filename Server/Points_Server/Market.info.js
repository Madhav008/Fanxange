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
            getCrickvizPlayer(player.symbol, player.cricviz_id).then((player_stats) => {
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
                    "Teams": player_stats.data.sixergame_sixers[0].allTeams
                }
                console.log(player_info)
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
        // console.log("Start Time:", match.start_timestamp);
        // console.log("Match Id:", match.match_scoring.sixer_player_match_id);
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
                "batting_multiplier": player_stats.data.datascience_cricviz_match_scoring[0].batting_multiplier,
                "match": match.match_scoring.match,
                "Date": match.start_timestamp
            };

            console.log(player_current_performance)

        })
    });
}
// getPlayerMatchStats()
