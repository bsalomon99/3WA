<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>date</title>
    </head>
    <body>
        
        <?php
            echo '<h1> Date du jour </h1>';
        $date = date('d') . "/" . date('m') . "/" . date('Y') ;   
            echo $date;
            
        echo '<h1> Today\'s date </h1>';
        $date = date('Y') . "/" . date('m') . "/" . date('d') ;   
            echo $date;
        
        ?>
        
        
    </body>
</html>
