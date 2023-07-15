const mongoose = require('mongoose');

const serieSchema = new mongoose.Schema({
  seriesId:{
    type: String,
    unique: true,
  },
  name:String,
});

const Series = mongoose.model('Series', serieSchema);

module.exports = Series;
