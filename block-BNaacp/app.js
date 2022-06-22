var express = require('express');
var mongoose = require('mongoose');
var User = require('./models/user');

//connect to database

mongoose.connect('mongodb://localhost/sample', (err) => {
  console.log(err ? err : 'Connected to Database');
});

var app = express();

// middlewares

app.use(express.json());

// routes

//create

app.post('/users', (req, res) => {
  User.create(req.body, (err, user) => {
    if (err) console.log(err);
    res.json(user);
  });
});

//read

app.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    if (err) console.log(err);
    res.json({ users: users });
  });
});

app.get('/users/:id', (req, res) => {
  var id = req.params.id;
  User.find({ _id: id }, (err, user) => {
    if (err) console.log(err);
    console.log(user); // returns user object in an array
  });
  User.findOne({ _id: id }, (err, user) => {
    if (err) console.log(err);
    console.log(user); // returns user object
  });
  User.findById(id, (err, user) => {
    if (err) console.log(err);
    console.log(user); // returns user object
  });
});

//update

app.put('/users/:id', (req, res) => {
  var id = req.params.id;
  User.update(req.body, (err, user) => {
    if (err) console.log(err);
    console.log(user);
  });
  User.updateOne(req.body, (err, user) => {
    if (err) console.log(err);
    console.log(user);
  });
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, user) => {
    if (err) console.log(err);
    console.log(user);
  });
});

// delete

app.delete('/users/:id', (req, res) => {
  var id = req.params.id;
  User.findByIdAndDelete(id, (err, user) => {
    if (err) console.log(err);
    res.send(`${user.name} is successfully deleted!`);
  });
});

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});
