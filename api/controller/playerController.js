const PlayerStats = require("../models/PlayerStats");

async function getAllPlayers(req,res){
    const Players = await PlayerStats.find({});

    try {
        res.status(200).json({Players});
    } catch (error) {
        console.log('Error occurred:', error.message);
    }
}



module.exports = {getAllPlayers}