const getPlayerStats = require('./Player.info');
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

            getPlayerStats(player.cricviz_id).then((player_stats) => {

                fs.writeFile(`${player.symbol}.json`, JSON.stringify(player_stats), (err) => {
                    if (err) {
                        console.error('Error writing JSON file:', err);
                    } else {
                        console.log('JSON file has been written successfully.');
                    }
                });



            })
        }
        // Access other keys as needed
    });
}


const PlayerStats = require('./v_kohli.json');
const getMatchStats = require('./Match.stats');

function getPlayerMatchStats() {
    PlayerStats.data.datascience_cricviz_player_match.forEach(match => {
        console.log("Start Time:", match.start_timestamp);
        console.log("Start Time:", match.match_scoring.sixer_player_match_id);
        // console.log("Start Time:", match.start_timestamp);
        getMatchStats(match.match_scoring.sixer_player_match_id).then((player_stats) => {

            fs.writeFile(`${match.match_scoring.match}.json`, JSON.stringify(player_stats), (err) => {
                if (err) {
                    console.error('Error writing JSON file:', err);
                } else {
                    console.log('JSON file has been written successfully.');
                }
            });



        })
    });
}

