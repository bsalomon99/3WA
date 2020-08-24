<?php



require('helpers.php');
require('read.php');

$post = cleanPost($_POST);

// enlever 1 seule tâche, connaître son index dans le tableau
$index = $post['taskEdit'];

array_push($data, $index);

$handle = fopen('todolist.csv', 'w');

foreach($data as $task) {
    fputcsv($handle, $task);    
}

fclose($handle);


header('Location: index.php');

die();