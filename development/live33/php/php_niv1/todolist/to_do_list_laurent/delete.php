<?php

$handle = fopen('todolist.csv', 'w');

$data = [];
foreach($data as $taskData) {
    fputcsv($data, $taskData);
}

header('Location: index.php');