const express = require("express");
const { addUser } = require("../Controller/userController");
const { addUserValidation } = require("../Validations/userValidation");
const router = express.Router();

router.post("/add", addUserValidation, addUser);

module.exports = router;
