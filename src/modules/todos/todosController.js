const moment = require("moment");
const Todos = require("../../models/todos");

exports.getHome = (req, res, next) => {
    Todos.find()
        .sort({ date: "desc" })
        .then((todos) => {
            return res.render("home", {
                name: process.env.name,
                nomPage: "Acceuil",
                jour: moment().locale("fr").format("LLLL"),
                todos: todos,
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.postHome = (req, res, next) => {
    let titre = decodeURI(req.body.titre);
    let description = decodeURI(req.body.description);
    let date = decodeURI(req.body.date);

    if (titre != "" && description != "" && date != "") {
        const todos = new Todos({
            title: titre,
            description: description,
            date: date,
            status: 1,
        });

        todos
            .save()
            .then((result) => {
                console.log(`Todos add with success`.green);
                res.send({ status: "000", data: todos });
            })
            .catch((err) => {
                console.log(`Error to add todos with error : {err}`.red);
                res.send({ status: "001", data: err });
            });

        // todos
        //     .save()
        //     .then((result) => {
        //         console.log(`Nouvelle tâche crée avec succès`.grey);
        //         req.session.message = {
        //             type: success,
        //             message: "Tâche crée avec succès.",
        //         };

        //         // Rediriger vers la page d'acceuill
        //         return 'ok';
        //     })
        //     .catch((err) => {
        //         console.log(`{err}`.red);
        //         return 'ko';
        //     });
    } else {
        console.log(`Tous les champs n'ont pas été renseigné.`);
    }
};

exports.postUpdate = (req, res, next) => {
    let id = req.body.id;

    console.log(id);

    // Todos.find({ _id: id, status: 1 })
    //     .then((todo) => {
    //         res.send({ status: "000", data: todo });
    //     })
    //     .catch((err) => {
    //         console.log(`Error to find todo because error : ${err}`.red);
    //         res.send({ status: "001", data: err });
    //     });
};
