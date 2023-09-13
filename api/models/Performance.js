const mongoose = require('mongoose');

const PerformanceSchema = new mongoose.Schema({
    playerId: String,
    matchId:String,
    price: String,
    total_points :String,
    avg_points: String,
    date: String,
});

const Performance = mongoose.model('Performance', PerformanceSchema);

module.exports = Performance;
