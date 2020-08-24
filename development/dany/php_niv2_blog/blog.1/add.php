<?php

require('connect.php');

	 var_dump($_POST);

    // name des formulaire!
    $title = $_POST['title'];
    $content = $_POST['content'];
    $author = $_POST['author'];
    $category = $_POST['category'];

    var_dump($title);
    var_dump($content);
    var_dump($author);
    var_dump($category);

    $sql = "INSERT INTO articles(title, content, publication_date, category_id, author_id)
    VALUES ( ? , ? , NOW() , ? , ? )";

    $query =  $pdo->prepare($sql);

    $query->execute([ $title, $content, $category, $author ]);

    // redirection

    header('Location: home.php');

?>