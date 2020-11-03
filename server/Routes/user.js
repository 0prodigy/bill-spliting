const express = require("express");
const { addUser } = require("../controllers/user-controller");
const { addUserValidation } = require("../validations/userValidation");
const router = express.Router();

router.post("/add", addUserValidation, addUser);

module.exports = router;
