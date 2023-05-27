const { calculateOnedayRunPoints, calculatetoneBoundryFacePoints, calculatetoneMilestonePoints, calculatetoneBattingPartipantPoints, calculateoneStrikeRatePoints } = require("../PointsSystem/BattingPoint");

function calculateOneDayPoints(playerPerformance) {
    let points = 0;
    let { bat_runs, fours_hit, sixes_hit,ball_faced,fifty,hundred,isBat,isOut } = playerPerformance;


    /* All Batting Points  */
    calculateOnedayRunPoints(bat_runs);
    calculatetoneBoundryFacePoints(fours_hit, sixes_hit);
    calculatetoneMilestonePoints(fifty,hundred);
    calculatetoneBattingPartipantPoints(isBat,isOut);
    calculateoneStrikeRatePoints(ball_faced,bat_runs);


    /* All Bowling Points */


    /* All Fielding Points */


    return points;
}