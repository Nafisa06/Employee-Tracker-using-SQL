DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE departments (
  id INTEGER NOT NULL auto_increment PRIMARY KEY,
  name VARCHAR(30)
);



