const express = require("express");
const userModel = require("../models/user");
const app = express();
app.use(express.json())

app.use(express.urlencoded({
  extended: true
}))

app.get("/users", async (req, res) => {
  const users = await userModel.find({});

  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});
// ...Create Users
app.post("/CreateUsers", async (req, res) => {
  const CreateUsers = await userModel.create({name: req.body.name, email:req.body.email, password: req.body.password});

  try {
    res.send(CreateUsers);
  } catch (error) {
    res.status(500).send(error);
  }
});
//   ...Update Users
app.post("/UpdateUsers/:id", async (req, res) => {
  const users = await userModel.findOneAndUpdate({_id: req.params.id},{name: req.body.name, email:req.body.email ,password: req.body.password},{ returnDocument: 'after' });

  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;