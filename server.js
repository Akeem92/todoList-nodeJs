const express = require("express");
const path = require("path");
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");

const todoRouters = require("./src/routes/todo_router");

const createServer = () => {
  //On initialise express
  const app = express();

  //View set configuration
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "src", "views"));

  // Routes de l'application
  app.use("/v1", todoRouters);

  return app;
};

module.exports = { createServer };
