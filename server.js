const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoute.js");
const authRouter = require("./routes/auth.js");
require('dotenv').config()
const app = express();

app.use(express.json());

mongoose.connect(
  process.env.con,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

app.use(userRouter);
app.use(authRouter);
app.listen(5000, () => {
  console.log("Server is running...");
});