<?php

try {

    $pdo = new PDO(
        'mysql:host=home.3wa.io:3307;dbname=live-33_',
        'laurentneveux',
        '9e4c1ac2NGViY2ZiMWRhMTdmNWUwNDNmNzcxMWJh0a288dde',// ici le mot de passe
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );

    $pdo->exec('set names utf8');
} catch (PDOexception $error ) {
    var_dump($error->getMessage());
}


$query = "SELECT
            productName,
            priceEach,
            quantityOrdered,
            ROUND(priceEach * quantityOrdered, 2) AS totalPrice
        FROM orderdetails
        JOIN products ON products.productCode = orderdetails.productCode
        WHERE orderNumber = {$_GET['id']}
";

$statement = $pdo->prepare($query);

$statement->execute();

$order = $statement->fetchAll(PDO::FETCH_ASSOC);

//on avertit le navigatuer qu'on va lui donner du jason
header("Content-Type: Application/json");
//transformer un tableau associatif en truc pour json
echo json_encode($order);