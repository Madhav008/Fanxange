 
  function calculateBattingPoints(playerPerformance) {
    let battingPoints = 0;
    let { bat_runs, fours_hit, sixes_hit } = playerPerformance;
  
    const runPointsMapping = [
      { runs: 15, points: 1.8 },
      { runs: 25, points: 1.4 },
      { runs: 40, points: 1 },
      { runs: 70, points: 0.5 },
      { runs: 100, points: 0.2 },
      { runs: Infinity, points: 0.1 }
    ];
  
    for (let i = 0; i < runPointsMapping.length; i++) {
      if (bat_runs <= runPointsMapping[i].runs) {
        battingPoints += bat_runs * runPointsMapping[i].points;
        break;
      } else {
        battingPoints += runPointsMapping[i].runs * runPointsMapping[i].points;
        bat_runs -= runPointsMapping[i].runs;
      }
    }
  
    battingPoints += fours_hit * 1; // Boundary Bonus Points for fours
    battingPoints += sixes_hit * 2; // Boundary Bonus Points for sixes
  
    const { balls_faced } = playerPerformance;
    const strikeRate = balls_faced > 0 ? bat_runs / balls_faced : 0;
  
    const strikeRatePointsMapping = [
      { upperBound: 0.7, over5Balls: -6, over25Balls: -12 },
      { upperBound: 1, over5Balls: -3, over25Balls: -6 },
      { upperBound: 1.1, over5Balls: 0, over25Balls: 0 },
      { upperBound: 1.3, over5Balls: 2, over25Balls: 4 },
      { upperBound: 1.6, over5Balls: 4, over25Balls: 8 },
      { upperBound: Infinity, over5Balls: 8, over25Balls: 16 }
    ];
  
    let strikeRatePoints;
    for (let i = 0; i < strikeRatePointsMapping.length; i++) {
      if (balls_faced > 25 && strikeRate <= strikeRatePointsMapping[i].upperBound) {
        strikeRatePoints = strikeRatePointsMapping[i].over25Balls;
        break;
      } else if (balls_faced <= 25 && strikeRate <= strikeRatePointsMapping[i].upperBound) {
        strikeRatePoints = strikeRatePointsMapping[i].over5Balls;
        break;
      }
    }
  
    battingPoints += strikeRatePoints;
  
    if (bat_runs > 0) {
      battingPoints += 8; // Batting Participation Points for starting batting
    } else if (bat_runs === 0 && balls_faced === 0) {
      battingPoints += 5; // Batting Participation Points for not batting
    }
  
    return battingPoints;
  }
  
  function calculateBowlingPoints(playerPerformance) {
    let bowlingPoints = 0;
    let { dot_balls, maidens, balls_bowled, bowl_runs } = playerPerformance;
  
    const dotBallPoints = dot_balls * 2; // Dot Balls Points
  
    const ballsBowledPoints = balls_bowled; // Balls Bowled Points (1 point per ball in T20)
  
    const maidenOverPoints = maidens * 10; // Maiden Overs Points
  
    bowlingPoints += dotBallPoints + ballsBowledPoints + maidenOverPoints;
  
    const economy = balls_bowled > 0 ? bowl_runs / balls_bowled : 0;
  
    const economyPointsMapping = [
      { upperBound: 0.7, over36Balls: 8, under36Balls: 16 },
      { upperBound: 1, over36Balls: 4, under36Balls: 8 },
      { upperBound: 1.1, over36Balls: 0, under36Balls: 0 },
      { upperBound: 1.3, over36Balls: -2, under36Balls: -4 },
      { upperBound: 1.6, over36Balls: -4, under36Balls: -8 },
      { upperBound: Infinity, over36Balls: -8, under36Balls: -16 }
    ];
  
    let economyPoints;
    for (let i = 0; i < economyPointsMapping.length; i++) {
      if (balls_bowled > 36 && economy <= economyPointsMapping[i].upperBound) {
        economyPoints = economyPointsMapping[i].over36Balls;
        break;
      } else if (balls_bowled <= 36 && economy <= economyPointsMapping[i].upperBound) {
        economyPoints = economyPointsMapping[i].under36Balls;
        break;
      }
    }
  
    bowlingPoints += economyPoints;
  
    return bowlingPoints;
  }
  

  function calculateFieldingPoints(playerPerformance) {
    let fieldingPoints = 0;
    let { catch: catches, run_out: runOuts, stumping: stumpings } = playerPerformance;
  
    const catchPoints = 4;
    const runOutPoints = 4;
    const stumpingPoints = 4;
  
    fieldingPoints = (catches * catchPoints) + (runOuts * runOutPoints) + (stumpings * stumpingPoints);
  
    return fieldingPoints;
  }
  
  function getPlayerPoints(player_current_performance){
  // Calculate Batting Points
  const battingPoints = calculateBattingPoints(player_current_performance);
  
  // Calculate Bowling Points
  const bowlingPoints = calculateBowlingPoints(player_current_performance);
  
  // Calculate Fielding Points
  const fieldingPoints = calculateFieldingPoints(player_current_performance);
  
  const matchPoints = battingPoints + bowlingPoints + fieldingPoints;
  
  console.log("Batting Points:", battingPoints);
  console.log("Bowling Points:", bowlingPoints);
  console.log("Fielding Points:", fieldingPoints);
  console.log("Match Points =", matchPoints);

  }
  module.exports = getPlayerPoints