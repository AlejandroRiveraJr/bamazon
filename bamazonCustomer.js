var mysql = require("mysql"),
    inquirer = require('inquirer'),
    table = require("cli-table");

var connection = mysql.createConnection({
    host: "localhost",
    port:3306,
    user: "root",
    password: "",
    database: "MOCK_DATA"
});



    