const cron = require('node-cron');

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

// Controller for checking the status of the cron job
const checkCronJobStatus = (req, res) => {
    if (cronJob) {
        res.json({"message":'Cron job is running.'});
    } else {
        res.json({"message":'Cron job is not running.'});
    }
};

module.exports = {
    startCronJob, stopCronJob, checkCronJobStatus
};



