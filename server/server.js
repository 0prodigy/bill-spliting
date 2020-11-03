const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const billRouter = require("./routes/bill");
const userRouter = require("./routes/user");

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/bills", billRouter);
app.use("/api/user", userRouter);

mongoose.connect(
  process.env.MONGO_DB_URI,
  { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log("err" + err);
    } else {
      console.log("Database Connected Successfully");
    }
  }
);

const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  console.log(`Server is up and running on ${port}`);
});
