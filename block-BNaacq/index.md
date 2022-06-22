writeCode

Design schemas for a blog application which will have

- articles
- comments(on each article) -> may be multiple
- user

```js
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var blogSchema = new Schema(
  {
    articles: { type: Schema.Types.ObjectId, required: true },
    comments: { type: Schema.Types.ObjectId, required: true },
    user: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

var Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
```

Each article can have fields :-

- title
- description
- tags
- likes
- author -> ID of user
- comments
- timestamps()

```js
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    tags: [String],
    likes: { type: Number, default: 0 },
    author: Schema.Types.ObjectId,
    comments: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Article', articleSchema);
```

Each comment can have fields:-

- content
- author -> ID of user
- article ->
- timestamps()

```js
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema = new Schema(
  {
    content: { type: String, required: true },
    author: Schema.Types.ObjectId,
    article: Schema.Types.ObjectId,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Comment', commentSchema);
```

Each user can have fields:-

- name
- email
- age

```js
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, lowercase: true },
    age: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
```

- Design all the schemas and their associated models and export it.
- design in such a way that, they should be associated.

For example:-

- each article and comment should have author
- each comment should belong to one of the article
- add appropriate validations in all schemas
