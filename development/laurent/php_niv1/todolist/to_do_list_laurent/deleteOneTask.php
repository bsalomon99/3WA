<?php



require('helpers.php');
require('read.php');

$post = cleanPost($_POST);

// enlever 1 seule tâche, connaître son index dans le tableau
$index = $post['taskId'];

array_splice($data, $index, 1);

$handle = fopen('todolist.csv', 'w');

foreach($data as $task) {
    fputcsv($handle, $task);    
}

fclose($handle);


header('Location: index.php');

die();