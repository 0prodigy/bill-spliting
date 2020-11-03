const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  history: {
    type: Array,
    default: [],
  },
  balance: {
    type: Number,
    default: 1000,
  },
});

module.exports = mongoose.model("User", UserSchema);
