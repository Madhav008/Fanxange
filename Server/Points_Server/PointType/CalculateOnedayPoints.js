const { calculateOnedayRunPoints, calculatetoneBoundryFacePoints, calculatetoneMilestonePoints, calculatetoneBattingPartipantPoints, calculateoneStrikeRatePoints } = require("../PointsSystem/BattingPoint");
const { calculateoneWicketPoints, calculateoneBonusPoints, calculateoneBoundryPoints, calculateoneEconomyPoints, calculateoneParticipationPoints } = require("../PointsSystem/BollwingPoints");
const { calculateCatchPoints, calculateRunOutPoints, calculateStumpingPoints } = require("../PointsSystem/FieldingPoints");

function calculateOneDayPoints(playerPerformance) {
    let points = 0;
    let { catches,runouts,stumping,isBall,runs_given,four_faces,six_faces,ball_bowled,dot_balls,madian_over,wickets,bat_runs, fours_hit, sixes_hit,ball_faced,fifty,hundred,isBat,isOut } = playerPerformance;


    /* All Batting Points  */
    points +=calculateOnedayRunPoints(bat_runs);
    points +=calculatetoneBoundryFacePoints(fours_hit, sixes_hit);
    points +=calculatetoneMilestonePoints(fifty,hundred);
    points +=calculatetoneBattingPartipantPoints(isBat,isOut);
    points +=calculateoneStrikeRatePoints(ball_faced,bat_runs);


    /* All Bowling Points */
    points +=calculateoneWicketPoints(wickets);
    points +=calculateoneBonusPoints(dot_balls,ball_bowled,madian_over);
    points +=calculateoneBoundryPoints(four_faces,six_faces);
    points +=calculateoneEconomyPoints(ball_bowled,runs_given);
    points +=calculateoneParticipationPoints(isBall);

    /* All Fielding Points */
    
    points +=calculateCatchPoints(catches);
    points +=calculateRunOutPoints(runouts);
    points +=calculateStumpingPoints(stumping);

    return points;
}

module.exports = calculateOneDayPoints;
