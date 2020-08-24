<?php


    require('connect.php');
    
    $id = $_GET['id'];
    
    $sql = "DELETE FROM comments WHERE article_id = ? ;
            DELETE FROM articles WHERE id = ?";
    
    
    $query = $pdo->prepare($sql);
    
    $query->execute([ $id, ]);
    
    header('Location: admin.php');



    // au lieu de faire 2 requetes, on aurait pu n'en utiliser qu'une seule
    // si la relation de la clé etrangere entre comments et articles
    // avait la proprieté ON DELETE : CASCADE
    
?>