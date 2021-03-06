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
    type: String
  },
  phoneno: {
    type: String
  },
  donation: {
    type: Array,
    default: []
  },
  desc: {
    type: String
  },
  website: {
    type: String,
    default: "#"
  },
  logo: {
    type: String,
    default:
      "https://www.pmidpi.com/wp-content/uploads/2015/07/person-placeholder.jpg"
  },
  isNgo: {
    type: Boolean,
    default: false
  },
  isNsembler:{
    type: Boolean,
    default: false
  }
});

module.exports = User = mongoose.model("users", userSchema);
