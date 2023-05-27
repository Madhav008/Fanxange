const { calculatet20RunPoints, calculatet20BoundryFacePoints, calculatet20MilestonePoints, calculatet20StrikeRatePoints } = require("../PointsSystem/BattingPoint");
const { calculatet20WicketPoints, calculatet20BonusPoints, calculatet20BoundryPoints, calculatet20EconomyPoints, calculatet20ParticipationPoints } = require("../PointsSystem/BollwingPoints");

function calculateT20Points(playerPerformance) {
    let points = 0;
    let { isBall,runs_given,four_faces,six_faces,ball_bowled,dot_balls,madian_over,wickets,bat_runs, fours_hit, sixes_hit, ball_faced, fifty, hundred, isBat, isOut } = playerPerformance;

    /* All Batting Points  */
    calculatet20RunPoints(bat_runs);
    calculatet20BoundryFacePoints(fours_hit, sixes_hit);
    calculatet20MilestonePoints(fifty, hundred);
    calculatet20BattingPartipantPoints(isBat, isOut);
    calculatet20StrikeRatePoints(ball_faced, bat_runs);


    /* All Bowling Points */
    calculatet20WicketPoints(wickets);
    calculatet20BonusPoints(dot_balls, ball_bowled, madian_over);
    calculatet20BoundryPoints(four_faces, six_faces);
    calculatet20EconomyPoints(ball_bowled, runs_given);
    calculatet20ParticipationPoints(isBall);

    /* All Fielding Points */


    return points;
}