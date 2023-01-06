const express = require("express");

const todoController = require("./todosController");
const router = express.Router();

router.get("/acceuil", todoController.getHome);

module.exports = router;
