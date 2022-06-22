writeCode

Answer below questions

- do not mutate previous schema unless specified
- create a new schema for each question

Q. create an express server

- use mongoose to connect to mongodb database

```js
var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sample', (err) => {
  console.log(err ? err : 'Connected to Database');
});

var app = express();

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});
```

Q. Create an article Schema with fields

- title -> String
- description -> String
- tags -> [String]
- createdAt -> Date, defaults to current date
- likes -> Number, defaults to zero

```js
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  description: String,
  tags: [String],
  createdAt: { type: Date, default: new Date() },
  likes: { type: Number, default: 0 },
});
```

Q. create a user schema with following fields and type
1.name -> string
2.email -> string
3.age -> number

```js
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  email: String,
  age: Number,
});
```

Q. update user schema to make email lowercase and default age to be 0.

```js
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  email: { type: String, lowercase: true },
  age: { type: Number, default: 0 },
});
```

Q. Update user schema

- contains password field with minimum 5 characters
- add createdAt field of type date and default it to current date.

```js
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  email: { type: String, lowercase: true },
  age: { type: Number, default: 0 },
  password: { type: String, minlength: 5 },
  createdAt: { type: Date, default: new Date() },
});
```

Q. Add address Schema with fields

- village -> String
- city -> String
- state -> String
- pin -> number
- user -> ObjectId of User from user schema

```js
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var addressSchema = new Schema({
  village: String,
  city: String,
  state: String,
  pin: Number,
  user: Schema.Types.ObjectId,
});
```

Q. Update address schema to contain required validators for state and city field.

```js
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var addressSchema = new Schema({
  village: String,
  city: { type: String, required: true },
  state: { type: String, required: true },
  pin: Number,
  user: Schema.Types.ObjectId,
});
```

Q. Add favourites in user schema of type array of strings.

```js
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  email: { type: String, lowercase: true },
  age: { type: Number, default: 0 },
  password: { type: String, minlength: 5 },
  createdAt: { type: Date, default: new Date() },
  favourites: [String],
});
```

Q. Add timestamps to user and address schema.

```js
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: String,
    email: { type: String, lowercase: true },
    age: { type: Number, default: 0 },
    password: { type: String, minlength: 5 },
    createdAt: { type: Date, default: new Date() },
    favourites: [String],
  },
  { timestamps: true }
);
```

```js
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var addressSchema = new Schema(
  {
    village: String,
    city: { type: String, required: true },
    state: { type: String, required: true },
    pin: Number,
    user: Schema.Types.ObjectId,
  },
  { timestamps: true }
);
```

Q. create model for users schema created above and export it.

```js
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: String,
    email: { type: String, lowercase: true },
    age: { type: Number, default: 0 },
    password: { type: String, minlength: 5 },
    createdAt: { type: Date, default: new Date() },
    favourites: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
```

Q. create model for article schema created above and export it.

```js
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  description: String,
  tags: [String],
  createdAt: { type: Date, default: new Date() },
  likes: { type: Number, default: 0 },
});

module.exports = mongoose.model('Article', articleSchema);
```

Q. create model for address schema created above and export it.

```js
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var addressSchema = new Schema(
  {
    village: String,
    city: { type: String, required: true },
    state: { type: String, required: true },
    pin: Number,
    user: Schema.Types.ObjectId,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Address', addressSchema);
```
