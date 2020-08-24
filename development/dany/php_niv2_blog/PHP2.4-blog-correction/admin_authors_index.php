<?php
include 'app/connect.php';

  /*
    Lister les Auteurs
    (Y COMPRIS LES AUTEURS SANS ARTICLE)
    et afficher le total des articles de l'auteur

    https://sql.sh/cours/jointures/right-join

  */

  $query = $pdo -> prepare
  (
  '
    SELECT
      Author.Id,
      FirstName,
      LastName,
      COUNT(Author_Id) AS Total
    FROM Post
    RIGHT JOIN
      Author ON Author.Id = Post.Author_Id
    GROUP BY Author_Id
    ORDER BY Author.Id
  '
  );

  $query->execute();
  $authors = $query->fetchAll();

  $title = 'Gestion des auteurs';
  $template = 'admin_authors_index';
  include 'layout.phtml';
