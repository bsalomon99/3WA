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
            <li>Numéro du client : <?= $customer['customerNumber']  ?></li>
            <li>Nom du client : <?= $customer['customerName']  ?></li>
            <li>Nom et prénom du contact :  <?= $customer['contactFirstName'] ?> <?= $customer['contactLastName'] ?></li>
            <li>Adresse 1 : <?= $customer['addressLine1']  ?></li>
            <li>Adresse 2 : <?= $customer['addressLine2']  ?></li>
            <li>Ville : <?= $customer['city']  ?></li>
            
        </ul>
        
        <table>
            <caption>Récapitulatif commande</caption>
            <tr>
                
                <th>Nom du produit</th>
                <th>Quantité commandée</th>
                <th>Prix unitaire</th>
                <th>Sous total</th>
            </tr>
            <?php foreach($order as $ord) : ?>
                <tr>
                    
                    <td><?= $ord['productName']  ?></td>
                    <td><?= $ord['quantityOrdered']  ?></td>
                    <td><?= $ord['priceEach']  ?></td>
                    <td><?= $ord['totalPrice']  ?></td>
                </tr>
            <?php endforeach ?>
            <?php foreach($invoice as $inv) : ?>
                <tr>
                    <td colspan="3">Montant Total HT</td>
                    <td><?= $inv['totalHT']  ?></td>
                    
                </tr>
            <?php endforeach ?>
            
            <?php foreach($totalvat as $vat) : ?>
                <tr>
                    <td colspan="3">TVA (20%)</td>
                    <td><?= $vat['totalVAT']  ?></td>
                </tr>
            <?php endforeach ?>
            
            <?php foreach($totalttc as $total) : ?>
                <tr>
                    <td colspan="3">Montant Total TTC</td>
                    <td><?= $total['totalHT'] + $total['totalVAT']   ?></td>
                </tr>
            <?php endforeach ?>
        </table>
            
    </body>
</html>
