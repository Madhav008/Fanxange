const mongoose = require('mongoose');

const matchesSchema = new mongoose.Schema({
    name:String,
    date:String,
    series:String,
    matchId:String,
    teams:[],
    teamPlayers:[]
});

const User = mongoose.model('Matches', matchesSchema);

module.exports = User;
