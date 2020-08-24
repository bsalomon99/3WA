<?php


$handle = fopen('todolist.csv', 'r');

// https://www.php.net/manual/fr/function.fgetcsv.php (en mode lecture uniquement)
// while pour lire ce qu'il y a dans le fichier
$data = [];
// on déclare une variable line qui va nous retourner la première ligne du fichier
// tant qu'il y a des lignes tu lis le fichier, à stocker dans un tableau
while($line = fgetcsv($handle)) {
    $data[] = $line;
}