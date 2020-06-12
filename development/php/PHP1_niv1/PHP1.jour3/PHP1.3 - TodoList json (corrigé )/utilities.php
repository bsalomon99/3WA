<?php

const DATAFILE = 'tasks.json';



// --------------------------------------------------------------------------------------
// FONCTIONS
// --------------------------------------------------------------------------------------

function loadTasks()
{
    /**
     * Si le fichier existe déjà alors nous devons le recuperer pour ajouter la tache
     * Par contre si le fichier n'existe pas nous avons juste à creer un tableau vide 
     */
    if (file_exists(DATAFILE)) 
    {
        // Récuperation du tableau existant
        $file = file_get_contents(DATAFILE, true);

        // On decode le format json pour pouvoir passer à un format manipulable en php.
        $tab = json_decode($file);
    } 
    else 
    {   
        // création d'un tableau vide 
        $tab =[];
    }

    // La fonction retourne le tableau $task
	return $tab;
}

function saveTask(array $task)
{
    /**
     * Si le fichier existe déjà alors nous devons le recuperer pour ajouter la tache
     * Par contre si le fichier n'existe pas nous avons juste à creer un tableau vide 
     */
    if (file_exists(DATAFILE)) 
    {
        // Récuperation du tableau existant
        $file = file_get_contents(DATAFILE, true);

        // On decode le format json pour pouvoir passer à un format manipulable en php.
        $tab = json_decode($file);
    } 
    else 
    {   
        // création d'un tableau vide 
        $tab =[];
    }

    // On ajoute la nouvelle tache au tableau 
    array_push($tab, $task);

    // On encode le fichier au format json
    $jsonData = json_encode($tab);

    // On remplit le fichier json en inserant les taches 
    file_put_contents(DATAFILE, $jsonData);

}

function saveTasks(array $tasks)
{
	// Création d'un nouveau tableau de tâches vide qui va venir écraser l'ancien tableau.
    $tab =[];

    // Boucle qui va ajouter chaque taches restante au nouveau tableau.
	foreach($tasks as $taskData)
	{
        // On ajoute la nouvelle tache au tableau 
        array_push($tab, $taskData);
	}


    // On encode le fichier au format json
    $jsonData = json_encode($tab);

    // On remplit le fichier json en inserant notre tableau $tab
    file_put_contents(DATAFILE, $jsonData);
}


function saveTasks2(array $tasks) // version simplifiée 
{
    // On encode le fichier au format json
    $jsonData = json_encode($tasks);

    // On remplit le fichier json en inserant notre tableau $tab
    file_put_contents(DATAFILE, $jsonData);
}