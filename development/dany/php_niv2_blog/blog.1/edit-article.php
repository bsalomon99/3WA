<?php

require('connect.php');

$title = $_POST['title'];
    $content = $_POST['content'];
    $author = $_POST['author'];
    $category = $_POST['category'];
    $id = $_POST['article_id'];

    $sql = "UPDATE articles
    SET
        title = ?,
        content = ?,
        author_id = ?,
        category_id = ?
    WHERE id = ?";

    $query = $pdo->prepare($sql);
    $query->execute([ $title, $content, $author, $category, $id]);

    header('Location: admin.php');
?>