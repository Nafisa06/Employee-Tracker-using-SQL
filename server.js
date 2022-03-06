const express = require('express');
const mysql = require('mysql2');
const inquirer = require("inquirer");

require("dotenv").config();


// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'process.env.DB_USER',
      // MySQL password
      password: 'process.env.DB_PASSWORD',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );
  
connection.query = util.promisify(connection.query);

connection.connect(function (err) {
    if (err) throw err;
    initialAction();
})

// employee tracker logo

console.table(
    "\n------------ EMPLOYEE TRACKER ------------\n"
)

// inital questions

const initialAction = async () => {
    try {
        let answer = await inquirer.prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View All Employees',
                'Add Employees',
                'Update Employee Role',
                'View All Roles',
                'Add Roles',
                'View All Departments',                              
                'Add Departments',
                'Add Roles',               
                'Quit'
            ]
        });
        switch (answer.action) {
            case 'View All Employees':
                employeeView();
                break;

            case 'View All Departments':
                departmentView();
                break;

            case 'View All Roles':
                roleView();
                break;

            case 'Add Employees':
                employeeAdd();
                break

            case 'Add Departments':
                departmentAdd();
                break

            case 'Add Roles':
                roleAdd();
                break

            case 'Update Employee Role':
                employeeUpdate();
                break

            case 'Quit':
                connection.end();
                break;
        };
    } catch (err) {
        console.log(err);
        initialAction();
    };
}

// Select view all employees.
// Select to view departments.
// Select to view all roles.
// Select to add employees.
// Select to add a department.
// Select to add new roles.
// Select to update the role of a specific employee.


