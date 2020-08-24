CREATE DATABASE blog;

USE blog;

CREATE TABLE `live-33_blandine_blog`.`articles` (
    `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT ,
    `title` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
    `body` TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL , 
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    PRIMARY KEY (`id`)
    ) ENGINE = InnoDB CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;


INSERT INTO `articles` (`id`, `title`, `body`, `created_at`) VALUES (NULL, 'my second title', 'blah blah', CURRENT_TIMESTAMP);


//  Creer un champ updated_at, et comparer les dates created_at et updated_at

ALTER TABLE articles ADD COLUMN 'yourColumnName1' dataType NULL;

SELECT created_at FROM articles WHERE id = 2;
-- https://www.w3schools.com/Sql/func_mysql_datediff.asp

--  SELECT DATEDIFF("2017-06-25", "2017-06-15"); 
--SELECT DATEDIFF(created_at, updated_at) FROM articles; 
-- SECELCT TIMEDIFF(time1, time2) FROM articles;
 SELECT TIMEDIFF(created_at, updated_at)  AS 'Ecart en temps' FROM articles;
 
 CREATE TABLE `live-33_blandine_blog`.`users`(
    id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    nom VARCHAR(255) CHARACTER SET utf8mb4 COLLATE 
    
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY('id')
 ) ENGINE = InnoDB CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;
 -- CREATE DATABASE blog;

-- USE blog;

CREATE TABLE `live-33_blandine_blog`.`articles` (
    `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT ,
    `title` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
    `body` TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
    `user_id` INT(11) UNSIGNED NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    PRIMARY KEY (`id`)
    ) ENGINE = InnoDB CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;


INSERT INTO `articles` (`id`, `title`, `body`, `created_at`)
VALUES (NULL, 'mon super titre', 'Let me tell you the approach i used', CURRENT_TIMESTAMP);


-- Creer un champ updated_at, et comparer les dates created_at et updated_at
ALTER TABLE articles ADD COLUMN updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- https://www.w3schools.com/Sql/func_mysql_datediff.asp

SELECT DATEDIFF(created_at, updated_at) AS 'Ecart en jours' FROM articles;

-- SECELCT TIMEDIFF(time1, time2) FROM table;

SELECT TIMEDIFF(created_at, updated_at) AS 'Ecart en temps' FROM articles;


-- creer un table users

-- id INT AUTO INCREMENT PRIMARY KEY
-- nom VARCHAR 255
-- prenom VARCHAR 255
-- email VARCHAR 150
-- password VARCHAR 255
-- created_at TIMESTAMP
-- updated_at TIMESTAMP

CREATE TABLE `live-33_blandine_blog`.`users`(
    id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    nom VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    prenom VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    email VARCHAR(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    password VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
) ENGINE = InnoDB CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;


-- DROP TABLE articles;

INSERT INTO users (id, nom, prenom, email, password, created_at, updated_at)
VALUES (NULL, 'Laurent', 'neveux', 'l.neveux@icloud.com', '£12oihqsfidojcapizdùpihQSIJDFBPIJSDG', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO `articles` (`id`, `title`, `body`, `user_id`, `created_at`)
VALUES (NULL, 'mon super titre', 'Let me tell you the approach i used', 1, CURRENT_TIMESTAMP);

SELECT CONCAT(nom, ' ', prenom) AS fullname from users WHERE id = 1;
SELECT users.id, nom, title, body FROM users, articles WHERE users.id = 1 AND articles.user_id = users.id;

-- 1 La liste des bureaux (adresse et ville) triés par pays décroissant puis par état

SELECT addressLine1, addressLine2, city, state, country FROM offices WHERE state IS NOT NULL AND country IS NOT NULL ORDER BY country, state DESC;

-- 2 La liste des avions (code et nom) triés par vendeur et par quantité en stock décroissants

SELECT productCode, productName, productVendor, quantityInStock FROM products WHERE productLine = 'Planes' ORDER BY productVendor DESC, quantityInStock DESC;

-- 3 La liste des produits (nom, vendeur et prix de vente) qui sont vendus au moins 132$ triés par nom du produit

SELECT productName, productVendor, MSRP FROM products WHERE MSRP >= 132 ORDER BY productName;

-- 4 La liste des produits (code, nom, échelle et quantité) qui ont une échelle soit de 1:10, soit de 1:18 triés par quantité en stock décroissante

SELECT productCode, productName, productScale, quantityInStock FROM products WHERE productScale = '1:10' OR productScale = '1:18' ORDER BY quantityInStock DESC; 

-- 5 La liste des produits (code, nom et prix d'achat) des produits achetés au moins 60$ au plus 90$ triés par prix d'achat

SELECT productCode, productName, buyPrice FROM products WHERE buyPrice >= 60 AND buyPrice <= 90 ORDER BY buyPrice;
SELECT productCode, productName, buyPrice FROM products where buyPrice BETWEEN 60 AND 90 ORDER BY buyPrice;

-- 6 La liste des motos (nom, vendeur, quantité et marge) triés par marge décroissante

ALTER TABLE `products` ADD `margin` INT NOT NULL AFTER `MSRP`;
UPDATE products SET margin = MSRP - buyPrice;

SELECT productName, productVendor, quantityInStock, margin FROM products ORDER BY margin DESC;
SELECT productName, productVendor, quantityInStock, 
ROUND(MSRP - buyPrice), 2) AS margin FROM products 
WHERE productLine = 'Motorcycles' ORDER BY margin DESC;

-- 7 La liste des commandes (numéro de commande, date de commande, date d'expédition, écart en jours entre la date de commande et la date d'expédition, statut de la commande) soit qui sont en cours de traitement, soit qui ont été expédiées plus de 10 jours après la date de commande triés par écart décroissant puis par date de commande

SELECT orderNumber, orderDate, shippedDate, DATEDIFF(shippedDate, orderDate), status = 'Shipped' OR status = 'In Process' FROM orders ORDER BY DATEDIFF(shippedDate, orderDate), orderDate;

SELECT
    orderNumber,
    orderDate, 
    shippedDate, 
    DATEDIFF(shippedDate, orderDate) AS dayGap,
    status,
FROM orders
WHERE status = 'In Process'
OR status = 'Shipped' 
OR dayGap > 10
ORDER BY dayGap DESC, orderDate;


-- 8 La liste des produits (nom et valeur du stock à la vente) des années 1960

SELECT productName, MSRP FROM products WHERE LEFT(productName, 4) BETWEEN 1960 AND 1969;
-- 9 Le prix moyen d'un produit vendu par chaque vendeur triés par prix moyen décroissant

SELECT productVendor, AVG(MSRP) FROM products GROUP BY productVendor ORDER BY AVG(MSRP) DESC;

-- 10 Le nombre de produits pour chaque ligne de produit

SELECT COUNT(DISTINCT productName) FROM products GROUP BY productLine;
-- works but does not display productline

-- 11 Le total du stock et le total de la valeur du stock à la vente de chaque ligne de produit 
-- pour les produits vendus plus de 100$ 
-- trié par total de la valeur du stock à la vente
SELECT
    ROUND(SUM(quantityInStock), 2) AS totalProductQuantity,
    ROUND(SUM(quantityInStock * MSRP), 2) AS stockValue
    FROM products
    WHERE MSRP > 100
    GROUP BY productLine
    ORDER BY stockValue;
    
    
 -- Rémi   
SELECT
    productName,
    quantityInStock,
    ROUND((quantityInStock * MSRP), 2) AS stockValue
    FROM products
    WHERE MSRP > 100
    ORDER BY stockValue;
    
-- 12 La quantité du produit le plus en stock de chaque vendeur trié par vendeur

SELECT MAX(quantityInStock)
FROM products
GROUP BY productVendor
ORDER BY productVendor;

-- 13 Le prix de l'avion qui coûte le moins cher à l'achat

SELECT MIN(buyPrice)
FROM products
WHERE productLine LIKE '%Plane%;
-- il faut mettre LIKE et pas = car les mots composés peuvent être pris en compte

-- 14 Le crédit des clients qui ont payé plus de 20000$ durant l'année 2004 trié par crédit décroissant
-- JOIN ou INNERJOIN c'est pareil
SELECT creditLimit,
FROM customers
JOIN payments
ON customers.customerNumber = payments.customerNumber
WHERE SUM(amount) > 20000 AND payments.paymentDate LIKE '%2004%'
ORDER BY creditLimit DESC;

-- 15 La liste des employés (nom, prénom et fonction) et des bureaux (adresse et ville) dans lequel ils travaillent

SELECT 
    e.lastName,
    e.firstName,
    e.jobTitle,
    o.addressLine1,
    o.addressLine2,
    o.city
FROM employees AS e
JOIN offices AS o
ON e.officeCode = o.officeCode;


-- 16 La liste des clients français ou américains (nom du client, nom, prénom du contact et pays) et de leur commercial dédié (nom et prénom) triés par nom et prénom du contact

SELECT 
    c.customerName, 
    c.contactLastName,
    c.customerFirstName,
    e.country,
    e.lastName,
    e.firstName,
FROM customers AS c
JOIN employees AS e
ON c.salesResEmployeeNumber = e.employeeNumber
ORDER BY c.contactLastName, c.contactFirstName;


-- 17 La liste des lignes de commande (numéro de commande, code, nom et ligne de produit) et la remise appliquée aux voitures ou motos commandées triées par numéro de commande puis par remise décroissante

SELECT 
    o.orderNumber, 
    od.productCode,
    p.productName,
    p.productLine
    ROUND((p.MSRP - od.priceEach), 2) AS discount
FROM orders AS o
JOIN orderDetails AS od ON o.orderNumber = od.orderNumber
JOIN products AS p ON od.productCode = p.productCode
WHERE productLine IN ('Classic Cars', 'Vintage Cars', 'Motorcycles')
ORDER BY o.orderNumber, discount DESC;

-- 18 Le total des paiements effectués de chaque client (numéro, nom et pays) américain, allemand ou français de plus de 50000$ trié par pays puis par total des paiements décroissant

SELECT
    ROUND(SUM(p.amount), 2) AS totalPayment,
    c.country,
    c.customerName,
    c.customerNumber
FROM payments AS p
INNER JOIN customers AS c ON p.customerNumber = c.customerNumber
WHERE country IN('France', 'Germany', 'USA')
GROUP BY c.country, c.customerName, c.customerNumber
HAVING totalPayment > 50000
ORDER BY c.country, totalPayment DESC;


-- 19 Le montant total de chaque commande (numéro et date) des clients New-Yorkais (nom) trié par nom du client puis par date de commande

SELECT
    o.orderDate,
    o.orderNumber,
    ROUND(SUM(od.quantityOrdered * od.priceEach), 2) AS totalPayment
    c.customerName
    FROM orders AS o
    JOIN orderdetails AS od ON o.orderNumber = od.orderNumber
    WHERE c.city = 