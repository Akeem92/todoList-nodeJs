const moment = require("moment");
const Todos = require("../../models/todos");

exports.getHome = (req, res, next) => {
    Todos.findAll().then((todos) => {
        
    }).catch((err) => {
        console.log(err);
    });

        return res.render("home", {
            name: process.env.name,
            nomPage: "Acceuil",
            jour: moment().locale("fr").format("LLLL"),
            todos: Array(),
        });
};
