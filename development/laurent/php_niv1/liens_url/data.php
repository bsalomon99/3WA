<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>liens url</title>
    </head>
    
    <body>
        <p>
            <?php
                
            if(isset($_GET['prenom']) && isset($_GET['nom']) && isset($_GET['glinglin']))  
            {
                $_GET['glinglin'] = (int) $_GET['glinglin'];
                
                if($_GET['glinglin'] > 0 && $_GET['glinglin'] < 50) 
                
                {
                    for($i = 0; $i < $_GET['glinglin']; $i++)
                    {
                     echo 'Bonjour' . " " . $_GET['prenom'] . " " . $_GET['nom'] . '<br>';
                    }
                }
                else
                {
                  echo 'ce glinglin là n\'est pas autorisé';
                }
            } else
            {
                echo ' il faut un nom, un prénom ET un glinglin';
            }
            
            ?>
        </p>
        
     </body>
</html>

