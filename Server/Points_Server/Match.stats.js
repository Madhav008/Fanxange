const axios = require('axios');
async function getMatchStats(matchId) {
    let data = JSON.stringify({
        "operationName": "getPlayerStatsDetails",
        "variables": {
            "sixerPlayerMatchId": matchId
        },
        "query": "query getPlayerStatsDetails($sixerPlayerMatchId: bigint!) {\n  datascience_cricviz_match_scoring(where: {sixer_player_match_id: {_eq: $sixerPlayerMatchId}}) {\n    general_class_id\n    bat_points\n    bowl_points\n    fielding_points\n    playing_xi_points\n    points_average\n    total_points\n    bat_runs\n    bat_runs_2\n    balls_faced\n    balls_faced_2\n    fours_hit\n    fours_hit_2\n    sixes_hit\n    sixes_hit_2\n    bowl_wickets\n    bowl_wickets_2\n    balls_bowled\n    balls_bowled_2\n    bowl_runs\n    dot_balls\n    dot_balls_2\n    maidens\n    maidens_2\n    catch\n    catch_2\n    stumping\n    stumping_2\n    run_out\n    run_out_2\n    run_points\n    balls_faced_points\n    boundary_bonus_points\n    milestone_bonus\n    batting_participation_points\n    batting_multiplier\n    wicket_points\n    bowl_bonus_points\n    boundary_points\n    bowling_participation_points\n    strike_rate_points\n    economy_points\n    prematch_points_average\n  }\n}\n"
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

module.exports = getMatchStats;