const { calculateOnedayRunPoints, calculatetoneBoundryFacePoints, calculatetoneMilestonePoints, calculatetoneBattingPartipantPoints, calculateoneStrikeRatePoints } = require("../PointsSystem/BattingPoint");

function calculateOneDayPoints(playerPerformance) {
    let points = 0;
    let { isBall,runs_given,four_faces,six_faces,ball_bowled,dot_balls,madian_over,wickets,bat_runs, fours_hit, sixes_hit,ball_faced,fifty,hundred,isBat,isOut } = playerPerformance;


    /* All Batting Points  */
    calculateOnedayRunPoints(bat_runs);
    calculatetoneBoundryFacePoints(fours_hit, sixes_hit);
    calculatetoneMilestonePoints(fifty,hundred);
    calculatetoneBattingPartipantPoints(isBat,isOut);
    calculateoneStrikeRatePoints(ball_faced,bat_runs);


    /* All Bowling Points */
    calculateoneWicketPoints(wickets);
    calculateoneBonusPoints(dot_balls,ball_bowled,madian_over);
    calculateoneBoundryPoints(four_faces,six_faces);
    calculateoneEconomyPoints(ball_bowled,runs_given);
    calculateoneParticipationPoints(isBall);

    /* All Fielding Points */


    return points;
}