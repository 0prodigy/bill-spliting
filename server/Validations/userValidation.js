const { body } = require("express-validator");

const addUserValidation = [
  body("name")
    .exists({ checkFalsy: true, checkNull: true })
    .withMessage("Ohh!! you forgot to tell us your name"),
];

module.exports = { addUserValidation };
