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

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );

  const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'location',
        message: 'Where are you from?',
      },
      {
        type: 'input',
        name: 'hobby',
        message: 'What is your favorite hobby?',
      },
      {
        type: 'input',
        name: 'food',
        message: 'What is your favorite food?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
      },
    ]);
  };
  
