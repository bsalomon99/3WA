<?php
/*
 *  VALIDATION des données de la CHAINE DE REQUÊTE (URL)
 *
 *   Les données transmises dans la chaîne de requête (query string) sont facilement modifiables par l'internaute.
 *   Il ne faut JAMAIS leur faire confiance ! Un internaute malveillant pourrait utiliser le paramètre de la chaîne de requête
 *   pour tenter de créer une injection SQL ! C'est pourquoi il est nécessaire de valider ce paramètre.
 *
 *   On va vérifier si :
 *      -> le paramètre qu'on attend existe bien
 *      -> la valeur du paramètre est du type attendu
 *
 *   ctype_digit() vérifie si tous les caractères de la chaîne text sont des chiffres.
 *   is_numeric() détermine si une variable est un type numérique
 *
 *   ATTENTION : la valeur d'un paramètre url est toujours de type string
 *
 *   En cas de problème on va simplement rediriger l'internaute vers la page d'accueil
 */
if( !array_key_exists('id', $_GET) OR !ctype_digit($_GET['id']) ) {
  header('Location: index.php');
  exit();
}

include 'app/connect.php';

// Récupération d'un article du blog.
$query = $pdo->prepare(
'
    SELECT
        Post.Id,
        Title,
        Contents,
        DATE_FORMAT(`CreationTimestamp`, "%W %e %M %Y" ) AS DateMaj,
        DATE_FORMAT(`CreationTimestamp`, "%Y-%d-%d" ) AS DateIso,
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
    WHERE
        Post.Id = ?
');
$query->execute( array($_GET['id']) );
$post = $query->fetch();
$query->closeCursor();

// Si aucun post ne correspond à l'id passé dans l'url
if( empty($post) ) {
  header('Location: index.php');
  exit();
}

/*
  Afficher les commentaires du post
  Tous les commentaires dont la colonne Post_Id = l'id du post en cours
  ATTENTION : confusion
    Post.Id = colonne Id de la table Post
    Post_ID = colonne Post_Id de la table Comment

    Ici, on interroge la table Comment uniquement
    avec une clause WHERE :
    il faut : Comment.Post_Id = $_GET['id'] (id de l'url)
    ou : Comment.Post_Id = $post['Id'] (Id du post récupéré dans la requête précédente)
    (inutile de faire INNER JOIN avec la table Post,
    le post, on l'a déjà !)
*/
$query = $pdo->prepare(
'
    SELECT
        NickName,
        Contents,
        CreationTimestamp
    FROM
        Comment
    WHERE
        Post_Id = ?
');
$query -> execute(array( $post['Id'] ));
$comments = $query->fetchAll();
$query -> closeCursor();


// Affichage
$title = $post['Title'];
$template = 'show_post';
include 'layout.phtml';
