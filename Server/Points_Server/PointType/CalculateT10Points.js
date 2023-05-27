const {calculatet10BoundryFacePoints, calculatet10MilestonePoints, calculateStrikeRatePoints, calculatet10BattingPartipantPoints, calculateT10RunPoints } = require("../PointsSystem/BattingPoint");

function calculateT10Points(playerPerformance) {
    let points = 0;
    let { bat_runs, fours_hit, sixes_hit, ball_faced, fifty, hundred, isBat, isOut } = playerPerformance;

    /* All Batting Points  */
    calculateT10RunPoints(bat_runs);
    calculatet10BoundryFacePoints(fours_hit, sixes_hit);
    calculatet10MilestonePoints(fifty, hundred);
    calculatet10BattingPartipantPoints(isBat, isOut);
    calculateStrikeRatePoints(ball_faced, bat_runs);


    /* All Bowling Points */


    /* All Fielding Points */


    return points;
}