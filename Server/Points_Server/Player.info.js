const axios = require('axios');
async function getPlayerStats(cricviz_id) {
  let data = JSON.stringify(
    
    {
      "operationName": "getRecentMatches",
      "variables": {
        "playerId": cricviz_id,
        "lastPosition": 0,
        "limit": 5
      },
      "query": "query getRecentMatches($lastPosition: Int!, $limit: Int!, $playerId: bigint!) {\n  totalCount: datascience_cricviz_player_match_aggregate(where: {player_id: {_eq: $playerId}, is_hidden: {_eq: false}, _or: [{match_detail: {match_status: {_eq: \"live\"}, is_relevant: {_eq: true}}, is_team_announced: {_eq: true}}, {match_detail: {match_status: {_eq: \"complete\"}, is_relevant: {_eq: true}}, is_team_announced: {_eq: true}, _not: {_not: {match_scoring: {}}}}, {match_detail: {match_status: {_eq: \"complete\"}, is_relevant: {_eq: true}}, is_team_announced: {_eq: true}, in_playing_xi: {_eq: false}}], start_timestamp: {_gt: \"2022-01-01T00:00:00+00:00\"}}) {\n    aggregate {\n      count\n    }\n  }\n  datascience_cricviz_player_match(where: {player_id: {_eq: $playerId}, is_hidden: {_eq: false}, _or: [{match_detail: {match_status: {_eq: \"live\"}, is_relevant: {_eq: true}}, is_team_announced: {_eq: true}}, {match_detail: {match_status: {_eq: \"complete\"}, is_relevant: {_eq: true}}, is_team_announced: {_eq: true}, _not: {_not: {match_scoring: {}}}}, {match_detail: {match_status: {_eq: \"complete\"}, is_relevant: {_eq: true}}, is_team_announced: {_eq: true}, in_playing_xi: {_eq: false}}], start_timestamp: {_gt: \"2022-01-01T00:00:00+00:00\"}}, order_by: {start_timestamp: desc}, limit: $limit, offset: $lastPosition) {\n    in_playing_xi\n    start_timestamp\n    match_detail {\n      team1Abbreviation: team1_abbreviation\n      team2Abbreviation: team2_abbreviation\n      team1_name\n      team2_name\n      comp_name\n      scoring_system\n      rain_affected\n      live_status_name\n      result_name\n      bat_multiplier_team_1\n      bat_multiplier_team_2\n      bowl_multiplier_team_1\n      bowl_multiplier_team_2\n      sport_id\n      general_class_id\n    }\n    match_scoring {\n      bat_points\n      bowl_points\n      fielding_points\n      total_points\n      playing_xi_points\n      price\n      team\n      opposition\n      player_id\n      player\n      start_date\n      comp\n      match_status\n      match\n      match_player_id\n      sixer_player_match_id\n      balls_faced\n      balls_bowled\n      created\n      short_name\n      result_id\n      asset_price_changes {\n        total_points\n        prematch_points_average\n        points_average\n      }\n    }\n  }\n}\n"
    }
  
  );

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

module.exports = getPlayerStats;
