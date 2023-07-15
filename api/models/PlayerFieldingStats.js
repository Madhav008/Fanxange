const mongoose = require('mongoose');

const FieldingSchema = new mongoose.Schema({
    playerId: String,
    matchId: {
        type: String,
        unique: true
    },
    bats_runs: Number,
    catches: Number,
    runouts: Number,
    stumping: Number,
    points:Number,
});

const FieldingStats = mongoose.model('FieldingStats', FieldingSchema);

module.exports = FieldingStats;
