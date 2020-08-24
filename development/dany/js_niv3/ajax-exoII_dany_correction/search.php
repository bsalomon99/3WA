<?php

require('connect.php');

     // Recuperation du prix envoyé par JS
        
    // let data = { price : maxPrice } -> $_GET['price']
                
    $price = $_GET['price'];
    
    // double quotes pour récupérer la valeur de la variable
    //$sql = "SELECT * FROM products WHERE MSRP <= $price";
    
    // version faille injection SQL
    $sql = "SELECT *    FROM products 
                        WHERE MSRP <= ? 
                        ORDER BY MSRP ASC";
    //OU BIEN  avec simple quotes 
    //$sql = 'SELECT * FROM products WHERE MSRP <= '.$price;

    $query = $pdo->prepare($sql);
    
    $query->execute([ $price ]);

    $products = $query->fetchAll(PDO::FETCH_ASSOC);

    // serialization en JSON
    $json = json_encode($products);

    // affichage pour la transmission en AJAX
    echo $json;
?>