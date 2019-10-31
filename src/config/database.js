const mysql = require("mysql");

const hostname = "localhost";
const user = "root";
const password = "";
const database = "turma5";

const connection = mysql.createConnection({
    host: hostname,
    user: user,
    password: password,
    database: database
});

connection.connect((err) => {
    if (err) {
        console.log("Error connecting to database");
    } else {
        console.log("Mysql running")
    }
});

module.exports = connection;