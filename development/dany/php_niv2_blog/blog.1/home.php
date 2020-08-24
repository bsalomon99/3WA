<?php


    require('connect.php');
    
    //$get = $_GET['article_id'];
    
    $statement = $pdo->prepare("SELECT 
                                    articles.id,
                                    articles.title,
                                    articles.content,
                                    articles.author_id,
                                    articles.category_id,
                                    articles.publication_date,
                                    authors.firstname,
                                    authors.lastname
                                FROM articles
                                INNER JOIN authors ON articles.author_id = authors.id
                                ");
    
    
    $statement->execute();
    
    $articles = $statement->fetchAll(PDO::FETCH_ASSOC); 

	include 'home.phtml';	
	
?>