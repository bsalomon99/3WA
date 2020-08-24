<?php
include 'app/connect.php';

/*
  Ajout d'un commentaire à un article du blog.
  L'id du post a été stocké dans un champ caché du Formulaire
    -> $_POST['postId']
  afin de pouvoir être récupéré une fois le formulaire posté
  car, à ce moment là, on perd le paramètre de l'url
*/
$query =
'
    INSERT INTO
        Comment
        (NickName, Contents, Post_Id, CreationTimestamp)
    VALUES
        (?, ?, ?, NOW())
';
$resultSet = $pdo->prepare($query);
$resultSet->execute( array(
  $_POST['pseudo'],
  $_POST['comment'],
  $_POST['postId']
));

/*
  Retour à show_post une fois que le nouveau commentaire a été ajouté.
  Il faut reconstruire l'url avec le paramètre attendu 
*/
header('Location: show_post.php?id='.$_POST['postId']);
exit();
