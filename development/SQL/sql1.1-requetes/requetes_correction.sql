
-- La liste des produits (code, nom, échelle et quantité)
-- qui ont une échelle soit de 1:10, soit de 1:18
-- triés par quantité en stock décroissante
-- 4
SELECT productCode, productName, productScale, quantityInStock
FROM products
WHERE productScale = '1:10'
OR productScale = '1:18'
ORDER BY quantityInStock DESC;

-- La liste des produits (code, nom et prix d'achat)
-- des produits achetés au moins 60$ au plus 90$ triés par prix d'achat*
-- 5
SELECT productCode, productName, buyPrice
FROM products
WHERE buyPrice BETWEEN 60 AND 90
ORDER BY buyPrice;


-- La liste des motos (nom, vendeur, quantité et marge)
-- triés par marge décroissante
-- 6
SELECT
    productName,
    productVendor,
    quantityInStock,
    ROUND((MSRP - buyPrice), 2) AS margin
FROM products
WHERE productLine = 'Motorcycles'
ORDER BY margin DESC;


-- La liste des commandes (numéro de commande, date de commande,
-- date d'expédition, écart en jours entre la date de commande
-- et la date d'expédition, statut de la commande)
-- soit qui sont en cours de traitement,
-- soit qui ont été expédiées
-- plus de 10 jours après la date de commande triés par écart décroissant
-- puis par date de commande

-- 7
SELECT
    orderNumber,
    orderDate,
    shippedDate,
    DATEDIFF(shippedDate, orderDate) AS dayGap,
    status
FROM orders
WHERE status = 'In Progress'
OR status = 'Shipped'
OR dayGap > 10
ORDER BY dayGap DESC, orderDate


-- La liste des produits (nom et valeur du stock à la vente) des années 1960
-- 8

SELECT productName, ROUND(MSRP * quantityInStock), 2) AS stockValue
FROM products
WHERE productName LIKE '%196%';

-- Le prix moyen d'un produit vendu
-- par chaque vendeur
-- triés par prix moyen décroissant
-- 9

SELECT ROUND(AVG(MSRP), 2) AS Prix_moyen, productVendor
FROM products
GROUP BY productVendor
ORDER BY Prix_moyen DESC;

-- Le nombre de produits pour chaque ligne de produit
-- 10
SELECT COUNT(productCode), productLine
FROM products
GROUP BY productLine;

-- Le total du stock et le total de la valeur du stock à la vente de chaque ligne de produit
-- pour les produits vendus plus de 100$
-- trié par total de la valeur du stock à la vente
-- 11

SELECT
    ROUND(SUM(quantityInStock), 2) AS totalProductQuantity,
    ROUND(SUM(quantityInStock * MSRP), 2) AS stockValue
FROM products
WHERE MSRP > 100
GROUP BY productLine
ORDER BY stockValue;

-- La quantité du produit le plus en stock de chaque vendeur trié par vendeur
--  12
-- MIN(), MAX()

SELECT MAX(quantityInStock)
FROM products
GROUP BY productVendor
ORDER BY productVendor;

-- Le prix de l'avion qui coûte le moins cher à l'achat
-- 13

SELECT MIN(buyPrice)
FROM products
WHERE productLine LIKE '%Planes%';

-- Le crédit des clients qui ont payé plus de 20000$
-- durant l'année 2004
-- trié par crédit décroissant
-- 14

SELECT
    customers.creditLimit,
    customers.customerNumber,
    SUM(payments.amount) AS totalPayment
FROM customers
JOIN payments
ON customers.customerNumber = payments.customerNumber
WHERE payments.paymentDate LIKE '%2004%'
GROUP BY customers.customerNumber
HAVING totalPayment > 20000
ORDER BY customers.creditLimit DESC;

-- La liste des employés (nom, prénom et fonction)
-- et des bureaux (adresse et ville)
-- dans lequel ils travaillent
-- 15
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



-- La liste des clients français ou américains (nom du client, nom, prénom du contact et pays)
-- et de leur commercial dédié (nom et prénom)
-- triés par nom et prénom du contact
-- 16


SELECT
    c.customerName,
    c.contactLastName,
    c.contactFirstName,
    c.country,
    e.lastName,
    e.firstName
FROM customers AS c
JOIN employees AS e
ON c.salesRepEmployeeNumber = e.employeeNumber
ORDER BY c.contactLastName, c.contactFirstName;




La liste des lignes de commande (numéro de commande, code, nom et ligne de produit)
et la remise appliquée aux voitures ou motos commandées
triées par numéro de commande puis par remise décroissante

--  17
SELECT
    o.orderNumber,
    od.productCode,
    p.productName,
    p.productLine,
    ROUND((p.MSRP - od.priceEach), 2) AS discount
FROM orders AS o
JOIN orderdetails AS od ON o.orderNumber = od.orderNumber
JOIN products AS p ON od.productCode = p.productCode
WHERE productLine IN ('Classic Cars', 'Vintage Cars', 'Motorcycles')
ORDER BY o.orderNumber, discount DESC;

-- Le total des paiements effectués de
-- chaque client (numéro, nom et pays) américain, allemand ou français
-- de plus de 50000$
-- trié par pays puis par total des paiements décroissant

-- 18
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


-- Le montant total de chaque commande (numéro et date) des clients New-Yorkais (nom)
-- trié par nom du client puis par date de commande

-- 19
SELECT
    o.orderDate,
    o.orderNumber,
    ROUND(SUM(od.quantityOrdered * od.priceEach), 2) as totalPayment,
    c.customerName
FROM orders AS o
JOIN orderdetails AS od ON o.orderNumber = od.orderNumber
JOIN customers AS c ON o.customerNumber = c.customerNumber
WHERE c.city = 'NYC'
GROUP BY o.orderDate, o.orderNumber, c.customerName
ORDER BY c.customerName, o.orderDate;

