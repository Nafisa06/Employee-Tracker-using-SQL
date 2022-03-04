DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

--table for departments--

CREATE TABLE departments (
  id INTEGER NOT NULL auto_increment PRIMARY KEY,
  name VARCHAR(30)
);

--table for roles--
CREATE TABLE roles (
  id INTEGER NOT NULL auto_increment PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INTEGER,
  FOREIGN KEY (department_id) REFERENCES department(id)
  ON DELETE SET NULL
);

--table for departments--