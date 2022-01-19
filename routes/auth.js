// register
const express = require("express");
const jwt = require('jsonwebtoken');
require('dotenv').config()
const userModel = require("../models/user");
const app = express();
app.use(express.json())

app.use(express.urlencoded({
  extended: true
}))

app.post("/Register", async (req, res) => {
  const Register = await userModel.create({ name: req.body.name, email: req.body.email, password: req.body.password });

  try {
    res.send(Register);
  } catch (error) {
    res.status(500).send(error);
  }
});



// login

// generer token
// const accessToken = jwt.sign(user, process.env.ACCES_TOKEN_SECRET)


app.post("/Login", async (req, res) => {
  const user = await userModel.findOne({ email: req.body.email });
  if (user.password === req.body.password) {  
    const accessToken = jwt.sign({email: user.email }, process.env.ACCES_TOKEN_SECRET)
    res.send(accessToken)
  }
  try {
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});


module.exports = app;