const cron = require('node-cron');
const { getRecentMacthes } = require('../../Espn_Cricket_data/CronRecentData');

let cronJob;

// Controller for starting the cron job
const startCronJob = (req, res) => {
    if (!cronJob) {
        cronJob = cron.schedule('* * * * *', () => {
            console.log('Cron job is running...');
        });
        res.json({"message":'Cron job started.'});
    } else {
        res.json({"message":'Cron job is already running.'});
    }
};

// Controller for stopping the cron job
const stopCronJob = (req, res) => {
    if (cronJob) {
        cronJob.stop();
        cronJob = null;
        res.json({"message":'Cron job stopped.'});
    } else {
        res.json({"message":'Cron job is not running.'});
    }
};

const checkCronJobStatus = async (req, res) => {
    if (cronJob) {
      res.json({ message: 'Cron job is running.' });
    } else {
      try {
        const data = await getRecentMacthes();
        res.json(data);
      } catch (error) {
        console.error('Error occurred while retrieving recent matches:', error);
        res.status(500).json({ error: 'An error occurred while retrieving recent matches.' });
      }
    }
  };

module.exports = {
    startCronJob, stopCronJob, checkCronJobStatus
};



