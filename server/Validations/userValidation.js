const { body, param } = require("express-validator");

const addUserValidation = [
  body("name")
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("Ohh!! you forgot to tell us your name"),
];

const getHistoryValidation = [
  param("id")
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage("user id is required"),
];

module.exports = { addUserValidation, getHistoryValidation };
