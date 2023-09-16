const cron = require('node-cron');
const { getRecentMacthes } = require('../../Espn_Cricket_data/CronRecentData');
const RecentMatches = require('../models/Matches');
const PlayerStats = require('../models/PlayerStats');
const Team = require('../models/Teams');
const BattingStats = require('../models/PlayerBattingStats');
const BowlingStats = require('../models/PlayerBowlingStats');
const FieldingStats = require('../models/PlayerFieldingStats');
const Series = require('../models/Series');
const { updatePlayerDataInDatabase } = require('./playerController');
const { SeedPlayerPerformance, processPlayerMatches } = require('./performanceController');
const { getRecent10Macthes } = require('../../Espn_Cricket_data/get10RecentMatches');

let cronJob;
let performanceJob;

// Controller for starting the cron job
const startCronJob = async (req, res) => {
  if (!cronJob) {
    cronJob = cron.schedule('*/30 * * * *', async () => {
      console.log('Cron job is running...');

      try {
        const data = await getRecentMacthes();
        //Save the data in the database

        for (const match of data) {
          try {
            await saveRecentMatchesData(match);
          } catch (error) {
            console.log(error.message);
          }
        }
      } catch (error) {
        console.error('Error occurred while retrieving recent matches:', error);
        // res.status(500).json({ error: 'An error occurred while retrieving recent matches.' });
      }

 /*      console.log("Fetching players...");
      const players = await PlayerStats.find({});
      for (const player of players) {
        try {
          const data = await getRecent10Macthes(player.playerId)
          for (const match of data) {
            try {
              await saveRecentMatchesData(match);
            } catch (error) {
              console.log(error.message);
            }
          }
        } catch (error) {
          console.log(error.message);
        }
      }
 */


      // res.json(data);

    });
    res.json({ "message": 'Cron job started.' });

  } else {
    res.json({ "message": 'Cron job is already running.' });
  }
};


const startPerformanceJob = async (req, res) => {
  if (!performanceJob) {
    performanceJob = cron.schedule('* 12 * * *', async () => {
      console.log('Performance job is running...');

      try {
        await SeedPlayerPerformance();
      } catch (error) {
        console.error('Error occurred while retrieving recent matches:', error);
        // res.status(500).json({ error: 'An error occurred while retrieving recent matches.' });
      }
    });
    res.json({ "message": 'Cron job started.' });

  } else {
    res.json({ "message": 'Cron job is already running.' });
  }
}



// Controller for stopping the cron job
const stopCronJob = (req, res) => {
  if (cronJob) {
    cronJob.stop();
    cronJob = null;
    res.json({ "message": 'Cron job stopped.' });
  } else {
    res.json({ "message": 'Cron job is not running.' });
  }
};

const checkCronJobStatus = async (req, res) => {
  if (cronJob) {
    res.json({ message: 'Cron job is running.' });
    try {
      const data = await getRecentMacthes();
      //Save the data in the database

      for (const match of data) {
        try {
          await saveRecentMatchesData(match);
        } catch (error) {
          console.log(error.message);
        }
      }

      // res.json(data);
    } catch (error) {
      console.error('Error occurred while retrieving recent matches:', error);
      // res.status(500).json({ error: 'An error occurred while retrieving recent matches.' });
    }

/* 
    const players = await PlayerStats.find({});
    for (const player of players) {
      try {
        const data = await getRecent10Macthes(player.playerId)
        for (const match of data) {
          try {
            await saveRecentMatchesData(match);
          } catch (error) {
            console.log(error.message);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    }
 */

  } else {
    res.json({ "message": 'Cron job is not running.' });
  }
};

module.exports = {
  startCronJob, stopCronJob, checkCronJobStatus, startPerformanceJob
};



// Assuming you have established a connection to MongoDB using Mongoose

async function saveRecentMatchesData(data) {
  try {

    try {
      const existingSeries = await Series.findOne({ seriesId: data.seriesId });
      if (existingSeries) {
        console.log(`Series with seriesId ${data.seriesId} already exists. Skipping...`);
      } else {
        // Create the New Series document
        const newSeries = new Series({
          seriesId: data.seriesId,
          name: data.seriesName
        });
        await newSeries.save();
        console.log("New Series saved");
      }
    } catch (error) {
      console.log(error.message);
    }


    // Create a new RecentMatches document
    const existingMatch = await RecentMatches.findOne({ matchId: data.matchId });

    if (existingMatch) {
      // Update the fields that are not in the database
      existingMatch.name = data.name;
      existingMatch.title = data.title,
        existingMatch.groundName = data.groundName,
        existingMatch.startDate = data.startDate;
      existingMatch.endDate = data.endDate;
      existingMatch.seriesName = data.seriesName;
      existingMatch.seriesId = data.seriesId;
      existingMatch.teams = data.teams;
      existingMatch.teamPlayers = data.teamPlayers;

      // Save the updated document
      await existingMatch.save();
    } else {
      // Create a new document
      const recentMatches = new RecentMatches({
        name: data.name,
        title: data.title,
        groundName: data.groundName,
        startDate: data.startDate,
        endDate: data.endDate,
        seriesName: data.seriesName,
        seriesId: data.seriesId,
        matchId: data.matchId,
        teams: data.teams,
        teamPlayers: data.teamPlayers,
      });

      // Save the new document to the database
      await recentMatches.save();

      console.log('Match Data saved successfully!');

    }


    for (const team of data.teams) {
      try {
        const existingTeam = await Team.findOne({ teamid: team.objectId });
        if (existingTeam) {
          // console.log(`Team with teamid ${team.objectId} already exists. Skipping...`);
          continue;
        }

        const teamdata = new Team({
          name: team.name,
          teamid: team.objectId,
          slug: team.slug,
          longName: team.longName,
          abbreviation: team.abbreviation,
          imageUrl: team.imageUrl,
        });

        await teamdata.save();
        console.log('Team Data saved successfully!');
      } catch (error) {
        console.log(error.message);
      }
    }

    for (const player of data.teamPlayers) {
      try {
        const existingPlayer = await PlayerStats.findOne({ playerId: player.playerId });
        if (existingPlayer) {
          //Update the player performance of the Live player as the match progresses the points changes 
          // await processPlayerMatches(player.playerId)


          await updatePlayerDataInDatabase(player.playerId);
        } else {
          const playerdata = new PlayerStats({
            name: player.name,
            playerId: player.playerId,
            teamId: player.teamId,
          });
          playerdata.save();
          await updatePlayerDataInDatabase(player.playerId);

          console.log('Player Data saved successfully!');
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    for (const playerId in data.batting) {
      const battingStats = data.batting[playerId];
      let battingPoints = data.batPoints[playerId];
      battingPoints = parseFloat(battingPoints).toFixed(2);

      if (battingStats.matchId && playerId) {
        const existingBattingStats = await BattingStats.findOne({ matchId: battingStats.matchId, playerId });

        if (existingBattingStats) {
          existingBattingStats.bats_runs = battingStats.bats_runs;
          existingBattingStats.four_hit = battingStats.four_hit;
          existingBattingStats.six_hit = battingStats.six_hit;
          existingBattingStats.balls_faced = battingStats.balls_faced;
          existingBattingStats.fifty = battingStats.fifty;
          existingBattingStats.hundred = battingStats.hundred;
          existingBattingStats.isBat = true;
          existingBattingStats.points = battingPoints;

          try {
            await existingBattingStats.save();
            console.log(`BattingStats with matchId ${battingStats.matchId} and playerId ${playerId} updated successfully!`);
          } catch (error) {
            console.error(`Error occurred while updating BattingStats with matchId ${battingStats.matchId} and playerId ${playerId}:`, error.message);
          }
        } else {
          const BattingStatsInstance = new BattingStats({
            playerId,
            matchId: battingStats.matchId,
            bats_runs: battingStats.bats_runs,
            four_hit: battingStats.four_hit,
            six_hit: battingStats.six_hit,
            balls_faced: battingStats.balls_faced,
            fifty: battingStats.fifty,
            hundred: battingStats.hundred,
            isBat: true,
            points: battingPoints,
          });

          try {
            await BattingStatsInstance.save();
            console.log('Batting Data saved successfully!');
          } catch (error) {
            console.error(`Error occurred while saving BattingStats with matchId ${battingStats.matchId} and playerId ${playerId}:`, error.message);
          }
        }
      } else {
        console.log(`Invalid matchId or playerId for battingStats:`, battingStats);
      }
    }

    for (const playerId in data.bowling) {
      const bowlingStats = data.bowling[playerId];
      let bowlingPoints = data.bowlPoints[playerId];
      bowlingPoints = parseFloat(bowlingPoints).toFixed(2);

      if (bowlingStats.match_id && playerId) {
        const existingBowlingStats = await BowlingStats.findOne({
          matchId: bowlingStats.match_id,
          playerId: bowlingStats.player_id,
        });

        if (existingBowlingStats) {
          existingBowlingStats.runs_given = bowlingStats.runs_given;
          existingBowlingStats.four_given = bowlingStats.four_given;
          existingBowlingStats.six_given = bowlingStats.six_given;
          existingBowlingStats.balls_bowled = bowlingStats.balls_bowled;
          existingBowlingStats.wicket = bowlingStats.wicket;
          existingBowlingStats.dot_balls = bowlingStats.dot_balls;
          existingBowlingStats.maiden_over = bowlingStats.maiden_over;
          existingBowlingStats.isBall = bowlingStats.is_ball;
          existingBowlingStats.points = bowlingPoints;

          try {
            await existingBowlingStats.save();
            console.log(`BowlingStats with matchId ${bowlingStats.match_id} and playerId ${bowlingStats.player_id} updated successfully!`);
          } catch (error) {
            console.error(`Error occurred while updating BowlingStats with matchId ${bowlingStats.match_id} and playerId ${bowlingStats.player_id}:`, error.message);
          }
        } else {
          const bowlingStatsInstance = new BowlingStats({
            playerId: bowlingStats.player_id,
            matchId: bowlingStats.match_id,
            runs_given: bowlingStats.runs_given,
            four_given: bowlingStats.four_given,
            six_given: bowlingStats.six_given,
            balls_bowled: bowlingStats.balls_bowled,
            wicket: bowlingStats.wicket,
            dot_balls: bowlingStats.dot_balls,
            maiden_over: bowlingStats.maiden_over,
            isBall: bowlingStats.is_ball,
            points: bowlingPoints,
          });

          try {
            await bowlingStatsInstance.save();
            console.log('Bowling Data saved successfully!');
          } catch (error) {
            console.error(`Error occurred while saving BowlingStats with matchId ${bowlingStats.match_id} and playerId ${bowlingStats.player_id}:`, error.message);
          }
        }
      } else {
        console.log(`Invalid match_id or player_id for bowlingStats:`, bowlingStats);
      }
    }

    for (const playerId in data.fieding) {
      const fieldingStats = data.fieding[playerId];
      let fieldingPoints = data.fieldoints[playerId];
      fieldingPoints = parseFloat(fieldingPoints).toFixed(2);

      if (fieldingStats.matchId && playerId) {
        const existingFieldingStats = await FieldingStats.findOne({
          matchId: fieldingStats.matchId,
          playerId: fieldingStats.playerId,
        });

        if (existingFieldingStats) {
          existingFieldingStats.catches = fieldingStats.catches;
          existingFieldingStats.runouts = fieldingStats.runouts;
          existingFieldingStats.stumping = fieldingStats.stumping;
          existingFieldingStats.points = fieldingPoints;

          try {
            await existingFieldingStats.save();
            console.log(`FieldingStats with matchId ${fieldingStats.matchId} and playerId ${fieldingStats.playerId} updated successfully!`);
          } catch (error) {
            console.error(`Error occurred while updating FieldingStats with matchId ${fieldingStats.matchId} and playerId ${fieldingStats.playerId}:`, error.message);
          }
        } else {
          const fieldingStatsInstance = new FieldingStats({
            playerId: fieldingStats.playerId,
            matchId: fieldingStats.matchId,
            catches: fieldingStats.catches,
            runouts: fieldingStats.runouts,
            stumping: fieldingStats.stumping,
            points: fieldingPoints,
          });

          try {
            await fieldingStatsInstance.save();
            console.log('Fielding Data saved successfully!');
          } catch (error) {
            console.error(`Error occurred while saving FieldingStats with matchId ${fieldingStats.matchId} and playerId ${fieldingStats.playerId}:`, error.message);
          }
        }
      } else {
        console.log(`Invalid matchId or playerId for fieldingStats:`, fieldingStats);
      }
    }


  } catch (error) {
    console.error('Error occurred while saving recent matches data:', error.message);
  }
}