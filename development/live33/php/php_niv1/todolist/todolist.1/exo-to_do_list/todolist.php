<?php

require('helpers.php');



// nettoyer le post
$post = cleanPost($_POST);



// https://www.php.net/manual/fr/function.fopen (ouvre un fichier (une ressource) existant ou le crée s'il n'existe pas)
//mode a+ Ouvre en lecture et écriture 
$handle = fopen('todolist.csv', 'a+');

// https://www.php.net/manual/fr/function.fputcsv.php
fputcsv($handle, $post);

//https://www.php.net/manual/fr/function.fclose.php
fclose($handle);


// https://www.php.net/manual/en/function.header
// redirection je soumets vers todolist.php ensuite j'ai une page blanche
// donc je redirige vers index.php
header('Location: index.php');

