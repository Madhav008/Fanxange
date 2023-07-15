const express = require('express');
const router = express.Router();
const apiController = require('../controller/matchesController');

// Example protected API route
router.get('/recent', apiController.getRecentMacthes);
router.get('/all', apiController.getAllMatches);



module.exports = router;
