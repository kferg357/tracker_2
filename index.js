const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Kenndall2017!",
    database:"employees"
});

connection.connect(function(err) {
    if (err) throw err;
    startUp();
});

function startUo() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            messages: "What would you like to do?",
            choices: [
                "View All Employees",
                "View ALl Departments",
                "View All Roles",
                "Add Employees",
                "Add Departments",
                "Add Roles",
                "Update Employee Role",
                "EXIT"
            ]
        })
}
