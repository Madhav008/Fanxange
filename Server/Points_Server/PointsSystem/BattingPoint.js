const testRunPoints = [
    { lowerLimit: 1, upperLimit: 10, points: 0.8 },
    { lowerLimit: 11, upperLimit: 30, points: 0.6 },
    { lowerLimit: 31, upperLimit: 40, points: 0.4 },
    { lowerLimit: 41, upperLimit: 60, points: 0.3 },
    { lowerLimit: 61, upperLimit: 80, points: 0.2 },
    { lowerLimit: 81, upperLimit: 160, points: 0.1 },
    { lowerLimit: 161, upperLimit: Infinity, points: 0.05 },
];

const OnedayRunPoints = [
    { lowerLimit: 1, upperLimit: 15, points: 1.3 },
    { lowerLimit: 16, upperLimit: 30, points: 1 },
    { lowerLimit: 31, upperLimit: 40, points: 0.7 },
    { lowerLimit: 41, upperLimit: 60, points: 0.5 },
    { lowerLimit: 61, upperLimit: 100, points: 0.3 },
    { lowerLimit: 101, upperLimit: Infinity, points: 0.15 },
];

const t10RunPoints = [
    { lowerLimit: 1, upperLimit: 10, points: 0.6 },
    { lowerLimit: 11, upperLimit: 25, points: 0.8 },
    { lowerLimit: 26, upperLimit: 40, points: 1 },
    { lowerLimit: 41, upperLimit: 60, points: 1.1 },
    { lowerLimit: 61, upperLimit: 80, points: 1.2 },
    { lowerLimit: 81, upperLimit: Infinity, points: 1.3 },
];

const t20RunPoints = [
    { lowerLimit: 1, upperLimit: 15, points: 1.8 },
    { lowerLimit: 16, upperLimit: 25, points: 1.4 },
    { lowerLimit: 26, upperLimit: 40, points: 1 },
    { lowerLimit: 41, upperLimit: 70, points: 0.5 },
    { lowerLimit: 71, upperLimit: 100, points: 0.2 },
];
//Create the Funtion for the t20RunPoins
function calculatet20RunPoints(bat_runs) {
    let runPoints = 0;

    // let {bat_runs} = playerPerformance;
    // let bat_runs = 35;
    let intial_bat_runs = bat_runs;
    for (let i = 0; i < t20RunPoints.length; i++) {

        if (i == 0) {
            if (bat_runs >= t20RunPoints[0].lowerLimit) {

                if (bat_runs >= t20RunPoints[0].upperLimit) {
                    let runs = t20RunPoints[0].upperLimit;
                    intial_bat_runs -= runs;
                    runPoints += runs * t20RunPoints[0].points;
                    console.log("RUNS SCORED =" + runs + " Run Points =" + runPoints + " Runs LEFT =" + intial_bat_runs)
                } else {
                    let runs = t20RunPoints[0].lowerLimit;
                    intial_bat_runs -= runs - 1;
                    runPoints += runs * t20RunPoints[0].points;
                    console.log("RUNS SCORED =" + runs + " Run Points =" + runPoints + " Runs LEFT =" + intial_bat_runs)
                }

                // console.log("RUNS SCORED >" + runs + " Run Points "+ runPoints)
            }
        } else {
            if (bat_runs >= t20RunPoints[i].lowerLimit) {

                if (bat_runs >= t20RunPoints[i].upperLimit) {
                    let runs = (t20RunPoints[i].upperLimit - t20RunPoints[i].lowerLimit) + 1;
                    intial_bat_runs -= runs;
                    runPoints += runs * t20RunPoints[i].points;
                    console.log("RUNS SCORED =" + runs + " Run Points =" + (runs * t20RunPoints[i].points) + " Runs LEFT =" + intial_bat_runs)
                } else {
                    let runs = intial_bat_runs;
                    runPoints += intial_bat_runs * t20RunPoints[i].points;
                    console.log("RUNS SCORED =" + runs + " Run Points =" + (runs * t20RunPoints[i].points) + " Runs LEFT =" + intial_bat_runs)
                }

            }
        }

    }
    console.log(runPoints);

    return runPoints;


}

function calculateTestRunPoints(bat_runs) {
    let runPoints = 0;
    // let bat_runs = 26;
    let intial_bat_runs = bat_runs;

    for (let i = 0; i < testRunPoints.length; i++) {
        if (i === 0) {
            if (bat_runs >= testRunPoints[0].lowerLimit) {
                if (bat_runs >= testRunPoints[0].upperLimit) {
                    let runs = testRunPoints[0].upperLimit;
                    intial_bat_runs -= runs;
                    runPoints += runs * testRunPoints[0].points;
                    console.log("RUNS SCORED =", runs, "Run Points =", runPoints, "Runs LEFT =", intial_bat_runs);
                } else {
                    let runs = testRunPoints[0].lowerLimit;
                    intial_bat_runs -= runs - 1;
                    runPoints += runs * testRunPoints[0].points;
                    console.log("RUNS SCORED =", runs, "Run Points =", runPoints, "Runs LEFT =", intial_bat_runs);
                }
            }
        } else {
            if (bat_runs >= testRunPoints[i].lowerLimit) {
                if (bat_runs >= testRunPoints[i].upperLimit) {
                    let runs = (testRunPoints[i].upperLimit - testRunPoints[i].lowerLimit) + 1;
                    intial_bat_runs -= runs;
                    runPoints += runs * testRunPoints[i].points;
                    console.log("RUNS SCORED =", runs, "Run Points =", runs * testRunPoints[i].points, "Runs LEFT =", intial_bat_runs);
                } else {
                    let runs = intial_bat_runs;
                    runPoints += intial_bat_runs * testRunPoints[i].points;
                    console.log("RUNS SCORED =", runs, "Run Points =", runs * testRunPoints[i].points, "Runs LEFT =", intial_bat_runs);
                }
            }
        }
    }

    console.log(runPoints);

    return runPoints;

}

function calculateOnedayRunPoints(bat_runs) {
    let runPoints = 0;
    // let bat_runs = 52;
    let intial_bat_runs = bat_runs;

    for (let i = 0; i < OnedayRunPoints.length; i++) {
        if (i === 0) {
            if (bat_runs >= OnedayRunPoints[0].lowerLimit) {
                if (bat_runs >= OnedayRunPoints[0].upperLimit) {
                    let runs = OnedayRunPoints[0].upperLimit;
                    intial_bat_runs -= runs;
                    runPoints += runs * OnedayRunPoints[0].points;
                    console.log("RUNS SCORED =", runs, "Run Points =", runPoints, "Runs LEFT =", intial_bat_runs);
                } else {
                    let runs = OnedayRunPoints[0].lowerLimit;
                    intial_bat_runs -= runs - 1;
                    runPoints += runs * OnedayRunPoints[0].points;
                    console.log("RUNS SCORED =", runs, "Run Points =", runPoints, "Runs LEFT =", intial_bat_runs);
                }
            }
        } else {
            if (bat_runs >= OnedayRunPoints[i].lowerLimit) {
                if (bat_runs >= OnedayRunPoints[i].upperLimit) {
                    let runs = (OnedayRunPoints[i].upperLimit - OnedayRunPoints[i].lowerLimit) + 1;
                    intial_bat_runs -= runs;
                    runPoints += runs * OnedayRunPoints[i].points;
                    console.log("RUNS SCORED =", runs, "Run Points =", runs * OnedayRunPoints[i].points, "Runs LEFT =", intial_bat_runs);
                } else {
                    let runs = intial_bat_runs;
                    runPoints += intial_bat_runs * OnedayRunPoints[i].points;
                    console.log("RUNS SCORED =", runs, "Run Points =", runs * OnedayRunPoints[i].points, "Runs LEFT =", intial_bat_runs);
                }
            }
        }
    }

    console.log(runPoints);
    return runPoints;
    
}

function calculateT10RunPoints(bat_runs) {
    let runPoints = 0;
    // let bat_runs = 48;
    let intial_bat_runs = bat_runs;

    for (let i = 0; i < t10RunPoints.length; i++) {
        if (i === 0) {
            if (bat_runs >= t10RunPoints[0].lowerLimit) {
                if (bat_runs >= t10RunPoints[0].upperLimit) {
                    let runs = t10RunPoints[0].upperLimit;
                    intial_bat_runs -= runs;
                    runPoints += runs * t10RunPoints[0].points;
                    console.log("RUNS SCORED =", runs, "Run Points =", runPoints, "Runs LEFT =", intial_bat_runs);
                } else {
                    let runs = t10RunPoints[0].lowerLimit;
                    intial_bat_runs -= runs - 1;
                    runPoints += runs * t10RunPoints[0].points;
                    console.log("RUNS SCORED =", runs, "Run Points =", runPoints, "Runs LEFT =", intial_bat_runs);
                }
            }
        } else {
            if (bat_runs >= t10RunPoints[i].lowerLimit) {
                if (bat_runs >= t10RunPoints[i].upperLimit) {
                    let runs = (t10RunPoints[i].upperLimit - t10RunPoints[i].lowerLimit) + 1;
                    intial_bat_runs -= runs;
                    runPoints += runs * t10RunPoints[i].points;
                    console.log("RUNS SCORED =", runs, "Run Points =", runs * t10RunPoints[i].points, "Runs LEFT =", intial_bat_runs);
                } else {
                    let runs = intial_bat_runs;
                    runPoints += intial_bat_runs * t10RunPoints[i].points;
                    console.log("RUNS SCORED =", runs, "Run Points =", runs * t10RunPoints[i].points, "Runs LEFT =", intial_bat_runs);
                }
            }
        }
    }

    console.log(runPoints);
    return runPoints;
}

const t20BoundryPoints = {
    four: 1,
    six: 2,
}

const oneBoundryPoints = {
    four: 0.5,
    six: 1,
}

const testBoundryPoints = {
    four: 0.3,
    six: 0.4,
}

const t10BoundryPoints = {
    four: 1,
    six: 2,
}
//Create the function for the boundry face points
function calculatet20BoundryFacePoints(no_of_4,no_of_6) {
    let boundryPoints = 0;

    // let no_of_4 = 1;
    // let no_of_6 = 2;

    boundryPoints = (no_of_4 * t20BoundryPoints.four) + (no_of_6 * t20BoundryPoints.six)

    console.log(boundryPoints)
    return boundryPoints;
}
function calculatet10BoundryFacePoints(no_of_4,no_of_6) {
    let boundryPoints = 0;

    // let no_of_4 = 1;
    // let no_of_6 = 2;

    boundryPoints = (no_of_4 * t10BoundryPoints.four) + (no_of_6 * t10BoundryPoints.six)

    console.log(boundryPoints)
    return boundryPoints;

}
function calculatetoneBoundryFacePoints(no_of_4,no_of_6) {
    let boundryPoints = 0;

    // let no_of_4 = 1;
    // let no_of_6 = 2;

    boundryPoints = (no_of_4 * oneBoundryPoints.four) + (no_of_6 * oneBoundryPoints.six)

    console.log(boundryPoints)

    return boundryPoints;

}
function calculatettestBoundryFacePoints(no_of_4,no_of_6) {
    let boundryPoints = 0;

    // let no_of_4 = 1;
    // let no_of_6 = 2;

    boundryPoints = (no_of_4 * testBoundryPoints.four) + (no_of_6 * testBoundryPoints.six)

    console.log(boundryPoints)
    return boundryPoints;

}



//Create the function for the Milestone points
const t20MilestonePoints = {
    half_centuary: 2,
    centuary: 7,
}

const oneMilestonePoints = {
    half_centuary: 3,
    centuary: 9,
}

const testMilestonePoints = {
    half_centuary: 3,
    centuary: 5,
}

const t10MilestonePoints = {
    half_centuary: 8,
    centuary: 5,
}

function calculatet20MilestonePoints(no_of_fifty,no_of_hundred) {
    let MilestonePoints = 0;

    // let no_of_fifty = 1;
    // let no_of_hundred = 2;

    MilestonePoints = (no_of_fifty * t20MilestonePoints.half_centuary) + (no_of_hundred * t20MilestonePoints.centuary)

    console.log(MilestonePoints)
    return MilestonePoints;
}
function calculatet10MilestonePoints(no_of_fifty,no_of_hundred) {
    let MilestonePoints = 0;

    // let no_of_fifty = 1;
    // let no_of_hundred = 2;

    MilestonePoints = (no_of_fifty * t10MilestonePoints.half_centuary) + (no_of_hundred * t10MilestonePoints.centuary)

    console.log(MilestonePoints)
    return MilestonePoints;
}
function calculatetoneMilestonePoints(no_of_fifty,no_of_hundred) {
    let MilestonePoints = 0;

    // let no_of_fifty = 1;
    // let no_of_hundred = 2;

    MilestonePoints = (no_of_fifty * oneMilestonePoints.half_centuary) + (no_of_hundred * oneMilestonePoints.centuary)

    console.log(MilestonePoints)
    return MilestonePoints;
}
function calculatettestMilestonePoints(no_of_fifty,no_of_hundred) {
    let MilestonePoints = 0;

    // let no_of_fifty = 1;
    // let no_of_hundred = 2;

    MilestonePoints = (no_of_fifty * testMilestonePoints.half_centuary) + (no_of_hundred * testMilestonePoints.centuary)

    console.log(MilestonePoints)
    return MilestonePoints
}



//Create the function for the BattingParticipation points
const t20BattingParticipationPoints = {
    start_batting: 8,
    dismissal: -8,
    did_not_bat: 5
}

const oneBattingParticipationPoints = {
    start_batting: 10,
    dismissal: -6,
    did_not_bat: 2
}

const testBattingParticipationPoints = {
    start_batting: 0,
    dismissal: -7,
    did_not_bat: 2
}

const t10BattingParticipationPoints = {
    start_batting: 5,
    dismissal: -12.5,
    did_not_bat: 7.5
}

function calculatet20BattingPartipantPoints(batting,out) {
    let BattingParticipationPoints = 0;
    // let batting = true
    // let out = true

    if (batting) {
        BattingParticipationPoints += t20BattingParticipationPoints.start_batting
    } else {
        BattingParticipationPoints += t20BattingParticipationPoints.did_not_bat
    }

    if (out) {
        BattingParticipationPoints += t20BattingParticipationPoints.dismissal
    }

    return BattingParticipationPoints;
}
function calculatet10BattingPartipantPoints(batting,out) {
    let BattingParticipationPoints = 0;
    // let batting = true
    // let out = true

    if (batting) {
        BattingParticipationPoints += t10BattingParticipationPoints.start_batting
    } else {
        BattingParticipationPoints += t10BattingParticipationPoints.did_not_bat
    }

    if (out) {
        BattingParticipationPoints += t10BattingParticipationPoints.dismissal
    }
    return BattingParticipationPoints;
}
function calculatetoneBattingPartipantPoints(batting,out) {
    let BattingParticipationPoints = 0;
    // let batting = true
    // let out = true

    if (batting) {
        BattingParticipationPoints += oneBattingParticipationPoints.start_batting
    } else {
        BattingParticipationPoints += oneBattingParticipationPoints.did_not_bat
    }

    if (out) {
        BattingParticipationPoints += oneBattingParticipationPoints.dismissal
    }
    return BattingParticipationPoints;
}
function calculatettestBattingPartipantPoints(batting,out) {
    let BattingParticipationPoints = 0;
    // let batting = true
    // let out = true

    if (batting) {
        BattingParticipationPoints += testBattingParticipationPoints.start_batting
    } else {
        BattingParticipationPoints += testBattingParticipationPoints.did_not_bat
    }

    if (out) {
        BattingParticipationPoints += testBattingParticipationPoints.dismissal
    }
    return BattingParticipationPoints;
}


const customRunPoints = [
    { lowerLimit: 1, upperLimit: 15, points: 0.533 },
    { lowerLimit: 16, upperLimit: 45, points: 0.4 },
    { lowerLimit: 46, upperLimit: 60, points: 0.266 },
    { lowerLimit: 61, upperLimit: 90, points: 0.2 },
    { lowerLimit: 91, upperLimit: 120, points: 0.133 },
    { lowerLimit: 121, upperLimit: 240, points: 0.066 },
    { lowerLimit: 241, upperLimit: Infinity, points: 0.033 },
];

//Create the fuction for test matches to ball faced points
function calculateBallFacedPoints(balls_faced) {
    let runPoints = 0;
    // let balls_faced = 47;

    for (let i = 0; i < customRunPoints.length; i++) {
        if (balls_faced >= customRunPoints[i].lowerLimit) {
            if (balls_faced >= customRunPoints[i].upperLimit) {
                let runs = customRunPoints[i].upperLimit - customRunPoints[i].lowerLimit + 1;
                runPoints += runs * customRunPoints[i].points;
                console.log("RUNS SCORED =", runs, "Run Points =", runs * customRunPoints[i].points);
            } else {
                let runs = balls_faced - customRunPoints[i].lowerLimit + 1;
                runPoints += runs * customRunPoints[i].points;
                console.log("RUNS SCORED =", runs, "Run Points =", runs * customRunPoints[i].points);
            }
        }
    }

    console.log(runPoints);
}


const onestrikeRateTable = [
    { lowerLimit: 0, upperLimit: 0.7, over10Balls: -5, over40Balls: 10 },
    { lowerLimit: 0.7, upperLimit: 0.9, over10Balls: -3, over40Balls: -6 },
    { lowerLimit: 0.9, upperLimit: 1, over10Balls: 0, over40Balls: 0 },
    { lowerLimit: 1, upperLimit: 1.1, over10Balls: 4, over40Balls: 8 },
    { lowerLimit: 1.1, upperLimit: 1.3, over10Balls: 8, over40Balls: 16 },
    { lowerLimit: 1.3, upperLimit: Infinity, over10Balls: 15, over40Balls: 30 },
];

function calculateoneStrikeRatePoints(ballsPlayed, runsScored) {
    let strikeRate = (runsScored / ballsPlayed);
    let points = 0;

    for (let i = 0; i < onestrikeRateTable.length; i++) {
        const entry = onestrikeRateTable[i];

        if (strikeRate >= entry.lowerLimit && strikeRate < entry.upperLimit) {
            points += ballsPlayed > 40 ? entry.over40Balls : entry.over10Balls;
            break;
        }
    }

    console.log("Strike Points: " + points);
    return points;
}

const t20strikeRateTable = [
    { lowerLimit: 0, upperLimit: 0.7, over5Balls: -6, over25Balls: -12 },
    { lowerLimit: 0.7, upperLimit: 1, over5Balls: -3, over25Balls: -6 },
    { lowerLimit: 1, upperLimit: 1.1, over5Balls: 0, over25Balls: 0 },
    { lowerLimit: 1.1, upperLimit: 1.3, over5Balls: 2, over25Balls: 4 },
    { lowerLimit: 1.3, upperLimit: 1.6, over5Balls: 4, over25Balls: 8 },
    { lowerLimit: 1.6, upperLimit: Infinity, over5Balls: 8, over25Balls: 16 },
];

function calculatet20StrikeRatePoints(ballsFaced, runsScored) {
    let strikeRate = (runsScored / ballsFaced).toFixed(2);
    let points = 0;
    console.log(strikeRate)
    for (let i = 0; i < t20strikeRateTable.length; i++) {
        const entry = t20strikeRateTable[i];

        if (strikeRate >= entry.lowerLimit && strikeRate <= entry.upperLimit) {
            points += ballsFaced > 25 ? entry.over25Balls : entry.over5Balls;
            break;
        }

    }

    console.log("Strike Points: " + points);

    return points;

}



const strikeRateTable = [
    { lowerLimit: 0, upperLimit: 0.5, over5Balls: -10, over25Balls: -30 },
    { lowerLimit: 0.5, upperLimit: 1, over5Balls: -7, over25Balls: -20 },
    { lowerLimit: 1, upperLimit: 1.5, over5Balls: 0, over25Balls: -10 },
    { lowerLimit: 1.5, upperLimit: 2, over5Balls: 0, over25Balls: 6 },
    { lowerLimit: 2, upperLimit: 2.5, over5Balls: 7, over25Balls: 15 },
    { lowerLimit: 2.5, upperLimit: Infinity, over5Balls: 10, over25Balls: 25 },
];

function calculateStrikeRatePoints(ballsFaced, runsScored) {
    let strikeRate = (runsScored / ballsFaced);
    let points = 0;

    for (let i = 0; i < strikeRateTable.length; i++) {
        const entry = strikeRateTable[i];

        if (strikeRate >= entry.lowerLimit && strikeRate < entry.upperLimit) {
            points += ballsFaced > 25 ? entry.over25Balls : entry.over5Balls;
            break;

        }
    }

    console.log("Strike Points: " + points);

    return points;

}

//   calculateStrikeRatePoints(21, 48);




module.exports = { calculateBallFacedPoints, calculateOnedayRunPoints, calculateStrikeRatePoints, calculateT10RunPoints, calculateTestRunPoints ,calculateoneStrikeRatePoints,calculatet10BoundryFacePoints,calculatet20BoundryFacePoints,calculatet20RunPoints,calculatet20StrikeRatePoints,calculatetoneBoundryFacePoints,calculatettestBoundryFacePoints,calculatetoneMilestonePoints,calculatetoneBattingPartipantPoints,calculatet20MilestonePoints,calculatet20BattingPartipantPoints,calculatet10BattingPartipantPoints,calculatettestMilestonePoints,calculatettestBattingPartipantPoints,calculatet10MilestonePoints}