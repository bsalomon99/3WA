<?php


require('connect.php');

$orderNumber = $_GET["orderNumber"];

//déclarer une variable 
$req = $pdo->prepare('SET @TVA = 20 / 100 ');
$req->execute();

$statement = $pdo->prepare("SELECT
                            productName,
                            priceEach,
                            quantityOrdered,
                            ROUND(priceEach * quantityOrdered, 2) AS totalPrice
                            FROM orderdetails
                        JOIN products ON products.productCode = orderdetails.productCode
                        WHERE orderNumber = $orderNumber
                    ");

$statement->execute();

$order = $statement->fetchAll(PDO::FETCH_ASSOC);


$statement2 = $pdo->prepare("SELECT
                            customers.customerNumber,
                            customerName,
                            contactLastName,
                            contactFirstName,
                            addressLine1,
                            addressLine2,
                            city
                        FROM customers
                        INNER JOIN orders ON orders.customerNumber = customers.customerNumber
                        WHERE orderNumber = $orderNumber
                    ");


$statement2->execute();

$customer = $statement2->fetch(PDO::FETCH_ASSOC);




$statement3 = $pdo->prepare("SELECT *,
                            (SELECT (priceEach * @TVA)) AS taxes,
                            (SELECT(quantityOrdered * priceEach)) AS linePrice,
                            (SELECT(linePrice * @TVA)) AS lineTVA,
                            (SELECT(linePrice + lineTVA)) AS lineTTC
                           FROM orderdetails 
                           WHERE orderNumber = $orderNumber
                            ");

$statement3->execute();
$boo = $statement3->fetchAll(PDO::FETCH_ASSOC);


$statement4 = $pdo->prepare("SELECT 
                            ROUND(SUM(orderdetails.quantityOrdered * orderdetails.priceEach), 2) AS totalHT
                            FROM orderdetails
                            WHERE orderNumber = $orderNumber
                            ");
  
$statement4->execute();
$invoice = $statement4->fetchAll(PDO::FETCH_ASSOC); 

$statement5 = $pdo->prepare("SELECT 
                            ROUND((SUM(orderdetails.quantityOrdered * orderdetails.priceEach) * @TVA)) AS totalVAT
                            FROM orderdetails
                            WHERE orderNumber = $orderNumber
                            ");
  
$statement5->execute();
$totalvat = $statement5->fetchAll(PDO::FETCH_ASSOC); 

$statement6 = $pdo->prepare("SELECT
                            ROUND(SUM(orderdetails.quantityOrdered * orderdetails.priceEach), 2) AS totalHT,
                            ROUND((SUM(orderdetails.quantityOrdered * orderdetails.priceEach) * @TVA)) AS totalVAT
                            FROM orderdetails
                            WHERE orderNumber = $orderNumber
                            ");
  
$statement6->execute();
$totalttc = $statement6->fetchAll(PDO::FETCH_ASSOC); 


$pdo = null;


// sous requete

//SET @TVA = 20 / 100; -- declaration de variable

//SELECT (MSRP * @TVA) AS percentage 
//FROM products 
//WHERE productCode = 'S10_1678';

//-- total par ligne de produits
//SELECT *,
//(SELECT (quantityOrdered * priceEach)) AS linePrice
//FROM orderdetails
//WHERE orderNumber = 10100;

//-- total avec avec tva (pour un produit)
//SELECT *,
//(SELECT priceEach * @TVA) as taxes,
//(SELECT (quantityOrdered * priceEach)) AS linePrice
//FROM orderdetails
//WHERE orderNumber = 10100;


//-- total avec Montant HT
//SELECT *,
//(SELECT priceEach * @TVA) AS taxes,
//(SELECT (quantityOrdered * priceEach)) AS linePrice,
//SELECT (linePrice * @TVA)) AS montantTVA,
//(SELECT (linePrice + montantTVA)) AS ligneTTC
//FROM orderdetails
//WHERE orderNumber = 10100;



//-- totalTTC
//SElECT SUM(od.quantityOrdered * od.priceEach ) AS totalHT
//FROM orderdetails AS od 
//WHERE orderNumber = 10100;

