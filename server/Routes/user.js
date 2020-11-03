const express = require("express");
const { addUser, getHistory } = require("../controllers/user-controller");
const {
  addUserValidation,
  getHistoryValidation,
} = require("../validations/userValidation");
const router = express.Router();

router.post("/add", addUserValidation, addUser);
router.get("/history/:id", getHistoryValidation, getHistory);

module.exports = router;
