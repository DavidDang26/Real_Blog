const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const User = new Schema({
  id: {type: String, maxLength: 100},
  name: {type: String, maxLength: 255},
  email: {type: String,maxLength: 600},
  image: { type: String},
});

module.exports = mongoose.model('User', User);