const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const Blog = new Schema({
  name: {type: String, maxLength: 255},
  description: {type: String,maxLength: 600},
  image: { type: String,maxLength: 255},
  comments: {type: [Object],default: []},
  createAt: {type: Date, default: new Date()},
  updatedAt: {type: Date, default: new Date()},
});

module.exports = mongoose.model('Blog', Blog);