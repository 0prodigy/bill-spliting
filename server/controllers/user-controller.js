const { validationResult } = require("express-validator");
const User = require("../models/User");
const { v4: uuid } = require("uuid");

const addUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const { err, message } = errors.array({ onlyFirstError: true })[0];
    return res.status(422).json({ err, message });
  } else {
    try {
      let user = new User({ id: uuid(), name: req.body.name });
      await user.save();
      return res
        .status(200)
        .json({ err: false, message: "User added succefully", user: user });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ err: true, message: "Something went wrong" });
    }
  }
};

module.exports = { addUser };
