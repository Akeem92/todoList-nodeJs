const express = require("express");

const router = express.Router();

const todoRouter = require("../modules/todos/todosRouter");

router.use("/", todoRouter);

module.exports = router;
