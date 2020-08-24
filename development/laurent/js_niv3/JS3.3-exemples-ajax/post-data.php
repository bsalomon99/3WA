<?php

// Validation des données reçues dans le corps de la requête
if(!array_key_exists('data', $_POST) || !isset($_POST['data'])){
    return false;
}

$course = $_POST['data'];

// Ouverture en écriture / création du fichier de courses
$file = fopen('courses.txt', 'a');

// Ajout de la nouvelle course à la fin du fichier
fwrite($file, $course.PHP_EOL); // PHP_EOL : Caractère spécial de retour à la ligne en fonction de l'environnement de PHP

// Fermeture du fichier
fclose($file);

/**
 * On retourne au client le contenu du fichier
 * Pour cela on récupère d'un coup chaque ligne dans un tableau grâce à la fonction file()
 * https://www.php.net/manual/fr/function.file
 *
 * On sérialise ensuite le tableau obtenu en JSON
 */
$courses = file('courses.txt');

/**
 * Suppression des caractères spéciaux de retour à la ligne grâce à la fonction trim()
 * qui supprimer tous les caractères invisibles en début et fin de chaîne
 */
$courses = array_map('trim', $courses);

echo json_encode($courses);