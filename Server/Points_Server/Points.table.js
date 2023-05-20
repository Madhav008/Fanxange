function calculateBattingPoints(playerPerformance) {
    let battingPoints = 0;
  
    // Run Points
    let runPointsMapping = [
      { runs: 15, points: 1.8 },
      { runs: 25, points: 1.4 },
      { runs: 40, points: 1 },
      { runs: 70, points: 0.5 },
      { runs: 100, points: 0.2 },
      { runs: Infinity, points: 0.1 }
    ];
  
    let { bat_runs } = playerPerformance;
  
    for (let i = 0; i < runPointsMapping.length; i++) {
      if (bat_runs <= runPointsMapping[i].runs) {
        battingPoints += bat_runs * runPointsMapping[i].points;
        break;
      } else {
        battingPoints += runPointsMapping[i].runs * runPointsMapping[i].points;
        bat_runs -= runPointsMapping[i].runs;
      }
    }
  
    // Boundary Bonus Points
    battingPoints += playerPerformance.fours_hit * 1;
    battingPoints += playerPerformance.sixes_hit * 2;
  
    // Milestone Bonus
    if (bat_runs >= 50) {
      battingPoints += 2; // Half-Century Bonus
      if (bat_runs >= 100) {
        battingPoints += 5; // Century Bonus
      }
    }
  
    // Strike Rate Points
    let { balls_faced } = playerPerformance;
    let strikeRate = bat_runs / balls_faced;
  
    let strikeRatePointsMapping = [
      { upperBound: 0.7, over5Balls: -6, over25Balls: -12 },
      { upperBound: 1, over5Balls: -3, over25Balls: -6 },
      { upperBound: 1.1, over5Balls: 0, over25Balls: 0 },
      { upperBound: 1.3, over5Balls: 2, over25Balls: 4 },
      { upperBound: 1.6, over5Balls: 4, over25Balls: 8 },
      { upperBound: Infinity, over5Balls: 8, over25Balls: 16 }
    ];
  
    let strikeRatePoints;
    for (let i = 0; i < strikeRatePointsMapping.length; i++) {
      if (strikeRate <= strikeRatePointsMapping[i].upperBound) {
        strikeRatePoints = balls_faced >= 25 ? strikeRatePointsMapping[i].over25Balls : strikeRatePointsMapping[i].over5Balls;
        break;
      }
    }
  
    battingPoints += strikeRatePoints;
  
    // Batting Participation Points
    if (playerPerformance.balls_faced > 0) {
      battingPoints += 8; // Starts Batting
    } else if (playerPerformance.bat_runs === 0) {
      battingPoints += 5; // Did not Bat
    }
  
    return battingPoints;
  }
  
  function calculateBowlingPoints(playerPerformance) {
    let bowlingPoints = 0;
  
    // Wicket Points
    let { bowl_wickets } = playerPerformance;
  
    if (bowl_wickets > 10) {
      bowlingPoints += 92;
    } else {
      let wicketPointsMapping = [
        { wickets: 1, points: 15 },
        { wickets: 2, points: 28 },
        { wickets: 3, points: 42 },
        { wickets: 4, points: 53 },
        { wickets: 5, points: 63 },
        { wickets: 6, points: 70 },
        { wickets: 7, points: 77 },
        { wickets: 8, points: 84 },
        { wickets: 9, points: 88 },
        { wickets: 10, points: 92 }
      ];
  
      bowlingPoints += wicketPointsMapping[bowl_wickets].points;
    }
  
    // Bowl Bonus Points
    bowlingPoints += playerPerformance.dot_balls * 2;
    bowlingPoints += playerPerformance.balls_bowled;
  
    if (playerPerformance.maidens > 0) {
      bowlingPoints += playerPerformance.maidens * 10;
    }
  
    // Economy Bonus
    let { balls_bowled, bowl_runs } = playerPerformance;
    let economyRate = bowl_runs / (balls_bowled / 6);
  
    let economyBonusPointsMapping = [
      { upperBound: 0.7, over36Balls: 8, under36Balls: 16 },
      { upperBound: 1, over36Balls: 4, under36Balls: 8 },
      { upperBound: 1.1, over36Balls: 0, under36Balls: 0 },
      { upperBound: 1.3, over36Balls: -2, under36Balls: -4 },
      { upperBound: 1.6, over36Balls: -4, under36Balls: -8 },
      { upperBound: Infinity, over36Balls: -8, under36Balls: -16 }
    ];
  
    let economyBonusPoints;
    for (let i = 0; i < economyBonusPointsMapping.length; i++) {
      if (balls_bowled >= 36 && economyRate <= economyBonusPointsMapping[i].upperBound) {
        economyBonusPoints = economyBonusPointsMapping[i].over36Balls;
        break;
      } else if (balls_bowled < 36 && economyRate <= economyBonusPointsMapping[i].upperBound) {
        economyBonusPoints = economyBonusPointsMapping[i].under36Balls;
        break;
      }
    }
  
    bowlingPoints += economyBonusPoints;
  
    // Boundary Points
    bowlingPoints -= playerPerformance.fours_hit * 2;
    bowlingPoints -= playerPerformance.sixes_hit * 3;
  
    // Bowling Participation Points
    if (playerPerformance.balls_bowled > 0) {
      bowlingPoints += 5; // Starts Bowling
    } else if (playerPerformance.bowl_wickets === 0) {
      bowlingPoints += 5; // Did not Bowl
    }
  
    return bowlingPoints;
  }
  
  function calculateFieldingPoints(playerPerformance) {
    let fieldingPoints = 0;
  
    // Catch Points
    fieldingPoints += playerPerformance.catch * 4;
  
    // Run Out Points
    fieldingPoints += playerPerformance.run_out * 4;
  
    // Stumping Points
    fieldingPoints += playerPerformance.stumping * 4;
  
    return fieldingPoints;
  }
  
  // Example usage


  let playerCurrentPerformance = {
    "bat_runs": 35,
    "bat_runs_2": 0,
    "balls_faced": 22,
    "balls_faced_2": 0,
    "fours_hit": 3,
    "fours_hit_2": 0,
    "sixes_hit": 1,
    "sixes_hit_2": 0,
    "bowl_wickets": 0,
    "bowl_wickets_2": 0,
    "balls_bowled": 0,
    "balls_bowled_2": 0,
    "bowl_runs": 0,
    "dot_balls": 6,
    "dot_balls_2": 0,
    "maidens": 0,
    "maidens_2": 0,
    "catch": 1,
    "catch_2": 0,
    "stumping": 0,
    "stumping_2": 0,
    "run_out": null,
    "run_out_2": null,
    "run_points": 0,
    "milestone_bonus": 0,
    "batting_participation_points": 0,
    "batting_multiplier": 1,
  };

  let battingPoints = calculateBattingPoints(playerCurrentPerformance);
  let bowlingPoints = calculateBowlingPoints(playerCurrentPerformance);
  let fieldingPoints = calculateFieldingPoints(playerCurrentPerformance);
  
  console.log("Batting Points:", battingPoints);
  console.log("Bowling Points:", bowlingPoints);
  console.log("Fielding Points:", fieldingPoints);
  