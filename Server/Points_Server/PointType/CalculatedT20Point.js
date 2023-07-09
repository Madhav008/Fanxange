const {
    calculatet20RunPoints,
    calculatet20BoundryFacePoints,
    calculatet20MilestonePoints,
    calculatet20StrikeRatePoints,
    calculatet20BattingPartipantPoints
  } = require("../PointsSystem/BattingPoint");
  
  const {
    calculatet20WicketPoints,
    calculatet20BonusPoints,
    calculatet20BoundryPoints,
    calculatet20EconomyPoints,
    calculatet20ParticipationPoints
  } = require("../PointsSystem/BollwingPoints");
  
  const {
    calculateCatchPoints,
    calculateRunOutPoints,
    calculateStumpingPoints
  } = require("../PointsSystem/FieldingPoints");
  
  // function calculateT20Points(playerPerformance) {
  //   var points = 0;
  //   let {
  //     catches,
  //     runouts,
  //     stumping,
  //     isBall,
  //     runs_given,
  //     four_faces,
  //     six_faces,
  //     ball_bowled,
  //     dot_balls,
  //     madian_over,
  //     wickets,
  //     bat_runs,
  //     fours_hit,
  //     sixes_hit,
  //     ball_faced,
  //     fifty,
  //     hundred,
  //     isBat,
  //     isOut
  //   } = playerPerformance;
  
  //     /* All Batting Points */
  //     if (bat_runs !== undefined) {
  //       points += calculatet20RunPoints(bat_runs);
  //       //console.log("Batting Points:", points);
  //     }
  //     if (fours_hit !== undefined && sixes_hit !== undefined) {
  //       points += calculatet20BoundryFacePoints(fours_hit, sixes_hit);
  //       //console.log("Boundry Face Points:", points);
  //     }
  //     if (fifty !== undefined && hundred !== undefined) {
  //       points += calculatet20MilestonePoints(fifty, hundred);
  //       //console.log("Milestone Points:", points);
  //     }
  //     if (isBat !== undefined && isOut !== undefined) {
  //       points += calculatet20BattingPartipantPoints(isBat, isOut);
  //       //console.log("Batting Participation Points:", points);
  //     }
  //     if (ball_faced !== undefined && bat_runs !== undefined) {
  //       points += calculatet20StrikeRatePoints(ball_faced, bat_runs);
  //       //console.log("Strike Rate Points:", points);
  //     }
  //     let temp_batPoints = points;
  
  //   /* All Bowling Points */
  //   if (wickets !== undefined) {
  //     points += calculatet20WicketPoints(wickets);
  //     console.log("Wickets Points:", points);
  //   }
  //   if (dot_balls !== undefined && ball_bowled !== undefined && madian_over !== undefined) {
  //     points += calculatet20BonusPoints(dot_balls, ball_bowled, madian_over);
  //     console.log("T20 Bonus Points:", points - temp_batPoints);
  //   }
  //   if (four_faces !== undefined && six_faces !== undefined) {
  //     points += calculatet20BoundryPoints(four_faces, six_faces);
  //     console.log("Bowling Boundry Points:", points);
  //   }
  //   if (ball_bowled !== undefined && runs_given !== undefined) {
  //     points += calculatet20EconomyPoints(ball_bowled, runs_given);
  //     console.log("Economy Points:", points);
  //   }
  //   if (isBall !== undefined) {
  //     points += calculatet20ParticipationPoints(isBall);
  //     console.log("Bowling Participation Points:", points);
  //   }
  
  //   /* All Fielding Points */
  //   if (catches !== undefined) {
  //     points += parseFloat(calculateCatchPoints(catches));
  //     //console.log("Catch Points:", points);
  //   }
  //   if (runouts !== undefined) {
  //     points += calculateRunOutPoints(runouts);
  //     //console.log("Run Out Points:", points);
  //   }
  //   if (stumping !== undefined) {
  //     points += calculateStumpingPoints(stumping);
  //     //console.log("Stumping Points:", points);
  //   }
  
  //   return points;
  // }
  
  
  function calculateT20Points(playerPerformance) {
    let points = 0;
    const battingPoints = calculateBattingPoints(playerPerformance);
    const bowlingPoints = calculateBowlingPoints(playerPerformance);
    const fieldingPoints = calculateFieldingPoints(playerPerformance);
    points = battingPoints + bowlingPoints + fieldingPoints;
    return points;
  }
  
  function calculateBattingPoints(playerPerformance) {
    let points = 0;
    const {
      bat_runs,
      fours_hit,
      sixes_hit,
      fifty,
      hundred,
      isBat,
      isOut,
      ball_faced
    } = playerPerformance;
  
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
  
    return points;
  }
  
  function calculateBowlingPoints(playerPerformance) {
    let points = 0;
    const {
      wickets,
      dot_balls,
      ball_bowled,
      madian_over,
      four_faces,
      six_faces,
      runs_given,
      isBall
    } = playerPerformance;
  
    if (wickets !== undefined) {
      const wicketPoints = calculatet20WicketPoints(wickets);
      points += wicketPoints;
      // console.log(`Wicket Points: ${wicketPoints}`);
    }
    if (dot_balls !== undefined && ball_bowled !== undefined && madian_over !== undefined) {
      const bonusPoints = calculatet20BonusPoints(dot_balls, ball_bowled, madian_over);
      points += bonusPoints;
      // console.log(`Bonus Points: ${bonusPoints}`);
    }
    if (four_faces !== undefined && six_faces !== undefined) {
      const boundaryPoints = calculatet20BoundryPoints(four_faces, six_faces);
      points += boundaryPoints;
      // console.log(`Boundary Points: ${boundaryPoints}`);
    }
    if (ball_bowled !== undefined && runs_given !== undefined) {
      const economyPoints = calculatet20EconomyPoints(ball_bowled, runs_given);
      points += economyPoints;
      // console.log(`Economy Points: ${economyPoints}`);
    }
    if (isBall !== undefined) {
      const participationPoints = calculatet20ParticipationPoints(isBall);
      points += participationPoints;
      // console.log(`Participation Points: ${participationPoints}`);
    }
  
    return points;
  }
  
  
  function calculateFieldingPoints(playerPerformance) {
    let points = 0;
    const { catches, runouts, stumping } = playerPerformance;
  
    if (catches !== undefined) {
      points += parseFloat(calculateCatchPoints(catches));
    }
    if (runouts !== undefined) {
      points += calculateRunOutPoints(runouts);
    }
    if (stumping !== undefined) {
      points += calculateStumpingPoints(stumping);
    }
  
    return points;
  }
  
  module.exports = {
    calculateT20Points, calculateBattingPoints,
    calculateBowlingPoints,
    calculateFieldingPoints
  };