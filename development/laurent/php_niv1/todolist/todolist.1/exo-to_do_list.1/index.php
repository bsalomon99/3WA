


/*1. Ajout d'une tâche

Un formulaire permettra à tante Ursule d'ajouter de nouvelles tâches. Ce formulaire devra permettre de renseigner les informations suivantes :

    le titre de la tâche
    la description détaillée de la tâche 
    la date butoir (deadline) avant laquelle la tâche doit être terminée 
    la priorité de la tâche (son importance) : basse, normale ou haute

2. Affichage de la liste des tâches

Les tâches seront affichées sous forme de liste de la manière suivante :

    Le titre de la tâche est affiché
    La description apparaît seulement au survol du titre par la souris
    La couleur du titre renseigne sur la priorité de la tâche : - Priorité basse : en vert - Priorité normale : en noir - Priorité haute : en rouge
    Si la date butoir de la tâche est dépassée, les mots "EN RETARD" s'afficheront après le titre de la tâche

3. Suppression des tâches*/

<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/style.css" type="text/css" />
    <title>To Do List</title>
</head>
<body>
    
    <h1>To Do List</h1>
    
    <section>
        
        
        
        <form method="POST" action="data.php" id="word">
        
            <label for="task">Task</label>
            <input type="text" name="task" placeholder="task to do" />
       
            <label for="description">Description</label>
            <textarea name="description" id="description" placeholder="task details"></textarea> 
            
        
            <label for="deadline">Deadline</label>
            <input type="date" name="deadline" />
            
       
            <label for="priority">choose priority level</label>
            <select name="priority" id="priority">
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
            </select>
            
            <input type="submit" value="Submit" >
            
        </form>
    
    </section>
 </body>
 </htlm>
    