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

const getHistory = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const { err, message } = errors.array({ onlyFirstError: true })[0];
    return res.status(422).json({ err, message });
  } else {
    const { id } = req.params;
    let user = await User.findOne({ id: id });
    if (user) {
      let history = user.history;

      return res.json({ err: false, message: "Success", data: history });
    } else {
      return res.status(404).json({ err: true, message: "User not found" });
    }
  }
};

module.exports = { addUser, getHistory };
