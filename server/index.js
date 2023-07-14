const fs = require("fs/promises");
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");

const app = express();
console.log("Starting server...");

const secretKey = 'BhEeYBMJ?phhP3EFc5N-tASF33oqG!96b9NQvcsxTXNbASjG2yWV6LPEYyBjBQWi'; // Need to change this when deploying to production

app.use(express.json());

// Middleware to verify the token
function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    req.user = user;
    next();
  });
}

// This will be replaced with a database
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

app.post("/auth", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username === 'admin' && password === 'admin') {
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    return res.json({ token });
  }

  res.status(401).json({ message: 'Invalid credentials' });
});

app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Protected route accessed successfully' });
});

app.listen(5000, () => console.log("Server started! Running on port 5000!"));