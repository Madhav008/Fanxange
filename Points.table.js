let player_past_performance = {
    selling_amount :'',
    followes : '',
    strike_rate:'',
    economy_rate:'',
    batting_average: '',
    bowling_average:''
}


let player_current_performance = {
    singles:39,
    sixes: 5,
    fours: 2,
    out:1,
    hundred:1,
    fifty:2,
    duck:0,
    catches_taken:1,
    stumping:1,
    run_out:1,
    direct_hit_out:0,
    overthrow:2,
    wickets:0,
    median_over:0,
    hatrik:0,
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

console.log(getCurrentPerformacePoints())

function getPastPerformacePoints(player_past_performance){
    let points;



    return points;

}
