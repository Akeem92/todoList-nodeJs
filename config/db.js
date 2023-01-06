require("dotenv").config();
const { Sequelize } = require("sequelize");

require("colors");

async function runDB() {
    const sequelize = new Sequelize("todoList", "root", "root", {
        host: "",
        dialect: "mysql",
    });

    try {
        await sequelize.authenticate();
        console.log(`Connection has been established succefully.`.green);
    } catch (error) {
        console.log(`Unable to connect to the database: `.red);
    }

    process.on("SIGINT", () => {
        sequelize.close(() => {
            console.log(`Mysql default connection is disconnected due to application termination`.magenta);
            process.exit(0);
        });
    });
}

module.exports = runDB;
