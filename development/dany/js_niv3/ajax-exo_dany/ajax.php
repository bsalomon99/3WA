<?php

require('connect.php');
//requete SQL chercher tous les produits
$statement = $pdo->prepare('SELECT * FROM products');

$statement->execute();

//stocker les résultats dans une variable
$products = $statement->fetchAll(PDO::FETCH_ASSOC);
var_dump($products);

//envoyer la variable vers js (serialiser la variable et l'afficher)
$json = json_encode($products);
echo $json;

$pdo = null;
//header('content-Type: Application.json');
//on ferme la connexion


// OU BIEN avec query:

// require('connect.php');

//$sql = 'SELECT * FROM products';
//$query = $pdo->query($sql);

//$products = $query->fetchAll(PDO::FETCH_ASSOC);

//var_dump($products)

