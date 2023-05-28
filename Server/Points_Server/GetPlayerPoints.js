// const {calculateT20Points} = require("./PointType/CalculateT20Points");

const {calculateT20Points} = require("./PointType/CalculateT20Points");

const data = {
    "Player": 1359476,
    "Match Date": "2023-04-01",
    "Teams": [
        "Punjab Kings",
        "Kolkata Knight Riders"
    ],
    "Stats": {
        "Batting Stats": {
            "P Simran Singh": {
                "Bat Runs": 23,
                "Fours Hit": 2,
                "Sixes Hit": 2,
                "Balls Faced": 12,
                "Fifty": 0,
                "Hundred": 0,
                "Is Batting": true,
                "Is Out": true
            },
            "S Dhawan": {
                "Bat Runs": 40,
                "Fours Hit": 6,
                "Sixes Hit": 0,
                "Balls Faced": 30,
                "Fifty": 0,
                "Hundred": 0,
                "Is Batting": true,
                "Is Out": true
            },
            "PBB Rajapaksa": {
                "Bat Runs": 50,
                "Fours Hit": 5,
                "Sixes Hit": 2,
                "Balls Faced": 32,
                "Fifty": 0,
                "Hundred": 0,
                "Is Batting": true,
                "Is Out": true
            },
            "JM Sharma": {
                "Bat Runs": 21,
                "Fours Hit": 1,
                "Sixes Hit": 2,
                "Balls Faced": 11,
                "Fifty": 0,
                "Hundred": 0,
                "Is Batting": true,
                "Is Out": true
            },
            "Sikandar Raza": {
                "Bat Runs": 16,
                "Fours Hit": 1,
                "Sixes Hit": 1,
                "Balls Faced": 13,
                "Fifty": 0,
                "Hundred": 0,
                "Is Batting": true,
                "Is Out": true
            },
            "SM Curran": {
                "Bat Runs": 26,
                "Fours Hit": 0,
                "Sixes Hit": 2,
                "Balls Faced": 18,
                "Fifty": 0,
                "Hundred": 0,
                "Is Batting": true,
                "Is Out": false
            },
            "M Shahrukh Khan": {
                "Bat Runs": 11,
                "Fours Hit": 2,
                "Sixes Hit": 0,
                "Balls Faced": 7,
                "Fifty": 0,
                "Hundred": 0,
                "Is Batting": true,
                "Is Out": false
            },
            "Mandeep Singh": {
                "Bat Runs": 2,
                "Fours Hit": 0,
                "Sixes Hit": 0,
                "Balls Faced": 4,
                "Fifty": 0,
                "Hundred": 0,
                "Is Batting": true,
                "Is Out": true
            },
            "Rahmanullah Gurbaz": {
                "Bat Runs": 22,
                "Fours Hit": 3,
                "Sixes Hit": 1,
                "Balls Faced": 16,
                "Fifty": 0,
                "Hundred": 0,
                "Is Batting": true,
                "Is Out": true
            },
            "AS Roy": {
                "Bat Runs": 4,
                "Fours Hit": 1,
                "Sixes Hit": 0,
                "Balls Faced": 5,
                "Fifty": 0,
                "Hundred": 0,
                "Is Batting": true,
                "Is Out": true
            },
            "VR Iyer": {
                "Bat Runs": 34,
                "Fours Hit": 3,
                "Sixes Hit": 1,
                "Balls Faced": 29,
                "Fifty": 0,
                "Hundred": 0,
                "Is Batting": true,
                "Is Out": true
            },
            "N Rana": {
                "Bat Runs": 24,
                "Fours Hit": 3,
                "Sixes Hit": 1,
                "Balls Faced": 17,
                "Fifty": 0,
                "Hundred": 0,
                "Is Batting": true,
                "Is Out": true
            },
            "RK Singh": {
                "Bat Runs": 4,
                "Fours Hit": 0,
                "Sixes Hit": 0,
                "Balls Faced": 4,
                "Fifty": 0,
                "Hundred": 0,
                "Is Batting": true,
                "Is Out": true
            },
            "AD Russell": {
                "Bat Runs": 35,
                "Fours Hit": 3,
                "Sixes Hit": 2,
                "Balls Faced": 19,
                "Fifty": 0,
                "Hundred": 0,
                "Is Batting": true,
                "Is Out": true
            },
            "SN Thakur": {
                "Bat Runs": 8,
                "Fours Hit": 0,
                "Sixes Hit": 1,
                "Balls Faced": 3,
                "Fifty": 0,
                "Hundred": 0,
                "Is Batting": true,
                "Is Out": false
            },
            "SP Narine": {
                "Bat Runs": 7,
                "Fours Hit": 0,
                "Sixes Hit": 1,
                "Balls Faced": 2,
                "Fifty": 0,
                "Hundred": 0,
                "Is Batting": true,
                "Is Out": false
            }
        },
        "Bowling Stats": {
            "UT Yadav": {
                "Runs Given": 27,
                "Fours Given": 2,
                "Sixes Given": 1,
                "Balls Bowled": 24,
                "Catches Taken": 1,
                "Runouts": 0,
                "Stumping": 0,
                "Is Ball": true,
                "Dot Balls": 0,
                "Maiden Over": 0,
                "Wickets Taken": 1
            },
            "TG Southee": {
                "Runs Given": 54,
                "Fours Given": 6,
                "Sixes Given": 3,
                "Balls Bowled": 24,
                "Catches Taken": 0,
                "Runouts": 0,
                "Stumping": 0,
                "Is Ball": true,
                "Dot Balls": 0,
                "Maiden Over": 0,
                "Wickets Taken": 2
            },
            "SP Narine": {
                "Runs Given": 40,
                "Fours Given": 3,
                "Sixes Given": 2,
                "Balls Bowled": 25,
                "Catches Taken": 0,
                "Runouts": 0,
                "Stumping": 0,
                "Is Ball": true,
                "Dot Balls": 0,
                "Maiden Over": 0,
                "Wickets Taken": 1
            },
            "CV Varun": {
                "Runs Given": 27,
                "Fours Given": 2,
                "Sixes Given": 1,
                "Balls Bowled": 25,
                "Catches Taken": 0,
                "Runouts": 0,
                "Stumping": 0,
                "Is Ball": true,
                "Dot Balls": 0,
                "Maiden Over": 0,
                "Wickets Taken": 1
            },
            "SN Thakur": {
                "Runs Given": 43,
                "Fours Given": 4,
                "Sixes Given": 2,
                "Balls Bowled": 25,
                "Catches Taken": 0,
                "Runouts": 0,
                "Stumping": 0,
                "Is Ball": true,
                "Dot Balls": 0,
                "Maiden Over": 0,
                "Wickets Taken": 0
            },
            "SM Curran": {
                "Runs Given": 38,
                "Fours Given": 3,
                "Sixes Given": 3,
                "Balls Bowled": 18,
                "Catches Taken": 1,
                "Runouts": 0,
                "Stumping": 0,
                "Is Ball": true,
                "Dot Balls": 0,
                "Maiden Over": 0,
                "Wickets Taken": 1
            },
            "Arshdeep Singh": {
                "Runs Given": 19,
                "Fours Given": 2,
                "Sixes Given": 1,
                "Balls Bowled": 18,
                "Catches Taken": 0,
                "Runouts": 0,
                "Stumping": 0,
                "Is Ball": true,
                "Dot Balls": 0,
                "Maiden Over": 0,
                "Wickets Taken": 3
            },
            "NT Ellis": {
                "Runs Given": 28,
                "Fours Given": 2,
                "Sixes Given": 1,
                "Balls Bowled": 20,
                "Catches Taken": 0,
                "Runouts": 0,
                "Stumping": 0,
                "Is Ball": true,
                "Dot Balls": 0,
                "Maiden Over": 0,
                "Wickets Taken": 1
            },
            "Sikandar Raza": {
                "Runs Given": 26,
                "Fours Given": 3,
                "Sixes Given": 0,
                "Balls Bowled": 19,
                "Catches Taken": 2,
                "Runouts": 0,
                "Stumping": 0,
                "Is Ball": true,
                "Dot Balls": 0,
                "Maiden Over": 0,
                "Wickets Taken": 1
            },
            "R Dhawan": {
                "Runs Given": 15,
                "Fours Given": 2,
                "Sixes Given": 1,
                "Balls Bowled": 6,
                "Catches Taken": 0,
                "Runouts": 0,
                "Stumping": 0,
                "Is Ball": true,
                "Dot Balls": 0,
                "Maiden Over": 0,
                "Wickets Taken": 0
            },
            "RD Chahar": {
                "Runs Given": 12,
                "Fours Given": 0,
                "Sixes Given": 1,
                "Balls Bowled": 12,
                "Catches Taken": 1,
                "Runouts": 0,
                "Stumping": 0,
                "Is Ball": true,
                "Dot Balls": 0,
                "Maiden Over": 0,
                "Wickets Taken": 1
            },
            "Harpreet Brar": {
                "Runs Given": 8,
                "Fours Given": 1,
                "Sixes Given": 0,
                "Balls Bowled": 6,
                "Catches Taken": 0,
                "Runouts": 0,
                "Stumping": 0,
                "Is Ball": true,
                "Dot Balls": 0,
                "Maiden Over": 0,
                "Wickets Taken": 0
            }
        },
        "Fielding Stats": {
            "UT Yadav": {
                "Catches Taken": 1,
                "Runouts": 0
            },
            "TG Southee": {
                "Catches Taken": 0,
                "Runouts": 0
            },
            "Rahmanullah Gurbaz": {
                "Catches Taken": 1,
                "Runouts": 0
            },
            "SP Narine": {
                "Catches Taken": 0,
                "Runouts": 0
            },
            "CV Varun": {
                "Catches Taken": 0,
                "Runouts": 0
            },
            "SN Thakur": {
                "Catches Taken": 0,
                "Runouts": 0
            },
            "RK Singh": {
                "Catches Taken": 1,
                "Runouts": 0
            },
            "N Rana": {
                "Catches Taken": 1,
                "Runouts": 0
            },
            "SM Curran": {
                "Catches Taken": 1,
                "Runouts": 0
            },
            "Arshdeep Singh": {
                "Catches Taken": 0,
                "Runouts": 0
            },
            "Sikandar Raza": {
                "Catches Taken": 2,
                "Runouts": 0
            },
            "NT Ellis": {
                "Catches Taken": 0,
                "Runouts": 0
            },
            "R Dhawan": {
                "Catches Taken": 0,
                "Runouts": 0
            },
            "RD Chahar": {
                "Catches Taken": 1,
                "Runouts": 0
            },
            "Harpreet Brar": {
                "Catches Taken": 0,
                "Runouts": 0
            }
        }
    }
}







const playerStats = [];

// Extract batting stats
const battingStats = data.Stats['Batting Stats'];
for (const playerName in battingStats) {
  const player = {
    Player: playerName,
    BattingStats: {
      BatRuns: battingStats[playerName]['Bat Runs'],
      FoursHit: battingStats[playerName]['Fours Hit'],
      SixesHit: battingStats[playerName]['Sixes Hit'],
      BallsFaced: battingStats[playerName]['Balls Faced'],
      Fifty: battingStats[playerName]['Fifty'],
      Hundred: battingStats[playerName]['Hundred'],
      IsBatting: battingStats[playerName]['Is Batting'],
      IsOut: battingStats[playerName]['Is Out']
    },
    BowlingStats: {},
    FieldingStats: {}
  };
  playerStats.push(player);
}

// Extract bowling stats
const bowlingStats = data.Stats['Bowling Stats'];
for (const playerName in bowlingStats) {
  const player = playerStats.find(p => p.Player === playerName);
  if (player) {
    player.BowlingStats = {
      RunsGiven: bowlingStats[playerName]['Runs Given'],
      FoursGiven: bowlingStats[playerName]['Fours Given'],
      SixesGiven: bowlingStats[playerName]['Sixes Given'],
      BallsBowled: bowlingStats[playerName]['Balls Bowled'],
      CatchesTaken: bowlingStats[playerName]['Catches Taken'],
      Runouts: bowlingStats[playerName]['Runouts'],
      Stumping: bowlingStats[playerName]['Stumping'],
      IsBall: bowlingStats[playerName]['Is Ball'],
      DotBalls: bowlingStats[playerName]['Dot Balls'],
      MaidenOver: bowlingStats[playerName]['Maiden Over'],
      WicketsTaken: bowlingStats[playerName]['Wickets Taken']
    };
  }
}

// Extract fielding stats
const fieldingStats = data.Stats['Fielding Stats'];
for (const playerName in fieldingStats) {
  const player = playerStats.find(p => p.Player === playerName);
  if (player) {
    player.FieldingStats = {
      CatchesTaken: fieldingStats[playerName]['Catches Taken'],
      Runouts: fieldingStats[playerName]['Runouts']
    };
  }
}


let {BattingStats,BowlingStats,FieldingStats} = playerStats[0]

let {BatRuns,FoursHit,SixesHit,BallsFaced,Fifty,Hundred,IsBatting,IsOut} = BattingStats

let {Stumping,IsBall,RunsGiven,FoursGiven,SixesGiven,BallsBowled,DotBalls,MaidenOver,WicketsTaken} = BowlingStats

let {CatchesTaken,Runouts} = FieldingStats

const playerPerformance = {
    catches: CatchesTaken,
    runouts: Runouts,
    stumping: Stumping,
    isBall: IsBall,
    runs_given: RunsGiven,
    four_faces: FoursGiven,
    six_faces: SixesGiven,
    ball_bowled: BallsBowled,
    dot_balls: DotBalls,
    madian_over: MaidenOver,
    wickets: WicketsTaken,
    bat_runs: BatRuns,
    fours_hit: FoursHit,
    sixes_hit: SixesHit,
    ball_faced: BallsFaced,
    fifty: Fifty,
    hundred: Hundred,
    isBat: IsBatting,
    isOut: IsOut
  };



console.log(playerPerformance)
let points = calculateT20Points(playerPerformance);

console.log(points);