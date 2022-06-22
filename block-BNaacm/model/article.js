var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var acticleSchema = new Schema({
  title: String,
  description: String,
});

module.exports = mongoose.Model('Article', acticleSchema);
