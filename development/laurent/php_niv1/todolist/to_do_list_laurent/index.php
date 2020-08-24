<?php
    require('read.php');
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
    <link rel="stylesheet" href="index.css">
    <title>Todolist</title>
</head>
<body>
    <div class="container">
        <h2>Task Manager</h2>
        <div class="button-container">
            <button>Ajouter une tache</button>
            <form action="delete.php" method="POST">
                <button>Effacer toutes les taches</button>
            </form>
        </div>
        <div class="form-container">
            <form class="js-selector" action="add.php" method="POST">
                <input type="text" name="title" placeholder="title">
                <textarea name="description" id="" cols="50" rows="10"  placeholder="description"></textarea>
                <input type="date" name="deadline"  placeholder="deadline">
                <select name="priority" id="">
                    <option value="high">high</option>
                    <option value="normal">normal</option>
                    <option value="low">low</option>
                </select>

                <button type="submit">Submit</button>
            </form>
        </div>

        <div class="task-container">
            <table>
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Description</th>
                        <th>Deadline</th>
                        <th>Priorite</th>
                        <th>Fini ?</th>
                        <th>Effacer</th>
                        <th>Modifier</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach($data as $index => $todo) : ?>
                        <tr data-index="<?= $index ?>">
                            <?php foreach($todo as $line) : ?>
                                <!----><td data-index="<?= $index ?>"><p><?= $line  ?></p></td><!---->
                            <?php endforeach ?>

                            <td>
                                <button data-index="<?= $index ?>">
                                    <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-pen" fill="green"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.707 13.707a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391L10.086 2.5a2 2 0 0 1 2.828 0l.586.586a2 2 0 0 1 0 2.828l-7.793 7.793zM3 11l7.793-7.793a1 1 0 0 1 1.414 0l.586.586a1 1 0 0 1 0 1.414L5 13l-3 1 1-3z"/>
                                        <path fill-rule="evenodd" d="M9.854 2.56a.5.5 0 0 0-.708 0L5.854 5.855a.5.5 0 0 1-.708-.708L8.44 1.854a1.5 1.5 0 0 1 2.122 0l.293.292a.5.5 0 0 1-.707.708l-.293-.293z"/>
                                        <path d="M13.293 1.207a1 1 0 0 1 1.414 0l.03.03a1 1 0 0 1 .03 1.383L13.5 4 12 2.5l1.293-1.293z"/>
                                    </svg>
                                </button>
                            </td>
                            <td>
                                <form action="deleteOneTask.php" method="POST">
                                    <input type="hidden" name="taskId" value="<?= $index ?>"/>
                                    <button type="submit">
                                        <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-dash-circle-fill" fill="red" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4 7.5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H4z"/>
                                        </svg>  
                                    </button>
                                </form>
                            </td>
                            <td>
                                <form action="edittask.php" method="POST">
                                    <input type="hidden" name="taskEdit" value="<?= $index ?>"/>
                                    <button type="submit"><i class="fas fa-pen"></i>
                                        
                                    
                                    </button>
                                </form>
                            </td>
                        </tr>
                    <?php endforeach ?>
                </tbody>
            </table>
        </div>
    </div>

    <script src="index.js"></script>
</body>
</html>