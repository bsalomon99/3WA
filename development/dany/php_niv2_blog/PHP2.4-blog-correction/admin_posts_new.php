<?php

include 'app/connect.php';

/*
  BONUS : vérifier les saisies

  Si problème de saisie,
  le formulaire doit être représenté avec les données validées (valeur par défaut des champs)

  Ces variables vont faciliter l'affichage
  -> éviter tests d'existence dans $_POST avant que le formulaire soit posté

*/
$titlePost     = '';
$contentPost   = '';
$categoryPost  = '';
$authorPost    = '';

// Si le formulaire est posté
if( array_key_exists('title', $_POST) ) {
  //var_dump($_POST);

  // BONUS : vérifier les saisies
  $error          = array();
  $titlePost      = $_POST['title'];
  $contentPost    = $_POST['content'];
  $categoryPost   = $_POST['category'];
  $authorPost     = $_POST['author'];

  if( empty( $_POST['title'] ) ) {
    $error['title'] = 'Le titre de l\'article est obligatoire';
  }

  if( empty( $_POST['content'] ) ) {
    $error['content'] = 'Rédiger votre article !';
  }
  else if( mb_strlen( $_POST['content'] ) > 10000 OR mb_strlen( $_POST['content'] ) < 10  ) {
    $error['content'] = "L'article doit contenir un minimum de 10 caractères et un maximum de 10000";
  }

  if( !intval( $_POST['author'] ) ) {
    $error['author'] = 'Choisir un auteur';
  }

  if( !intval( $_POST['category'] ) ) {
    $error['category'] = 'Choisir une catégorie';
  }

  if( empty($error) ) {

    // Ajout d'un article du blog.
    $query = $pdo->prepare(
    '
      INSERT INTO
          Post
          (Title, Contents, Author_Id, Category_Id, CreationTimestamp)
      VALUES
          (?, ?, ?, ?, NOW())
    ');

    $query->execute( array(
      $_POST['title'],
      $_POST['content'],
      $_POST['author'],
      $_POST['category'])
    );

    //header('Location: admin.php');

    /*
      BONUS

      On pourrait aussi rediriger sur la page show_post
      Mais il faut connaître l'id du nouvel article

      https://www.php.net/manual/fr/pdo.lastinsertid.php
      $pdo->lastInsertId(); Retourne l'identifiant de la dernière ligne insérée
    */

    $new_id = $pdo->lastInsertId();

    // Rediriger sur la page show_post
    header('Location: show_post.php?id=' . $new_id );
    exit();
  }
}

/*

  Si le formulaire n'est pas traité (non posté ou erreur)

 Requête pour récupérer les catégories et les auteurs
 afin de générer les options des listes de sélection :
  -> Proposer le choix d'une catégorie parmi toutes les catégories
  -> Proposer le choix d'un auteur parmi tous les auteurs
*/

// Récupérer les catégories depuis la table Category
// Ici, exemple d'exécution de la requête sans passer par prepare/execute
$query = $pdo->query
(
  'SELECT
        Id,
        Name
    FROM
        Category'
);

// Une fois la requête exécutée, on récupère
$categories = $query->fetchAll();
// Réinitialiser le pointer ( En cas de requêtes multiples, on peut utiliser le même objet)
$query -> closeCursor();

// Récupérer les authors depuis la table Author
$query = $pdo->query
(
  'SELECT
        Id,
        FirstName,
        LastName
    FROM
        Author'
);

// Une fois la requête exécutée, on récupère
$authors = $query->fetchAll();
// Réinitialiser le pointer
$query -> closeCursor();

$title = 'Créer un article';
$template = 'admin_posts_new';
include 'layout.phtml';
