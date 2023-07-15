const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    teamid: {
        type: String,
        unique: true
    },
    slug: String,
    name: String,
    longName: String,
    abbreviation: String,
    imageUrl: String,
});

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;
