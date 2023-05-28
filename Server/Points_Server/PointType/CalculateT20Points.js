const { calculatet20RunPoints, calculatet20BoundryFacePoints, calculatet20MilestonePoints, calculatet20StrikeRatePoints, calculatet20BattingPartipantPoints } = require("../PointsSystem/BattingPoint");
const { calculatet20WicketPoints, calculatet20BonusPoints, calculatet20BoundryPoints, calculatet20EconomyPoints, calculatet20ParticipationPoints } = require("../PointsSystem/BollwingPoints");
const { calculateCatchPoints, calculateRunOutPoints, calculateStumpingPoints } = require("../PointsSystem/FieldingPoints");

function calculateT20Points(playerPerformance) {
  let points = 0;
  let { catches, runouts, stumping, isBall, runs_given, four_faces, six_faces, ball_bowled, dot_balls, madian_over, wickets, bat_runs, fours_hit, sixes_hit, ball_faced, fifty, hundred, isBat, isOut } = playerPerformance;

  /* All Batting Points  */
  if (bat_runs !== undefined) {
    points += calculatet20RunPoints(bat_runs);
  }
  if (fours_hit !== undefined && sixes_hit !== undefined) {
    points += calculatet20BoundryFacePoints(fours_hit, sixes_hit);
  }
  if (fifty !== undefined && hundred !== undefined) {
    points += calculatet20MilestonePoints(fifty, hundred);
  }
  if (isBat !== undefined && isOut !== undefined) {
    points += calculatet20BattingPartipantPoints(isBat, isOut);
  }
  if (ball_faced !== undefined && bat_runs !== undefined) {
    points += calculatet20StrikeRatePoints(ball_faced, bat_runs);
  }

  /* All Bowling Points */
  if (wickets !== undefined) {
    points += calculatet20WicketPoints(wickets);
  }
  if (dot_balls !== undefined && ball_bowled !== undefined && madian_over !== undefined) {
    points += calculatet20BonusPoints(dot_balls, ball_bowled, madian_over);
  }
  if (four_faces !== undefined && six_faces !== undefined) {
    points += calculatet20BoundryPoints(four_faces, six_faces);
  }
  if (ball_bowled !== undefined && runs_given !== undefined) {
    points += calculatet20EconomyPoints(ball_bowled, runs_given);
  }
  if (isBall !== undefined) {
    points += calculatet20ParticipationPoints(isBall);
  }

  /* All Fielding Points */
  if (catches !== undefined) {
    points += calculateCatchPoints(catches);
  }
  if (runouts !== undefined) {
    points += calculateRunOutPoints(runouts);
  }
  if (stumping !== undefined) {
    points += calculateStumpingPoints(stumping);
  }

  return points;
}

module.exports = { calculateT20Points };
