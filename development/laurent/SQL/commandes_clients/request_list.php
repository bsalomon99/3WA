<?php


require('connect.php');



    
$statement = $pdo->prepare("SELECT * FROM orders");

$statement->execute();

//on rajoute (PDO::FETCH_ASSOC pour ne pas avoir double index, pour avoir uniquement un tableau associatif)
$orders = $statement->fetchAll(PDO::FETCH_ASSOC);    



//on ferme la connexion
$pdo = null;
