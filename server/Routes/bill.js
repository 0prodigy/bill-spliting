const express = require("express");
const { splitBill } = require("../Controller/billControler");
const router = express.Router();

router.post("/split", splitBill);

module.exports = router;
