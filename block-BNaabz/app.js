var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/sample', (err) => {
  console.log(err ? err : 'Connected to Database!');
});

var app = express();

app.listen(4000, () => {
  console.log('server is listening on port 4000');
});
