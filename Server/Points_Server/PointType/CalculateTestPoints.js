const { calculateTestRunPoints, calculatettestBoundryFacePoints, calculatettestMilestonePoints, calculatettestBattingPartipantPoints, calculateBallFacedPoints } = require("../PointsSystem/BattingPoint");

const { calculatetestWicketPoints, calculatetestBonusPoints, calculatetestBoundryPoints, calculatetestParticipationPoints } = require("../PointsSystem/BollwingPoints")

function calculateTestPoints(playerPerformance) {
    let points = 0;
    let { isBall,four_faces,six_faces,dot_balls,madian_over,wickets,bat_runs, fours_hit, sixes_hit, ball_faced, fifty, hundred, isBat, isOut } = playerPerformance;

    /* All Batting Points  */
    calculateTestRunPoints(bat_runs);
    calculatettestBoundryFacePoints(fours_hit, sixes_hit);
    calculatettestMilestonePoints(fifty, hundred);
    calculatettestBattingPartipantPoints(isBat, isOut);
    calculateBallFacedPoints(ball_faced);


    /* All Bowling Points */
    calculatetestWicketPoints(wickets)
    calculatetestBonusPoints(dot_balls,madian_over);
    calculatetestBoundryPoints(four_faces,six_faces);
    calculatetestParticipationPoints(isBall);

    
    /* All Fielding Points */


    return points;
}