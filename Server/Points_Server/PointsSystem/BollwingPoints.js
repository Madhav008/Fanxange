const testwicketsPointsMap = new Map([
    [1, 14],
    [2, 25],
    [3, 35],
    [4, 43],
    [5, 50],
    [6, 56],
    [7, 61],
    [8, 66],
    [9, 71],
    [10, 80],
    [11, 85],
    [12, 90],
    [13, 95],
    [14, 100],
    [15, 105],
    [16, 110],
    [17, 115],
    [18, 120],
    [19, 125],
    [20, 130]
]);

function calculatetestWicketPoints(wickets) {
    return testwicketsPointsMap.get(wickets)
}

const testBonusPoints = {
    dot_ball: 0.12,
    madian: 1
}

function calculatetestBonusPoints(dot_balls, madian_over) {
    return dot_balls * testBonusPoints.dot_ball + madian_over * testBonusPoints.madian
}
const testBoundryPoints = {
    four_conceded: -0.5,
    six_conceded: -1.0,
}
function calculatetestBoundryPoints(boundry, six) {
    return boundry * testBoundryPoints.four_conceded + six * testBoundryPoints.six_conceded
}

function calculatetestParticipationPoints(isBall) {
    if (!isBall) return 2;
}






const onewicketsPointsMap = new Map([
    [1, 15],
    [2, 22],
    [3, 28],
    [4, 33],
    [5, 40],
    [6, 45],
    [7, 50],
    [8, 55],
    [9, 60],
    [10, 65]
]);

function calculateoneWicketPoints(wickets) {
    return onewicketsPointsMap.get(wickets)
}

const oneBonusPoints = {
    dot_ball: 0.3,
    ball_bowled: 0.2,
    madian: 2
}

function calculateoneBonusPoints(dot_balls, ball_bowled, madian_over) {
    return dot_balls * oneBonusPoints.dot_ball + madian_over * oneBonusPoints.madian + ball_bowled * oneBonusPoints.ball_bowled;
}
const oneBoundryPoints = {
    four_conceded: -0.5,
    six_conceded: -1.0,
}

function calculateoneBoundryPoints(boundry, six) {
    return boundry * oneBoundryPoints.four_conceded + six * oneBoundryPoints.six_conceded
}

const EconomyTable = [
    { lowerLimit: 0, upperLimit: 0.7, lessThan36Points: 10, moreThan36Points: 20 },
    { lowerLimit: 0.7, upperLimit: 0.9, lessThan36Points: 4, moreThan36Points: 8 },
    { lowerLimit: 0.9, upperLimit: 1, lessThan36Points: 1, moreThan36Points: 2 },
    { lowerLimit: 1, upperLimit: 1.1, lessThan36Points: -2, moreThan36Points: -4 },
    { lowerLimit: 1.1, upperLimit: 1.3, lessThan36Points: -3, moreThan36Points: -6 },
    { lowerLimit: 1.3, upperLimit: Infinity, lessThan36Points: -5, moreThan36Points: -10 },
];

function calculateoneEconomyPoints(ballsFaced, runsScored) {
    let Economy = (runsScored / ballsFaced).toFixed(2);
    let points = 0;

    for (let i = 0; i < EconomyTable.length; i++) {
        const entry = EconomyTable[i];

        if (Economy >= entry.lowerLimit && Economy < entry.upperLimit) {
            points += ballsFaced <= 36 ? entry.lessThan36Points : entry.moreThan36Points;
            break;
        }
    }

    console.log("Strike Points: " + points);
}



function calculateoneParticipationPoints(isBall) {
    if (!isBall) {
        return 2;
    } else {
        return 5;
    }
}









const t20wicketsPointsMap = new Map([
    [1, 15],
    [2, 28],
    [3, 42],
    [4, 53],
    [5, 63],
    [6, 70],
    [7, 77],
    [8, 84],
    [9, 88],
    [10, 92]
]);

function calculatet20WicketPoints(wickets) {
    return t20wicketsPointsMap.get(wickets)
}

const t20BonusPoints = {
    dot_ball: 2,
    ball_bowled: 1,
    madian: 10
}

function calculatet20BonusPoints(dot_balls, ball_bowled, madian_over) {
    return dot_balls * t20BonusPoints.dot_ball + madian_over * t20BonusPoints.madian + ball_bowled * t20BonusPoints.ball_bowled;
}
const t20BoundryPoints = {
    four_conceded: -2,
    six_conceded: -3,
}

function calculatet20BoundryPoints(boundry, six) {
    return boundry * t20BoundryPoints.four_conceded + six * t20BoundryPoints.six_conceded
}

const t20EconomyTable = [
    { lowerLimit: 0, upperLimit: 0.7, lessThan36Points: 8, moreThan36Points: 16 },
    { lowerLimit: 0.7, upperLimit: 1, lessThan36Points: 4, moreThan36Points: 8 },
    { lowerLimit: 1, upperLimit: 1.1, lessThan36Points: 0 ,moreThan36Points: 0 },
    { lowerLimit: 1.1, upperLimit: 1.3, lessThan36Points: -2, moreThan36Points: -4 },
    { lowerLimit: 1.3, upperLimit: 1.6, lessThan36Points: -4, moreThan36Points: -8 },
    { lowerLimit: 1.6, upperLimit: Infinity, lessThan36Points: -8, moreThan36Points: -16 },
];

function calculatet20EconomyPoints(ballsFaced, runsScored) {
    let Economy = (runsScored / ballsFaced).toFixed(2);
    let points = 0;

    for (let i = 0; i < t20EconomyTable.length; i++) {
        const entry = t20EconomyTable[i];

        if (Economy >= entry.lowerLimit && Economy < entry.upperLimit) {
            points += ballsFaced <= 36 ? entry.lessThan36Points : entry.moreThan36Points;
            break;
        }
    }

    console.log("Strike Points: " + points);
}

function calculatet20ParticipationPoints(isBall) {
    if (!isBall) {
        return 5;
    } 
}






const t10wicketsPointsMap = new Map([
    [1, 30],
    [2, 55],
    [3, 80],
    [4, 105],
    [5, 130],
    [6, 175],
    [7, 200],
    [8, 200],
    [9, 200],
    [10, 200]
]);

function calculatet10WicketPoints(wickets) {
    return t10wicketsPointsMap.get(wickets)
}

const t10BonusPoints = {
    dot_ball: 3,
    ball_bowled: 2,
    madian: 15
}

function calculatet10BonusPoints(dot_balls, ball_bowled, madian_over) {
    return dot_balls * t10BonusPoints.dot_ball + madian_over * t10BonusPoints.madian + ball_bowled * t10BonusPoints.ball_bowled;
}
const t10BoundryPoints = {
    four_conceded: -1,
    six_conceded: -2,
}

function calculatet10BoundryPoints(boundry, six) {
    return boundry * t10BoundryPoints.four_conceded + six * t10BoundryPoints.six_conceded
}

const t10EconomyTable = [
    { lowerLimit: 0, upperLimit: 0.7, lessThan36Points: 15, moreThan36Points: 30 },
    { lowerLimit: 0.7, upperLimit: 1, lessThan36Points: 8, moreThan36Points: 15 },
    { lowerLimit: 1, upperLimit: 1.5, lessThan36Points: 4 ,moreThan36Points: 5 },
    { lowerLimit: 1.5, upperLimit: 2, lessThan36Points: -8, moreThan36Points: -8 },
    { lowerLimit: 2, upperLimit: 2.5, lessThan36Points: -12, moreThan36Points: -20 },
    { lowerLimit: 2.5, upperLimit: Infinity, lessThan36Points: -24, moreThan36Points: -40 },
];

function calculatet10EconomyPoints(ballsFaced, runsScored) {
    let Economy = (runsScored / ballsFaced).toFixed(2);
    let points = 0;

    for (let i = 0; i < t10EconomyTable.length; i++) {
        const entry = t10EconomyTable[i];

        if (Economy >= entry.lowerLimit && Economy < entry.upperLimit) {
            points += ballsFaced <= 36 ? entry.lessThan36Points : entry.moreThan36Points;
            break;
        }
    }

    console.log("Strike Points: " + points);
}

function calculatet10ParticipationPoints(isBall) {
    if (!isBall) {
        return 7.5;
    } 
}





exports.default = {
    calculatetestWicketPoints, calculatetestBonusPoints, calculatetestBoundryPoints, calculatetestParticipationPoints,


    calculateoneWicketPoints, calculateoneBonusPoints, calculateoneBoundryPoints, calculateoneEconomyPoints, calculateoneParticipationPoints,


    calculatet20WicketPoints, calculatet20BonusPoints, calculatet20BoundryPoints, calculatet20EconomyPoints, calculatet20ParticipationPoints,

    calculatet10WicketPoints, calculatet10BonusPoints, calculatet10BoundryPoints, calculatet10EconomyPoints, calculatet10ParticipationPoints,



}