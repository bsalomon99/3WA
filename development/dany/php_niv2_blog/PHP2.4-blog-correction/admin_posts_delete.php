<?php
/*
  Supprimer le post
  dont l'Id est stocké dans le paramètre URL id : $_GET['id']

  BONUS
  Prévoir une confirmation
    - Confirm JS
    - Boite modale (avec BOOTSTRAP, par exemple) 

*/

// Validation du paramètre id de la chaîne de requête
if( !array_key_exists('id', $_GET) OR !ctype_digit($_GET['id']) ) {
  header('Location: admin.php');
  exit();
}

// Inclusion des dépendances
include 'app/connect.php';

// Préparation de la requête
$query = $pdo->prepare(
  '
    DELETE from Post
    WHERE Id = ?
  '
);

// Exécution de la requête de suppression
$query->execute( array($_GET['id']) );

// Redirection vers le dashboard de l'admin
header('Location: admin_posts_index.php');
exit();
