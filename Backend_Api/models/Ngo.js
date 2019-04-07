const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ngoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    default:
      "https://www.pmidpi.com/wp-content/uploads/2015/07/person-placeholder.jpg"
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
  website: {
    type: String,
    default: "#"
  },
  phoneno: {
    type: String
  },
  desc: {
    type: String
  }
});

module.exports = Ngo = mongoose.model("Ngos", ngoSchema);
