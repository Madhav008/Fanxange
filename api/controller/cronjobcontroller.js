const cron = require('node-cron');
const { getRecentMacthes } = require('../../Espn_Cricket_data/CronRecentData');
const RecentMatches = require('../models/Matches');
const PlayerStats = require('../models/PlayerStats');
const Team = require('../models/Teams');
const BattingStats = require('../models/PlayerBattingStats');

let cronJob;

// Controller for starting the cron job
const startCronJob = async (req, res) => {
  if (!cronJob) {
    cronJob = cron.schedule('*/30 * * * *', async () => {
      console.log('Cron job is running...');
    });


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

      res.json(data);
    } catch (error) {
      console.error('Error occurred while retrieving recent matches:', error);
      res.status(500).json({ error: 'An error occurred while retrieving recent matches.' });
    }




    // res.json({ "message": 'Cron job started.' });
  } else {
    res.json({ "message": 'Cron job is already running.' });
  }
};

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
  }
};

module.exports = {
  startCronJob, stopCronJob, checkCronJobStatus
};



// Assuming you have established a connection to MongoDB using Mongoose

async function saveRecentMatchesData(data) {
  try {
    // Create a new RecentMatches document
    const existingMatch = await RecentMatches.findOne({ matchId: data.matchId });

    if (existingMatch) {
      // Update the fields that are not in the database
      existingMatch.name = data.name;
      existingMatch.startdate = data.startDate;
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
        startdate: data.startDate,
        endDate: data.endDate,
        seriesName: data.seriesName,
        seriesId: data.seriesId,
        matchId: data.matchId,
        teams: data.teams,
        teamPlayers: data.teamPlayers,
      });

      // Save the new document to the database
      await recentMatches.save();
    }



    for (const team of data.teams) {
      try {
        const existingTeam = await Team.findOne({ teamid: team.objectId });
        if (existingTeam) {
          console.log(`Team with teamid ${team.objectId} already exists. Skipping...`);
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
      } catch (error) {
        console.log(error.message);
      }
    }


    for (const player of data.teamPlayers) {
      try {
        const existingPlayer = await PlayerStats.findOne({ playerId: player.playerId });
        if (existingPlayer) {
          console.log(`Player with playerId ${player.playerId} already exists. Skipping...`);
          continue;
        }

        const playerdata = new PlayerStats({
          name: player.name,
          playerId: player.playerId,
          teamId: player.teamId,
        });

        await playerdata.save();
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
          console.log(`BattingStats with matchId ${battingStats.matchId} and playerId ${playerId} already exists. Skipping...`);
          continue;
        }

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

        await BattingStatsInstance.save();
      } else {
        console.log(`Invalid matchId or playerId for battingStats:`, battingStats);
      }
    }




    for (const playerId in data.bowling) {
      const bowlingStats = data.bowling[playerId];
      let bowlingPoints = data.bowlPoints[playerId];
      bowlingPoints = parseFloat(bowlingPoints).toFixed(2);
      console.log(bowlingPoints);
    }

    for (const playerId in data.fielding) {
      const fieldingStats = data.fielding[playerId];
      let fieldingPoints = data.fieldoints[playerId];
      fieldingPoints = parseFloat(fieldingPoints).toFixed(2);
      console.log(fieldingPoints);
    }

    console.log('Data saved successfully!');
  } catch (error) {
    console.error('Error occurred while saving recent matches data:', error.message);
  }
}