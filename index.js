const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const SECRET_KEY = "test123";

const app = express();
const port = process.env.PORT || 4903;

// Use path to ensure the correct file location
const cityData = fs.readFileSync(path.join(__dirname, "cities.json"), "utf8");
const cities = JSON.parse(cityData);

app.use(cors());

// Authentication
app.use(bodyParser.json());

const getUsers = () => {
  const data = fs.readFileSync(path.join(__dirname, "user.json"));
  return JSON.parse(data);
};

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const users = getUsers();

  const foundUser = users.find((u) => u.email === email);
  if (!foundUser) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  const isPasswordValid = bcrypt.compareSync(password, foundUser.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  const token = jwt.sign(
    { id: foundUser.id, email: foundUser.email, name: foundUser.name },
    SECRET_KEY,
    { expiresIn: "1h" }
  );
  res.json({ token });
});

const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Access denied" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
};

app.get("/user", authenticateJWT, (req, res) => {
  const users = getUsers();
  const foundUser = users.find((u) => u.id === req.user.id);

  if (!foundUser) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json({ id: foundUser.id, name: foundUser.name, email: foundUser.email });
});

// Basic route to access the data
app.get("/", (req, res) => {
  res.send(cities);
});

// Normalize string for search purposes
const normalizeString = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

// Turn the JSON into an array
const citiesArray = Object.values(cities);

// Route to get city by ID
app.get("/id/:id", (req, res) => {
  const cityId = +req.params.id;
  const city = citiesArray.find((element) => element.id === cityId);

  city ? res.json(city) : res.status(404).send("City ID not found");
});

// Route to get city by name
app.get("/name/:name", (req, res) => {
  const cityName = req.params.name.toLowerCase();
  const city = citiesArray.find(
    (element) => element.name.toLowerCase() === cityName
  );

  city ? res.json(city) : res.status(404).send("City not found");
});

// Route to get city by biome
app.get("/biome/:biome", (req, res) => {
  const cityBiome = req.params.biome.toLowerCase();
  const city = citiesArray.filter((element) => element.biome === cityBiome);

  city.length > 0
    ? res.json(city)
    : res.status(404).send("City Biome not found");
});

// Route to get city by climate
app.get("/climat/:climat", (req, res) => {
  const cityClimat = normalizeString(req.params.climat);
  const city = citiesArray.filter((element) => element.climat === cityClimat);

  city.length > 0
    ? res.json(city)
    : res.status(404).send("City Climat not found");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
