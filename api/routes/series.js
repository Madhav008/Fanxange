const express = require('express');
const router = express.Router();
const apiController = require('../controller/seriesController');

// Example protected API route
router.get('/recent', apiController.getRecentSeries);
router.get('/all', apiController.getAllSeries);



module.exports = router;
