const { calculatet10BoundryFacePoints, calculatet10MilestonePoints, calculateStrikeRatePoints, calculatet10BattingPartipantPoints, calculateT10RunPoints } = require("../PointsSystem/BattingPoint");
const { calculatet10WicketPoints, calculatet10BonusPoints, calculatet10BoundryPoints, calculatet10EconomyPoints, calculatet10ParticipationPoints } = require("../PointsSystem/BollwingPoints");
const { calculateCatchPoints, calculateRunOutPoints, calculateStumpingPoints } = require("../PointsSystem/FieldingPoints");

// function calculateT10Points(playerPerformance) {
//     let points = 0;
//     let { catches,runouts,stumping,isBall,runs_given,four_faces,six_faces,ball_bowled,dot_balls,madian_over,wickets,bat_runs, fours_hit, sixes_hit, ball_faced, fifty, hundred, isBat, isOut } = playerPerformance;

//     /* All Batting Points  */
//     points +=calculateT10RunPoints(bat_runs);
//     points +=calculatet10BoundryFacePoints(fours_hit, sixes_hit);
//     points +=calculatet10MilestonePoints(fifty, hundred);
//     points +=calculatet10BattingPartipantPoints(isBat, isOut);
//     points +=calculateStrikeRatePoints(ball_faced, bat_runs);


//     /* All Bowling Points */
//     points +=calculatet10WicketPoints(wickets);
//     points +=calculatet10BonusPoints(dot_balls,ball_bowled,madian_over);
//     points +=calculatet10BoundryPoints(four_faces,six_faces);
//     points +=calculatet10EconomyPoints(ball_bowled,runs_given);
//     points +=calculatet10ParticipationPoints(isBall);

//     /* All Fielding Points */
//     points +=calculateCatchPoints(catches);
//     points +=calculateRunOutPoints(runouts);
//     points +=calculateStumpingPoints(stumping);


//     return points;
// }
// module.exports = calculateT10Points;



// T10 Batting Points
function calculateT10BattingPoints(playerPerformance) {
    let points = 0;
    const { bat_runs, fours_hit, sixes_hit, ball_faced, fifty, hundred, isBat, isOut } = playerPerformance;

    points += calculateT10RunPoints(bat_runs);
    points += calculatet10BoundryFacePoints(fours_hit, sixes_hit);
    points += calculatet10MilestonePoints(fifty, hundred);
    points += calculatet10BattingPartipantPoints(isBat, isOut);
    points += calculateStrikeRatePoints(ball_faced, bat_runs);

    return points;
}

function calculateT10BowlingPoints(playerPerformance) {
    let points = 0;
    const { wickets, dot_balls, ball_bowled, madian_over, four_faces, six_faces, runs_given, isBall } = playerPerformance;
  
    if (typeof wickets !== 'undefined') {
      points += calculatet10WicketPoints(wickets);
      // console.log("Wicket Points:", points);
    }
  
    if (typeof dot_balls !== 'undefined' && typeof ball_bowled !== 'undefined' && typeof madian_over !== 'undefined') {
      points += calculatet10BonusPoints(dot_balls, ball_bowled, madian_over);
      // console.log("Bonus Points:", points);
    }
  
    if (typeof four_faces !== 'undefined' && typeof six_faces !== 'undefined') {
      points += calculatet10BoundryPoints(four_faces, six_faces);
      // console.log("Boundary Points:", points);
    }
  
    if (typeof ball_bowled !== 'undefined' && typeof runs_given !== 'undefined') {
      points += calculatet10EconomyPoints(ball_bowled, runs_given);
      // console.log("Economy Points:", points);
    }
  
    if (typeof isBall !== 'undefined') {
      points += calculatet10ParticipationPoints(isBall);
      // console.log("Participation Points:", points);
    }
  
    return points;
  }
  
// T10 Fielding Points
function calculateT10FieldingPoints(playerPerformance) {
    let points = 0;
    const { catches, runouts, stumping } = playerPerformance;

    points += calculateCatchPoints(catches);
    points += calculateRunOutPoints(runouts);
    points += calculateStumpingPoints(stumping);

    return points;
}

module.exports = {
    calculateT10BattingPoints,
    calculateT10BowlingPoints,
    calculateT10FieldingPoints,
};
