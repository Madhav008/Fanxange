const { calculatet20RunPoints, calculatet20BoundryFacePoints, calculatet20MilestonePoints, calculatet20StrikeRatePoints } = require("../PointsSystem/BattingPoint");

function calculateT20Points(playerPerformance) {
    let points = 0;
    let { bat_runs, fours_hit, sixes_hit, ball_faced, fifty, hundred, isBat, isOut } = playerPerformance;

    /* All Batting Points  */
    calculatet20RunPoints(bat_runs);
    calculatet20BoundryFacePoints(fours_hit, sixes_hit);
    calculatet20MilestonePoints(fifty, hundred);
    calculatet20BattingPartipantPoints(isBat, isOut);
    calculatet20StrikeRatePoints(ball_faced, bat_runs);


    /* All Bowling Points */


    /* All Fielding Points */


    return points;
}