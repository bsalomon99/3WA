<?php

include('helpers.php');

$post = cleanPost($_POST);

$handle = fopen('todolist.csv', 'a');

fputcsv($handle, $post);

fclose($handle);

header('Location: index.php');

die();