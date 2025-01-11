CREATE DATABASE hackathon;
USE hackathon;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password TEXT NOT NULL,
    UNIQUE (name)
);

INSERT INTO users (name, password)
VALUES ('admin', 'admin');