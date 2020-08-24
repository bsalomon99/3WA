<?php


require('connect.php');
require('includes/functions.php');

$id = $_GET['id'];

// selection d'un article

$sql = get_article_query();
$query = $pdo->prepare($sql);
$query->execute([ $id ]);
$article = $query->fetch();

//$statement = $pdo->prepare("SELECT
//                            articles.id,
//                            articles.title,
//                            articles.content,
//                            articles.author_id,
//                            articles.category_id,
//                            articles.publication_date,
//                            authors.firstname,
//                            authors.lastname,
//                            categories.nom 
//                            FROM articles
//                            INNER JOIN authors ON articles.author_id = authors.id
//                            INNER JOIN categories ON articles.category_id = categories.id
//                            WHERE articles.id = ?
//
//                            ");

//$statement->execute([$id]);
//$article = $statement->fetch(PDO::FETCH_ASSOC); 


// selection de tous les commentaires de l'article

$sql = " SELECT *
        FROM comments
        WHERE article_id = ?
        ";

$query = $pdo->prepare($sql);
$query->execute([ $id ]);
$comments = $query->fetchAll();



include 'detail.phtml';



//////

/////// detail.php?variable=valeur

/////// $_GET['variable']

/////// detail.php?id=5

//include "includes/database.php";

//$id = $_GET['id'];

//////// selection de tout les articles

//$sql = "
//    SELECT
//        articles.id,
//        articles.title,
//        articles.content,
//        articles.publication_date,
//        authors.firstname,
//        authors.lastname
//    FROM articles
//    INNER JOIN categories ON articles.category_id = categories.id
//    INNER JOIN authors ON articles.author_id = authors.id
//    WHERE articles.id = ?
//";

//$query = $pdo->prepare($sql);
//$query->execute([ $id ]);
//$article = $query->fetch();


//include 'detail.phtml';

//?>