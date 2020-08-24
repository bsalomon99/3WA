<?php

require('request_list.php');

?>
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>commandes clients</title>
        <link rel="stylesheet" href="style1.css">
    </head>
    <body>
        <h1>Liste de commandes</h1>
        
        <table>
            <tr>
                <th>Numéro de commande</th>
                <th>Date de commande</th>
                <th>Date de livraison</th>
                <th>Statut de la commande</th>
            </tr>
            <?php foreach($orders as $order) : ?>
            <tr>
                <td><a href="order_details.php?orderNumber=<?= $order['orderNumber']  ?>"><?= $order['orderNumber']  ?></a></td>
                <td><?= $order['orderDate']  ?></td>
                <td><?= $order['requiredDate']  ?></td>
                <td><?= $order['status']  ?></td>
            </tr>
            <?php endforeach ?>
        </table>
        
</body>
</html>
