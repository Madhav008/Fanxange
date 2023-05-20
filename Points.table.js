let player_past_performance = {
    selling_amount: getRandomNumber(500000, 10000000),
    followers: getRandomNumber(1000000, 50000000),
    strike_rate: getRandomNumber(50, 150).toFixed(2),
    economy_rate: getRandomNumber(4, 8).toFixed(2),
    batting_average: getRandomNumber(40, 60).toFixed(2),
    bowling_average: getRandomNumber(20, 30).toFixed(2),
};

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// let player_current_performance = {
//     singles:39,
//     sixes: 5,
//     fours: 2,
//     out:1,
//     hundred:1,
//     fifty:2,
//     duck:0,
//     catches_taken:1,
//     stumping:1,
//     run_out:1,
//     direct_hit_out:0,
//     overthrow:2,
//     wickets:0,
//     median_over:0,
//     hatrik:0,
// }

let player_current_performance = {
    "general_class_id": 6,
    "bat_points": 64,
    "bowl_points": 5,
    "fielding_points": 0,
    "playing_xi_points": 5,
    "points_average": 52.09,
    "total_points": 74,
    "bat_runs": 37,
    "bat_runs_2": 0,
    "balls_faced": 25,
    "balls_faced_2": 0,
    "fours_hit": 1,
    "fours_hit_2": 0,
    "sixes_hit": 3,
    "sixes_hit_2": 0,
    "bowl_wickets": 0,
    "bowl_wickets_2": 0,
    "balls_bowled": 0,
    "balls_bowled_2": 0,
    "bowl_runs": 0,
    "dot_balls": 0,
    "dot_balls_2": 0,
    "maidens": 0,
    "maidens_2": 0,
    "catch": 0,
    "catch_2": 0,
    "stumping": 0,
    "stumping_2": 0,
    "run_out": null,
    "run_out_2": null,
    "run_points": 53,
    "balls_faced_points": 0,
    "boundary_bonus_points": 7,
    "milestone_bonus": 0,
    "batting_participation_points": 0,
    "batting_multiplier": 1,
    "wicket_points": 0,
    "bowl_bonus_points": 0,
    "boundary_points": 0,
    "bowling_participation_points": 5,
    "strike_rate_points": 4,
    "economy_points": 0,
    "prematch_points_average": 50.95
}
//Strike rate and Economy rate not be included in this as this decide the current performance of the player
let player_points = {
    singles: 1,
    sixes: 2,
    fours: 1,
    out: -1,
    hundred: 16,
    fifty: 8,
    duck: -2,
    catches_taken: 8,
    run_out: 6,
    stumping: 12,
    direct_hit_out: 12,
    overthrow: -2,
    wickets: 25,
    median_over: 12,
    hatrik: 4,
};

function getCurrentPerformacePoints() {
    let points = 0;

    // Check if each key exists in player_current_performance and has a non-zero value
    for (let key in player_points) {
        if (key in player_current_performance && player_current_performance[key] !== 0) {
            points += player_current_performance[key] * player_points[key];
        }
    }

    return points;
}

// console.log(getCurrentPerformacePoints())
function matchSimilarKeys(player_current_performance, player_points) {
    const keys1 = Object.keys(player_current_performance);
    const keys2 = Object.keys(player_points);
    const similarKeys = keys1.filter(key => keys2.includes(key));
    return similarKeys;
  }
  
  const similarKeys = matchSimilarKeys(player_current_performance, player_points);
  console.log(similarKeys);
  

function getPastPerformacePoints(player_past_performance){
    let points;



    return points;

}
