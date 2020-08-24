<?php


require('connect.php');

// ANALYZE

//var_dump($_GET);
//die();
// maintenant que l'on sait ... on peut les mettre dans une variable et on stoppe le code en dessous avec die() pour éviter les interférences
$orderNumber = $_GET['orderNumber'];


$req = $pdo->prepare(
                    'SELECT 
                        o.orderNumber,
                        od.quantityOrdered,
                        od.priceEach,
                        ROUND((od.quantityOrdered * od.priceEach), 2) AS totalPrice,
                        ROUND((od.quantityOrdered * od.priceEach * 20/100), 2)AS vat,
                        p.productName,
                        c.customerNumber,
                        c.customerName,
                        c.contactFirstName,
                        c.contactLastName,
                        c.addressLine1,
                        c.addressLine2,
                        c.city
                    FROM orders AS o
                    JOIN orderdetails AS od ON o.orderNumber = od.orderNumber
                    JOIN products AS p ON od.productCode = p.productCode
                    JOIN customers AS c ON c.customerNumber = o.customerNumber
                    WHERE o.orderNumber = ' . $orderNumber
                    );

$req->execute();

$order = $req->fetch(PDO::FETCH_ASSOC);



//var_dump($order);

//JOIN orderdetailscustomer ON orders WHERE orders.customerNumber = customers.customerNumber
//on ferme la connexion
$pdo = null;
//ROUND((od.quantityOrdered * od.priceEach * 20/100), 2)AS vat,
//                       SUM(od.quantityOrdered * od.priceEach) + (od.quantityOrdered * od.priceEach * 20/100) as TTC