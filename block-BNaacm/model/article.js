var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var acticleSchema = new Schema({
  title: String,
  description: String,
});

module.exports = mongoose.model('Article', acticleSchema);
