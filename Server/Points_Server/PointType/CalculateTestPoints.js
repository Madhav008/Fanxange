const { calculateTestRunPoints, calculatettestBoundryFacePoints, calculatettestMilestonePoints, calculatettestBattingPartipantPoints, calculateBallFacedPoints } = require("../PointsSystem/BattingPoint");

function calculateTestPoints(playerPerformance) {
    let points = 0;
    let { bat_runs, fours_hit, sixes_hit, ball_faced, fifty, hundred, isBat, isOut } = playerPerformance;

    /* All Batting Points  */
    calculateTestRunPoints(bat_runs);
    calculatettestBoundryFacePoints(fours_hit, sixes_hit);
    calculatettestMilestonePoints(fifty, hundred);
    calculatettestBattingPartipantPoints(isBat, isOut);
    calculateBallFacedPoints(ball_faced);


    /* All Bowling Points */


    /* All Fielding Points */


    return points;
}