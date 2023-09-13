const express = require('express');
const router = express.Router();
const cronController = require('../controller/cronjobcontroller');


// API route to start the cron job
router.get('/start', cronController.startCronJob);
router.get('/start/performance',cronController.startPerformanceJob);
// API route to stop the cron job
router.get('/stop', cronController.stopCronJob);

// API route to check the status of the cron job
router.get('/status', cronController.checkCronJobStatus);

module.exports = router;
