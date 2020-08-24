<?php

try {

    $pdo = new PDO(
      'mysql:host=home.3wa.io:3307;dbname=live-33_blandine_models',
      'blandine',
      '4e2aadedNDA0ODE3MTg0NmExNzM0YmFjODlmYzNh90b73373',
      [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
);

    $pdo->exec('set names utf8');
} catch (PDOexception $error ) {
    var_dump($error->getMessage());
}


//je me connecte à MySQL via PDO sur la base live-33_blandine_models
//$pdo = new PDO(
//      'mysql:host=home.3wa.io:3307;dbname=live-33_blandine_models',
//      'blandine',
//      '4e2aadedNDA0ODE3MTg0NmExNzM0YmFjODlmYzNh90b73373',
//      [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
//);

//$pdo->exec('set names utf8');
