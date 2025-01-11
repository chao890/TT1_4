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
    createdDatetime DATETIME,
    updatedDatetime DATETIME,
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
    createdDatetime DATETIME,
    updatedDatetime DATETIME,
    alertMessage TEXT
);

INSERT INTO `users` (`id`, `username`, `password`, `companyName`) VALUES
(1, 'user1', '$2b$10$7kXXqmWx089ZER9T0GEQUuPSZZQlDW4xqBqlqB7y/Ye2nJGIP.bzm', 'Kemmer, Cronin and Walter'), 
(2, 'user2', '$2b$10$7kXXqmWx089ZER9T0GEQUuPSZZQlDW4xqBqlqB7y/Ye2nJGIP.bzm', 'TTTTTTTTTTTTTechtrek is here'), 
(3, 'user3', '$2b$10$7kXXqmWx089ZER9T0GEQUuPSZZQlDW4xqBqlqB7y/Ye2nJGIP.bzm', 'TechTrek 2025 Pte Ltd'), 
(4, 'user4', '$2b$10$7kXXqmWx089ZER9T0GEQUuPSZZQlDW4xqBqlqB7y/Ye2nJGIP.bzm', 'Senger LLC'), 
(5, 'user5', '$2b$10$7kXXqmWx089ZER9T0GEQUuPSZZQlDW4xqBqlqB7y/Ye2nJGIP.bzm', 'Conn - DuBuque'), 
(6, 'user6', '$2b$10$7kXXqmWx089ZER9T0GEQUuPSZZQlDW4xqBqlqB7y/Ye2nJGIP.bzm', 'Heathcote - Windler'), 
(7, 'user7', '$2b$10$7kXXqmWx089ZER9T0GEQUuPSZZQlDW4xqBqlqB7y/Ye2nJGIP.bzm', 'Hand - Ledner'), 
(8, 'user8', '$2b$10$7kXXqmWx089ZER9T0GEQUuPSZZQlDW4xqBqlqB7y/Ye2nJGIP.bzm', 'MacGyver Group'), 
(9, 'user9', '$2b$10$7kXXqmWx089ZER9T0GEQUuPSZZQlDW4xqBqlqB7y/Ye2nJGIP.bzm', 'Rodriguez Inc'), 
(10, 'user10', '$2b$10$7kXXqmWx089ZER9T0GEQUuPSZZQlDW4xqBqlqB7y/Ye2nJGIP.bzm', 'Gleason LLC'), 
(11, 'user11', '$2b$10$7kXXqmWx089ZER9T0GEQUuPSZZQlDW4xqBqlqB7y/Ye2nJGIP.bzm', 'Mills Inc'), 
(12, 'user12', '$2b$10$7kXXqmWx089ZER9T0GEQUuPSZZQlDW4xqBqlqB7y/Ye2nJGIP.bzm', 'Mayer, Haley and Stiedemann'), 
(13, 'user13', '$2b$10$7kXXqmWx089ZER9T0GEQUuPSZZQlDW4xqBqlqB7y/Ye2nJGIP.bzm', 'Gutmann - Langosh'), 
(14, 'user14', '$2b$10$7kXXqmWx089ZER9T0GEQUuPSZZQlDW4xqBqlqB7y/Ye2nJGIP.bzm', 'Hansen - Daugherty'), 
(15, 'user15', '$2b$10$7kXXqmWx089ZER9T0GEQUuPSZZQlDW4xqBqlqB7y/Ye2nJGIP.bzm', 'Sanford - Bruen'), 
(16, 'user16', '$2b$10$7kXXqmWx089ZER9T0GEQUuPSZZQlDW4xqBqlqB7y/Ye2nJGIP.bzm', 'Haag and Sons'), 
(17, 'user17', '$2b$10$7kXXqmWx089ZER9T0GEQUuPSZZQlDW4xqBqlqB7y/Ye2nJGIP.bzm', 'Hermiston, Hettinger and Streich'), 
(18, 'user18', '$2b$10$7kXXqmWx089ZER9T0GEQUuPSZZQlDW4xqBqlqB7y/Ye2nJGIP.bzm', 'Price - Lemke'), 
(19, 'user19', '$2b$10$7kXXqmWx089ZER9T0GEQUuPSZZQlDW4xqBqlqB7y/Ye2nJGIP.bzm', 'Emmerich - Langworth'), 
(20, 'user20', '$2b$10$7kXXqmWx089ZER9T0GEQUuPSZZQlDW4xqBqlqB7y/Ye2nJGIP.bzm', 'Abbott - Hane'), 
(21, 'user21', '$2b$10$7kXXqmWx089ZER9T0GEQUuPSZZQlDW4xqBqlqB7y/Ye2nJGIP.bzm', 'Koelpin LLC'), 
(22, 'user22', '$2b$10$7kXXqmWx089ZER9T0GEQUuPSZZQlDW4xqBqlqB7y/Ye2nJGIP.bzm', 'Farrell, Collins and Windler');

INSERT INTO `company` (`id`, `companyName`, `activeAccount`, `carbonBalance`, `cashBalance`, `createdDatetime`, `updatedDatetime`) VALUES
	(1, 'Kemmer, Cronin and Walter', 0, 2147, 547973, '2023-02-10 00:00:00', '2024-11-18 00:00:00'),
	(2, 'TTTTTTTTTTTTTechtrek is here', 1, 9999, 2026000, '2025-01-11 10:00:00', '2025-01-11 10:00:00'),
	(3, 'TechTrek 2025 Pte Ltd', 1, 200, 150000, '2025-01-11 09:00:00', '2025-01-11 09:00:00'),
	(4, 'Senger LLC', 1, 648, 959359, '2024-08-30 00:00:00', '2024-11-19 00:00:00'),
	(5, 'Conn - DuBuque', 0, 295, 164535, '2023-03-18 00:00:00', '2023-12-14 00:00:00'),
	(6, 'Heathcote - Windler', 1, 8124, 139228, '2024-04-25 00:00:00', '2024-12-28 00:00:00'),
	(7, 'Hand - Ledner', 0, 9032, 650415, '2024-11-08 00:00:00', '2024-11-15 00:00:00'),
	(8, 'MacGyver Group', 0, 3036, 524802, '2023-10-14 00:00:00', '2024-12-22 00:00:00'),
	(9, 'Rodriguez Inc', 1, 6784, 897333, '2023-02-18 00:00:00', '2024-07-01 00:00:00'),
	(10, 'Gleason LLC', 1, 1764, 657636, '2023-01-13 00:00:00', '2024-12-28 00:00:00'),
	(11, 'Mills Inc', 1, 7867, 370155, '2023-08-29 00:00:00', '2024-09-02 00:00:00'),
	(12, 'Mayer, Haley and Stiedemann', 0, 958, 759482, '2024-10-19 00:00:00', '2024-11-08 00:00:00'),
	(13, 'Gutmann - Langosh', 0, 161, 165937, '2024-09-07 00:00:00', '2024-11-21 00:00:00'),
	(14, 'Hansen - Daugherty', 1, 3434, 56068, '2024-04-30 00:00:00', '2024-09-06 00:00:00'),
	(15, 'Sanford - Bruen', 0, 541, 201799, '2024-06-29 00:00:00', '2024-03-05 00:00:00'),
	(16, 'Haag and Sons', 1, 1118, 252659, '2024-03-01 00:00:00', '2025-01-07 17:49:43'),
	(17, 'Hermiston, Hettinger and Streich', 1, 7492, 849960, '2023-04-09 00:00:00', '2024-09-23 00:00:00'),
	(18, 'Price - Lemke', 1, 2043, 419981, '2023-07-26 00:00:00', '2024-12-10 00:00:00'),
	(19, 'Emmerich - Langworth', 1, 7116, 742714, '2024-01-29 00:00:00', '2024-09-30 00:00:00'),
	(20, 'Abbott - Hane', 1, 4419, 487599, '2024-07-04 00:00:00', '2024-08-11 00:00:00'),
	(21, 'Koelpin LLC', 1, 4708, 509389, '2024-04-12 00:00:00', '2024-09-06 00:00:00'),
	(22, 'Farrell, Collins and Windler', 1, 1252, 277831, '2023-07-21 00:00:00', '2024-08-01 00:00:00');
