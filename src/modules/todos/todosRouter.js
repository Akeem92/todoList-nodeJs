const express = require("express");

const todosController = require("./todosController");
const router = express.Router();

router.get("/acceuil", todosController.getHome);

module.exports = router;
