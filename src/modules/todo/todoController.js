const moment = require("moment");

exports.getHome = (req, res, next) => {
    return res.render("home", {
        name: process.env.name,
        nomPage: "Acceuil",
        jour: moment().locale('fr').format('LLLL')
    });
};
