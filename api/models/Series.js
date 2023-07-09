const mongoose = require('mongoose');

const serieSchema = new mongoose.Schema({
  seriesId:String,
  name:String,
});

const User = mongoose.model('Series', serieSchema);

module.exports = User;
