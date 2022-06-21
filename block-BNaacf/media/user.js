var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = {
  name: String,
  email: { type: String, lowercase: true },
  age: { type: Number, default: 0 },
  favourites: [String],
  marks: [Number],
};
