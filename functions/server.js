const serverless = require("serverless-http");
const path = require("path");
const app = require(path.join(__dirname, "../index.js"));

module.exports.handler = serverless(app);
