<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>Lotterie</title>
    </head>
    <body>
        
        <?php
            echo '<h1>' . $title . '</h1>';
            
            echo '<ul>';
            
        
            foreach($array as $num) {
                echo '<li>' . $num . '</li>';
            }
        
            echo '</ul>';
        
        ?>
        
        
        <h1><?= $title ?></h1>
        <ul> 
        <?php foreach($rules as $rule) : ?>
            <li><?= $rule ?></li>
            <?php endforeach ?>
        
        </ul>
        <ul>
            <?php foreach($array as $num) : ?>
                <li><?= $num ?></li>
            <?php endforeach ?>    
        </ul>
        
        
    </body>
</html>

