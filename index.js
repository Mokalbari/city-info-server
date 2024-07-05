const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 4903;

const cityData = JSON.parse(fs.readFileSync("cities.json", "utf8"));

app.use(cors("*"));

// Basic route to access the data
app.get("/", (req, res) => {
  res.send(cityData);
});

// Middleware pour servir les fichiers statiques
app.use("/static", express.static(__dirname + "/asset"));

const normalizeString = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

// Turn the JSON into an array
const citiesArray = Object.values(cityData);

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

  city ? res.json(city) : res.status(404).send("City Biome not found");
});

// Route to get city by climate
app.get("/climat/:climat", (req, res) => {
  const cityClimat = normalizeString(req.params.climat);
  const city = citiesArray.filter((element) => element.climat === cityClimat);

  city ? res.json(city) : res.status(404).send("City Climat not found");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
