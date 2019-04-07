const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const DPSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phoneno: {
    type: String,
    required: true
  },
  desc: {
    type: String
  }
});

module.exports = DropPoint = mongoose.model("DropPoints", DPSchema);
