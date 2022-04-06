const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");

app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", require("./routes/user"));

app.get("/", (req, res) => {
  res.send("<h1>Home screen<h1>");
});

app.listen(3000, (req, res) => {
  console.log("listening to port 3000");
  mongoose
    .connect("mongodb://localhost/capstone")
    .then((result) => {
      console.log("database is connected");
    })
    .catch((err) => {
      console.log("database connected fail");
    });
});
