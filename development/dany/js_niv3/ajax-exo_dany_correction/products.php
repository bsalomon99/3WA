<?php

require('connect.php');
//requete SQL chercher tous les produits
 $sql = "SELECT * FROM products";

    $query = $pdo->query($sql);

    $products = $query->fetchAll(PDO::FETCH_ASSOC);
    
    // serialization en JSON
    $json = json_encode($products);

    // affichage pour la transmission en AJAX
    echo $json;
?>

