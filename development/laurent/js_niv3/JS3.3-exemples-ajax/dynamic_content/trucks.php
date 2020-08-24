<?php

// Connexion à la base de données
$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', '', [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
]);

// Paramétrage de la liaison PHP <-> MySQL, les données sont encodées en UTF-8.
$pdo->exec('SET NAMES UTF8');

// Construction de la requête SQL
$sql = 'SELECT productName
        FROM products
        WHERE productLine = ?';

// Préparation de la requête SQL
$query = $pdo->prepare($sql);

// Demande à PDO d'envoyer la requête à MySQL pour exécution.
$query->execute(['Trucks and Buses']);

// Récupération des résultats
$results = $query->fetchAll();

// Sérialisation JSON de la liste des contacts et envoi dans la réponse HTTP.
echo json_encode($results);
exit;
