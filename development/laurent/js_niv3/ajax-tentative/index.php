<?php

try {

    $pdo = new PDO(
        'mysql:host=home.3wa.io:3307;dbname=live-33_blandine_models',
        'blandine',
        '4e2aadedNDA0ODE3MTg0NmExNzM0YmFjODlmYzNh90b73373',// ici le mot de passe
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


header("Content-Type: Application/json");

echo json_encode($order);