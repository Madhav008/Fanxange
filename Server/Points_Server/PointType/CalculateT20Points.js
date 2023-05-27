const { calculatet20RunPoints, calculatet20BoundryFacePoints, calculatet20MilestonePoints, calculatet20StrikeRatePoints, calculatet20BattingPartipantPoints } = require("../PointsSystem/BattingPoint");
const { calculatet20WicketPoints, calculatet20BonusPoints, calculatet20BoundryPoints, calculatet20EconomyPoints, calculatet20ParticipationPoints } = require("../PointsSystem/BollwingPoints");
const { calculateCatchPoints, calculateRunOutPoints, calculateStumpingPoints } = require("../PointsSystem/FieldingPoints");

function calculateT20Points(playerPerformance) {
    let points = 0;
    let { catches,runouts,stumping,isBall,runs_given,four_faces,six_faces,ball_bowled,dot_balls,madian_over,wickets,bat_runs, fours_hit, sixes_hit, ball_faced, fifty, hundred, isBat, isOut } = playerPerformance;

    /* All Batting Points  */
    points += calculatet20RunPoints(bat_runs);
    points += calculatet20BoundryFacePoints(fours_hit, sixes_hit);
    points += calculatet20MilestonePoints(fifty, hundred);
    points += calculatet20BattingPartipantPoints(isBat, isOut);
    points += calculatet20StrikeRatePoints(ball_faced, bat_runs);


    /* All Bowling Points */
    points += calculatet20WicketPoints(wickets);
    points += calculatet20BonusPoints(dot_balls, ball_bowled, madian_over);
    points += calculatet20BoundryPoints(four_faces, six_faces);
    points += calculatet20EconomyPoints(ball_bowled, runs_given);
    points += calculatet20ParticipationPoints(isBall);

    /* All Fielding Points */
    
    points += calculateCatchPoints(catches);
    points += calculateRunOutPoints(runouts);
    points += calculateStumpingPoints(stumping);


    return points;
}

module.exports = calculateT20Points;