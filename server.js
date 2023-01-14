const express = require("express");
const path = require("path");
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");

const runDB = require("./config/database");

const todoRouters = require("./src/routes/todo_router");

const createServer = () => {
    runDB();

    //On initialise express
    const app = express();

    //Middleware configuration
    app.use(
        bodyParser.json({
            limit: "50mb",
        })
    );

    app.use(
        bodyParser.urlencoded({
            limit: "50mb",
            extended: true,
            parameterLimit: 500000,
        })
    );

    //View set configuration
    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "src", "views"));

    //App configuraiton
    app.use("/static", express.static(path.join(__dirname, "src", "public")));

    // Routes de l'application
    app.use("/v1", todoRouters);

    return app;
};

module.exports = { createServer };
