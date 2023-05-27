const { calculateTestRunPoints, calculatettestBoundryFacePoints, calculatettestMilestonePoints, calculatettestBattingPartipantPoints, calculateBallFacedPoints } = require("../PointsSystem/BattingPoint");

const { calculatetestWicketPoints, calculatetestBonusPoints, calculatetestBoundryPoints, calculatetestParticipationPoints } = require("../PointsSystem/BollwingPoints");
const { calculateCatchPoints, calculateRunOutPoints, calculateStumpingPoints } = require("../PointsSystem/FieldingPoints");

function calculateTestPoints(playerPerformance) {
    let points = 0;
    let { catches,runouts,stumping,isBall,four_faces,six_faces,dot_balls,madian_over,wickets,bat_runs, fours_hit, sixes_hit, ball_faced, fifty, hundred, isBat, isOut } = playerPerformance;

    /* All Batting Points  */
    points += calculateTestRunPoints(bat_runs);
    points += calculatettestBoundryFacePoints(fours_hit, sixes_hit);
    points += calculatettestMilestonePoints(fifty, hundred);
    points += calculatettestBattingPartipantPoints(isBat, isOut);
    points += calculateBallFacedPoints(ball_faced);


    /* All Bowling Points */
    points += calculatetestWicketPoints(wickets)
    points += calculatetestBonusPoints(dot_balls,madian_over);
    points += calculatetestBoundryPoints(four_faces,six_faces);
    points += calculatetestParticipationPoints(isBall);


    /* All Fielding Points */
    
    points += calculateCatchPoints(catches);
    points += calculateRunOutPoints(runouts);
    points += calculateStumpingPoints(stumping);


    return points;
}
module.exports = calculateTestPoints;