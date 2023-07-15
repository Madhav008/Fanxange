const mongoose = require('mongoose');

const BowlingSchema = new mongoose.Schema({
    playerId: String,
    matchId: {
        type: String,
        unique: true
    },
    runs_given: Number,
    four_given: Number,
    six_given: Number,
    balls_bowled: Number,
    wicket: Number,
    dot_balls: Number,
    madian_over: Number,
    isBall:Boolean,
    points:Number,
});

const BowlingStats = mongoose.model('BowlingStats', BowlingSchema);

module.exports = BowlingStats;
