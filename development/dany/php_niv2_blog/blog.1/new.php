<?php


require('connect.php');


    // liste des categories

    $sql = "SELECT * FROM categories";

    $query = $pdo->query($sql);

    $categories = $query->fetchAll();
    //$categoryList


    // liste des auteurs

    $sql = "SELECT * FROM authors";

    $query = $pdo->query($sql);

    $authors = $query->fetchAll();

	include 'new.phtml';
	
	
	

?>
