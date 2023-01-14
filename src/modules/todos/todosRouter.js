const express = require("express");

const todosController = require("./todosController");
const router = express.Router();

router.get("/acceuil", todosController.getHome);

router.post("/acceuil", todosController.postHome);

router.post("/update", todosController.postUpdate);


module.exports = router;
