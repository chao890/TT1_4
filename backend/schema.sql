CREATE DATABASE hackathon;
USE hackathon;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password TEXT NOT NULL,
    companyName TEXT NOT NULL,
    UNIQUE (username)
);

CREATE TABLE company (
    id INT AUTO_INCREMENT PRIMARY KEY,
    companyName VARCHAR(255) NOT NULL,
    activeAccount TEXT NOT NULL,
    carbonBalance FLOAT,
    cashBalance FLOAT,
    createdDatetime TIMESTAMP,
    updatedDatetime TIMESTAMP,
    UNIQUE (companyName)
);

CREATE TABLE requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    companyId INT NOT NULL,
    requestorCompanyId INT NOT NULL,
    carbonUnitPrice FLOAT,
    carbonQuantity FLOAT,
    requestReason TEXT,
    requestStatus VARCHAR(255),
    requestType VARCHAR(255),
    createdDatetime TIMESTAMP,
    updatedDatetime TIMESTAMP
);