var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var addressSchema = {
  village: String,
  city: String,
  state: String,
  pin: Number,
  user: Schema.Types.ObjectId,
};
