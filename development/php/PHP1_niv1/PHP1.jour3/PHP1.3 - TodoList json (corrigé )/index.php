<?php

// --------------------------------------------------------------------------------------
// DEPENDANCES
// --------------------------------------------------------------------------------------

include 'utilities.php';



// --------------------------------------------------------------------------------------
// CODE PRINCIPAL
// --------------------------------------------------------------------------------------

// Récupération de la date du jour.
$now = date_create();
// var_dump($now);

// Récupération de toutes les tâches.
$tasks = loadTasks();



// --------------------------------------------------------------------------------------
// TEMPLATE
// --------------------------------------------------------------------------------------

// Chargement du template.
include 'index.phtml';