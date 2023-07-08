const axios = require('axios');

async function getCrickvizPlayer(playerID, cricvizPlayerId) {

    let data = JSON.stringify({
        "operationName": "GetPlayerStats",
        "variables": {
            "playerID": playerID,
            "cricvizPlayerId": cricvizPlayerId
        },
        "query": "query GetPlayerStats($playerID: String!, $cricvizPlayerId: bigint!) {\n  sixergame_sixers(where: {playerCricketApiKey: {_eq: $playerID}}) {\n    allTeams\n    player_summary\n    cricviz_details\n    player_stats {\n      one_day_stats\n      t20_stats\n      test_stats\n      domestic_t20_stats\n      first_class_stats\n      limited_over_stats\n    }\n  }\n  datascience_cricviz_player_match(where: {_not: {_not: {match_detail: {}}}, is_hidden: {_eq: false}, _or: [{match_detail: {match_status: {_eq: \"live\"}, is_relevant: {_eq: true}}, is_team_announced: {_eq: false}}, {match_detail: {match_status: {_in: \"forthcoming\"}, is_relevant: {_eq: true}}}], player_id: {_eq: $cricvizPlayerId}}, order_by: {match_detail: {start_datetime_utc: asc}}) {\n    match_detail {\n      match_status\n      name\n      team1_name\n      team2_name\n      title\n      start_datetime_utc\n    }\n    in_playing_xi\n    squad_id\n  }\n  datascience_upcoming_games_manual(where: {player_id: {_eq: $cricvizPlayerId}}) {\n    player_id\n    start_date\n    upcoming_match_name\n    team1_name\n    team2_name\n  }\n}\n"
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://gateway.sixergame.com/hasura',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    try {
        var res = await axios.request(config)
        // console.log(res.data)
        return res.data;
    } catch (error) {
        console.log(JSON.stringify(error.message));
    }

}

module.exports = getCrickvizPlayer