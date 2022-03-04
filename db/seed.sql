USE my_company;

INSERT INTO departments (name)
VALUE ("Sales"),
 ("Engineering"),
 ("Finance"),
 ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUE 
 ("Salesperson", 80000, 1)
 ("Lead Engineer", 150000, 2),
 ("Software Engineer", 120000, 2),
 ("Account Manager", 160000, 3),
 ("Accountant", 125000, 3),
 ("Legal Team Lead", 250000, 4),
 ("Lawyer", 190000, 4);

INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUE ("Mike", "Chan", null, 1),
("Ashley", "Rodriguez", null, 2),
("Kevin","Tupid", 2,3),
("Kunal", "Singh", null, 4),
("Malia", "Brown", 4, 5),
("Sarah", "Lourd",null, 6),
("Tom", "Alan", 6, 7);