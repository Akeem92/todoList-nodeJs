require("dotenv").config();
const mysql = require("mysql");

require("colors");

function runDB() {
    const connection = mysql.createConnection({
        host: "localhost://db:3306",
        user: "root",
        password: "root",
        database: "todoList",
    });

    connection.connect((err) => {
        if (err) {
            console.log(`Mysql default connection has occured: ${err} error`.red);
            return;
        }
        console.log(`Mysql default connection is open to 192.168.1.70`.green);
    });

    process.on("SIGINT", () => {
        connection.end(() => {
            console.log(`Mysql default connection is disconnected due to application termination`.magenta);
            process.exit(0);
        });
    });
}

module.exports = runDB;
