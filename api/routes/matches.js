const express = require('express');
const router = express.Router();
const apiController = require('../controller/matchesController');

// Example protected API route
router.get('/recent', apiController.getRecentMacthes);


module.exports = router;
