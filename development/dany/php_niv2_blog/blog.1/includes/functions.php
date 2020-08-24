<?php

    function get_article_query()
    {
        $sql = 'SELECT
            articles.id,
            articles.title,
            articles.content,
            articles.publication_date,
            articles.author_id,
            articles.category_id,
            authors.firstname,
            authors.lastname,
            categories.nom
        FROM articles
        INNER JOIN categories ON articles.category_id = categories.id
        INNER JOIN authors ON articles.author_id = authors.id
        WHERE articles.id = ?';

        return $sql;
    }
?>