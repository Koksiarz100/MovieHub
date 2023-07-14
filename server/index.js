const fs = require("fs/promises");
const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

console.log("Starting server...");

app.use(express.json());

const movies = [
  {Title: "Movie 1", Description: "Description 1", Rating: 5},
  {Title: "Movie 2", Description: "Description 2", Rating: 4},
  {Title: "Movie 3", Description: "Description 3", Rating: 3},
  {Title: "Movie 4", Description: "Description 4", Rating: 2},
  {Title: "Movie 5", Description: "Description 5", Rating: 1},
  {Title: "Movie 6", Description: "Description 6", Rating: 5},
]

app.get("/start", async (req, res) => {
  res.json(movies);
});

app.post("/backend", async (req, res) => {
  const id = uuidv4();
  const content = req.body.content;

  if (!content) {
    res.sendStatus(400);
    return;
  }

  console.log(content);

  res.sendStatus(201);
});

app.listen(5000, () => console.log("Server started! Running on port 5000!"));