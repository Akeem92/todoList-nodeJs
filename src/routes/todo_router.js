const express = require("express");

const router = express.Router();

const todoRouter = require("../modules/todo/todoRouter");

router.use("/", todoRouter);

module.exports = router;
