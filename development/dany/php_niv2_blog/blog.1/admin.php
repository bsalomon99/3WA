<?php


require('connect.php');

$statement = $pdo->prepare("SELECT 
                            articles.id,
                            articles.title,
                            articles.content,
                            articles.author_id,
                            articles.category_id,
                            articles.publication_date,
                            authors.firstname,
                            authors.lastname,
                            categories.nom
                            FROM articles
                            INNER JOIN authors ON articles.author_id = authors.id
                            INNER JOIN categories ON categories.id = articles.category_id
                            ");


$statement->execute();

$articles = $statement->fetchAll(PDO::FETCH_ASSOC); 

include 'admin.phtml';
?>