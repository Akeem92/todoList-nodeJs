require("dotenv").config();

const { createServer } = require("./server");

const app = createServer();

app.get("/", (req, res, next) => {
  res.render("home");
});

const server = app.listen("3000", () => {
  console.log("Server now listening on localhost:3000, on developpement");
});
