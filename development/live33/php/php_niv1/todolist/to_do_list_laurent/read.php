<?php



$handle = fopen('todolist.csv', 'r');

$data = [];

while ($line = fgetcsv($handle)) {
    $data[] = $line;
}

fclose($handle);

