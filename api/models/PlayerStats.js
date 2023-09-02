const mongoose = require('mongoose');

const PlayerStatsSchema = new mongoose.Schema({
    name: String,
    playerId: {
        type: String,
        unique: true
    },
    points: Number,
    price: Number,
    teamId: String,
    isInjured: Boolean,
    image: Object,
    longName: String,
    imageUrl:String,
});

const PlayerStats = mongoose.model('PlayerStats', PlayerStatsSchema);

module.exports = PlayerStats;
