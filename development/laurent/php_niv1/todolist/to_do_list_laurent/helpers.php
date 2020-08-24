<?php


function cleanString($string) {
    return htmlspecialchars(htmlentities($string));
}

function cleanPost($post) {
    $newPost = [];

    foreach ($post as $key => $value) {
        $newValue = cleanString($value);
        $newKey = cleanString($key);

        $newPost[$newKey] = $newValue;
    }

    return $newPost;
}