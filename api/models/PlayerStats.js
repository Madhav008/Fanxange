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
    image: String,
    longName: String,
    country: String,
    countryImage: String,
});

const PlayerStats = mongoose.model('PlayerStats', PlayerStatsSchema);

module.exports = PlayerStats;
