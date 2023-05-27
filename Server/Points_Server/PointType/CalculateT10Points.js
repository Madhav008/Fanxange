const {calculatet10BoundryFacePoints, calculatet10MilestonePoints, calculateStrikeRatePoints, calculatet10BattingPartipantPoints, calculateT10RunPoints } = require("../PointsSystem/BattingPoint");
const { calculatet10WicketPoints, calculatet10BonusPoints, calculatet10BoundryPoints, calculatet10EconomyPoints, calculatet10ParticipationPoints } = require("../PointsSystem/BollwingPoints");

function calculateT10Points(playerPerformance) {
    let points = 0;
    let { isBall,runs_given,four_faces,six_faces,ball_bowled,dot_balls,madian_over,wickets,bat_runs, fours_hit, sixes_hit, ball_faced, fifty, hundred, isBat, isOut } = playerPerformance;

    /* All Batting Points  */
    calculateT10RunPoints(bat_runs);
    calculatet10BoundryFacePoints(fours_hit, sixes_hit);
    calculatet10MilestonePoints(fifty, hundred);
    calculatet10BattingPartipantPoints(isBat, isOut);
    calculateStrikeRatePoints(ball_faced, bat_runs);


    /* All Bowling Points */
    calculatet10WicketPoints(wickets);
    calculatet10BonusPoints(dot_balls,ball_bowled,madian_over);
    calculatet10BoundryPoints(four_faces,six_faces);
    calculatet10EconomyPoints(ball_bowled,runs_given);
    calculatet10ParticipationPoints(isBall);

    /* All Fielding Points */


    return points;
}