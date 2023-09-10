const mongoose = require('mongoose');

const PerformanceSchema = new mongoose.Schema({
    playerId: String,
    price: String,
    total_points :String,
    avg_bat_points: String,
    avg_bowl_points: String,
    avg_field_points: String,
    date: String,
});

const Performance = mongoose.model('Performance', PerformanceSchema);

module.exports = Performance;
