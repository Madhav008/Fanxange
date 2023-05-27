function calculateBattingPoints(playerPerformance) {
    let battingPoints = 0;
    let { bat_runs, fours_hit, sixes_hit } = playerPerformance;


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