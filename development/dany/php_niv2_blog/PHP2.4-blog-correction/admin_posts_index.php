<?php
include 'app/connect.php';

/*
 Récupération de tous les articles du blog classés par id inversé.

 Fonction utile pour afficher la date
 https://sql.sh/fonctions/date_format
 Donner un nom à la colonne : https://sql.sh/cours/alias
*/
$query = $pdo -> prepare(
'
    SELECT
        Post.Id,
        Title,
        Contents,
        DATE_FORMAT(`CreationTimestamp`, "%e/%d/%Y" ) AS DateMaj,
        FirstName,
        LastName,
        Name
    FROM
        Post
    INNER JOIN
        Author
    ON
        Post.Author_Id = Author.Id
    INNER JOIN
        Category
    ON
        Post.Category_Id = Category.Id
    ORDER BY
        Post.Id DESC
');


$query->execute();

$posts = $query->fetchAll();

/*
  BONUS : Afficher le nombre total d'articles
*/

$countPost = $query->rowCount();


$title = 'Administration du blog';
$template = 'admin_posts_index';
include 'layout.phtml';
