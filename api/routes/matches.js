const express = require('express');
const router = express.Router();
const apiController = require('../controller/matchesController');

// Example protected API route
router.post('/info', apiController.getMatchInfo);
router.get('/recent', apiController.getRecentMacthes);
router.get('/all', apiController.getAllMatches);
router.get('/live', apiController.getLiveMacthes);
router.get('/upcomming', apiController.getUpcommingMacthes);
router.get('/result', apiController.getFinishedMacthes);
router.get("/:playerId", apiController.getRecentMatchesForPlayer);





module.exports = router;
