const Team = require("../models/Teams");

async function getTeamInfo(req, res) {
    const { teamId } = req.body;
    console.log(teamId);
    const team = await Team.findOne({ teamid: teamId })

    res.status(200).json({ team });
}


module.exports = { getTeamInfo }