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
    unique: true,
  },
  image: {
    type: String,
    default:
      "https://i.pinimg.com/564x/e1/b9/1a/e1b91af0d34ae6c4b82a4402c1505617.jpg",
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
