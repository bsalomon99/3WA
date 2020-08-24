<?php

include 'app/connect.php';

/**
 * On commence par vérifier si des données sont reçues dans $_POST,
 * auquel cas cela signifie que le formulaire a été soumis.
 *
 * On enregistre alors ces données dans la base de données.
 */
if( array_key_exists('title', $_POST) ) {

    /*
     * UTILISATION DE PARAMETRES NOMMÉS DANS LA REQUÊTE
     *
     * Pour représenter un paramètre dans une requête SQL, on peut utiliser des placeholders anonymes,
     * c'est-à-dire des points d'interrogation ?, ou bien des placeholders nommés en utilisant les deux points :
     *
     * Cette seconde méthode peut être utile pour s'y retrouver si le nombre de placeholders est important
     *
     * Dans la requête sql :title est un paramètre SQL
     * Il devient la clé du tableau de paramètres passé à execute()
     *
     * array(
     * // :title
     * 'title' =>  $_POST['title'],
     * )
     *
     */
  $query = $pdo->prepare(
  '
      UPDATE
          Post
      SET
          Title = :title,
          Contents = :contents,
          Category_Id = :category,
          Author_Id = :author,
          CreationTimestamp = NOW()
      WHERE
          Id = :id
  ');

  $query->execute( array(
    'title'     => $_POST['title'],
    'contents'  => $_POST['contents'],
    'category'  => intval($_POST['category']),
    'author'    => intval($_POST['author']),
    'id'        => intval($_POST['id'])
  ));

  // Redirection vers la page de le dashboard de l'admin
  header('Location: admin_posts_index.php');
  exit();
}


/**
 * Si on arrive ici, c'est que le formulaire n'a pas été soumis
 * On va alors simplement l'afficher.
 */

//Redirection si la paramètre URL n'est pas conforme
if( !array_key_exists('id', $_GET) OR !ctype_digit($_GET['id']) ) {
  header('Location: admin_posts_index.php');
  exit();
}

/*
  Si le formulaire n'est pas posté :
  Récupération des données de l'article
  afin de les afficher dans le formulaire

  puis récupération des auteurs et des catégories
  afin de construire les listes de sélection
  (on peut vouloir modifier la catégorie)
*/

$query = $pdo->prepare(
'
    SELECT
        Post.Id,
        Title,
        Contents,
        Category_Id,
        Author_Id
    FROM
        Post
    WHERE
        Post.Id = ?
');
$query ->execute( array($_GET['id']) );
$post = $query->fetch();
$query->closeCursor();

// Redirection si aucun post ne correspond à l'id passé dans l'url
if( empty($post) ) {
  header('Location: admin_posts_index.php');
  exit();
}

// Récupérer les catégories depuis la table Category
$query = $pdo->query
(
  'SELECT
        Id,
        Name
    FROM
        Category'
);

$categories = $query->fetchAll();
$query->closeCursor();

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

$authors = $query->fetchAll();
$query->closeCursor();

$title = 'Modifier un article';
$template = 'admin_posts_edit';
include 'layout.phtml';
