CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
id INTEGER (11) Auto_INCREMENT NOT NULL,
burger_name VARCHAR(30) NOT NULL, 
devoured BOOLEAN NOT NULL,
date timestamp(6),
PRIMARY KEY (id)
);

