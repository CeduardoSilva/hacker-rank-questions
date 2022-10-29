"use strict";

const express = require("express");
const app = express();
app.use(express.json());

let memoryDatabase = [];

app.post("/candidates", function (req, res) {
  let user = req.body;
  if (isValid(user)) {
    memoryDatabase.push(user);
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});

app.get("/candidates/search", function (req, res) {
  let skills = req.query.split(',');
});

app.listen(process.env.HTTP_PORT || 3000);

function isValid(user) {
  return user["id"] && user["name"] && user["skills"] ? true : false;
}

function getCandidate(skills) {
  
}