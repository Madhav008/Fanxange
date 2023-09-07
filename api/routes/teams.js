const express = require('express');
const router = express.Router();
const apiController = require('../controller/teamController');

// Example protected API route
router.post('/teamInfo', apiController.getTeamInfo);




module.exports = router;
