const express = require('express');
const router = express.Router();
const apiController = require('../controller/playerController');

// Example protected API route
router.post('/', apiController.getPlayersByTeam);
router.post('/teams', apiController.getTeamPlayers);
router.post('/data', apiController.getPlayer);





module.exports = router;
