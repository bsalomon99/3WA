<?php
require('request_details.php');
?>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>order details</title>
        <link rel="stylesheet" href="style1.css">
    </head>
    <body>
        <h1>Détails de la commande</h1>
        
    
        <ul>
            <li>Numéro du client : <?= $order['customerNumber']  ?></li>
            <li>Nom du client : <?= $order['customerName']  ?></li>
            <li>Nom et prénom du contact :  <?= $order['contactFirstName'] ?>  <?= $order['contactLastName'] ?></li>
            <li>Adresse 1 : <?= $order['addressLine1']  ?></li>
            <li>Adresse 2 : <?= $order['addressLine2']  ?></li>
            <li>Ville : <?= $order['city']  ?></li>
            
        </ul>
        
        <table>
            <caption>Récapitulatif commande</caption>
            <tr>
                
                <th>Nom du produit</th>
                <th>Quantité commandée</th>
                <th>Prix unitaire</th>
                <th>Sous total</th>
            </tr>
            
            <tr>
                
                <td><?= $order['productName']  ?></td>
                <td><?= $order['quantityOrdered']  ?></td>
                <td><?= $order['priceEach']  ?></td>
                <td><?= $order['totalPrice']  ?></td>
            </tr>
            
            <tr>
                <td colspan="3">Montant Total HT</td>
                <td>Result Montant Total HT</td>
            </tr> 
            <tr>
                <td colspan="3">TVA (20%)</td>
                <td><?= $order['vat']  ?></td>
            </tr>
            <tr>
                <td colspan="3">Montant Total TTC</td>
                <td><?= $order['totalPrice']  ?></td>
            </tr>
        </table>
            
    </body>
</html>
