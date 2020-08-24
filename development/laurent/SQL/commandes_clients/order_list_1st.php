<?php

require('request.php');

?>
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>commandes clients</title>
    </head>
    <body>
        <h1>Liste de commandes</h1>
        
        
        <?php foreach($orders as $order) : ?>
        
            <ul>
                
            <li>Numéro de commande: <a href="order_details.php?orderNumber=<?= $order['orderNumber']  ?>"><?= $order['orderNumber']  ?></a></li>
            
            
            <li>Date de commande: <?= $order['orderDate']  ?></li>
            <li>Date de livraison: <?= $order['requiredDate']  ?></li>
            <li>Statut de la commande: <?= $order['status']  ?></li>
        </ul>
        
        <?php endforeach ?>
        
    </body>
</html>