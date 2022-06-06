--deletes db if already exists
DROP DATABASE IF EXISTS books_db;
--creates new db
CREATE DATABASE books_db;

--specifies that were working in books_db
USE books_db;

--creates new table within books_db w two columns = ID and Name
CREATE TABLE biographies (
  id INT NOT NULL,
  name VARCHAR(100) NOT NULL
);

