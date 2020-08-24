<?php


    require('connect.php');
    include 'includes/functions.php';

    
    // recuperer l'id de l'article a modifier

    $id = $_GET['id'];

    $sql = get_article_query();

    $query = $pdo->prepare($sql);

    $query->execute([$id]);

    $article = $query->fetch();

    // liste des categories

    $sql = "SELECT * FROM categories";

    $query = $pdo->query($sql);

    $categories = $query->fetchAll();


    // liste des auteurs

    $sql = "SELECT * FROM authors";

    $query = $pdo->query($sql);

    $authors = $query->fetchAll();


    include 'edit.phtml';

//header('Location: admin.php');