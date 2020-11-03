const express = require("express");
const { splitBill } = require("../controllers/bill-controller");
const router = express.Router();

router.post("/split", splitBill);

module.exports = router;
