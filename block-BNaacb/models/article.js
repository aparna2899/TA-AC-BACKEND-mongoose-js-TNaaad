var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var acticleSchema = new Schema({
  title: String,
  author: String,
  description: String,
});
