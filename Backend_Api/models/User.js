const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  address: {
    type: String,
    required: true
  },
  phoneno: {
    type: String
  },
  donation: {
    type: Array,
    default: []
  }
});

module.exports = User = mongoose.model("users", userSchema);
