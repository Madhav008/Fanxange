const mongoose = require('mongoose');

const matchesSchema = new mongoose.Schema({
    name:String,
    startDate:String,
    endDate:String,
    seriesName:String,
    seriesId:String,
    matchId:{
        type:String,
        unique:true 
    },
    teams:[],
    teamPlayers:[]
});

const RecentMatches = mongoose.model('RecentMatches', matchesSchema);

module.exports = RecentMatches;
