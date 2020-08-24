<?php
    require('read.php');
?>


<!doctype html>
<html lang="fr" lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/style.css" type="text/css" />
    <title>To Do List</title>
</head>
<body>
    
    <h1>To Do List</h1>
    <form method="POST" action="todolist.php">
        <label for="task">Task</label>
        <input type="text" name="task"/>
        
        <label for="description">Description</label>
        <textarea type="text" name="description" cols="100" rows="10"/></textarea>
        
        <label for="deadline">Deadline</label>
        <input type="date" name="deadline"/>
        
        <p>
            <label for="priority">Select priority level</label><br/>
            <select name="priority" id="priority">
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
            </select>
        </p>
        
        <input type="submit" value="Submit"/>
    </form>
    

    <?php if(!empty($data)) : ?>
   
        <?php foreach($data as $todo) : ?>
            <form>      
               <ul>
                    <?php foreach($todo as $line) : ?>
                    
                        
                    <li><?= $line  ?></li>
                    
                    <?php endforeach ?>
                </ul>  
            </form> 
        
        <?php endforeach ?>
    
    <?php endif ?>
    
</body>
</html>
   