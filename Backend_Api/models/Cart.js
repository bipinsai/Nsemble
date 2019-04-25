const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const cartSchema = new Schema({
  itemType: {
    type: String,
    default: "clothes"
  },
  otherItems: {
    type: String,
    default: ""
  },
  condition: {
    type: String,
    default: "new"
  }
});

module.exports = Cart = mongoose.model("carts", cartSchema);
