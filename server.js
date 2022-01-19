const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoute.js");
const authRouter = require("./routes/auth.js");

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://hugo:Eladab-rabie37@cluster0.eh6dp.mongodb.net/miniBooking?retryWrites=true&w=majority",
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