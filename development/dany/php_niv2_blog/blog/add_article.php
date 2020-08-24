<?php


require('connect.php');
require('index.html');


$statement1 = $pdo->prepare("SELECT * FROM authors");

$statement1->execute();

$authors = $statement1->fetchAll(PDO::FETCH_ASSOC);    


$statement2 = $pdo->prepare("SELECT * FROM categories");

$statement2->execute();

$categories = $statement2->fetchAll(PDO::FETCH_ASSOC);    

/*
$title = $_POST["title"];
$content = $_POST["content"];
$author = $_POST["author"];
$category = $_POST["category"];


$statement3 = $pdo->prepare("INSERT INTO
                            articles (content, title, category_id, author_id)
                            VALUES ($title, $content, $author, $category)
                
                ");
                
$statement3->execute();
*/
//on ferme la connexion
header('Location: main.php');
$pdo = null;





?>
