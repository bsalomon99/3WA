<!--PHP1.1 - Loterie-->

<!--Loterie-->
<!--Enoncé-->

<!--Nous avons décidé d'organiser une loterie virtuelle ! 
Pour cela nous devons développer un programme capable d'effectuer un tirage. 
Un tirage est une suite de 6 nombres distincts (pas de doublons) ordonnés de manière croissante, 
générés aléatoirement et compris entre 1 et 49.-->

<!--Ce tirage sera ensuite affiché sur une page web. -->


<!--Conseils-->
<!--Procéder par petites étapes et tester chaque étape au fur-et-à-mesure, par exemple :-->

<!--     Commencer par générer 1 nombre aléatoire compris entre 1 et 49  (peut-être existe-t-il une fonction en PHP qui répond à ce besoin)   -->
<!--     Générer ensuite 6 nombres aléatoires compris entre 1 et 49-->
<!--     Trouver un moyen d'éviter les doublons-->
<!--     Trier les 6 numéros-->
<!--     Afficher le tirage dans le code HTML-->

<!--Créer des fonctions-->

<!--PHP permet bien sûr la création de fonctions !-->

<!--Même lorsqu'il n'y a pas de répétition de code, il peut être intéressant de structurer son code en créant des fonctions pour l'organiser de manière logique ! Cela permettra également de le tester plus facilement !-->

<!--Modifié le: samedi 17 août 2019, 17:28-->

<!--function getRandomNumber (min, max) {-->
<!--    return parseInt(Math.floor(Math.random() * max - min + 1)) + min);-->


<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>Compte à rebours</title>
    </head>
    <body>
         <?php
         
            
             function randomNum($min, $max) {
                return rand($min, $max);
            }
            
            // stockage les nombres
            $tirage = [];
            
            
            function lottery($tirage = [], $i = 0) {
                $min = 1;
                $max = 49;
                $longueurTirage = 6;
                
                for($i; $i < $longueurTirage; $i++) {
                    $num = randomNum($min, $max);
                
                
                    if(in_array($num, $tirage)) {
                        echo 'same number';
                        return lottery($tirage, $i);
                    }
                
                    $tirage[] = $num;
                }
                
                return $tirage;
                
            }
            
               
            
            
            $array = lottery();
            
            echo '<ul>';
            
            foreach($array as $num) {
                echo '<li>' . $num . '</li>';
            }
            
            echo '</ul>';
            
        ?>
         
         
            // Solution
            // je tire un nombre
            
            // je verifie si il existe dans le tableau lotterie
            
            // si oui je tire un autre nombre
            
            
             // je verifie si il existe dans le tableau lotterie
             
            // if (in_array($num, $tirage, false)) {
            //$tirage_push($num);
            
            //else 
            //for($i = 0; $i < count($tirage); $i++) {
             
    
            
            //if($i <= count($tirage) {
               
             // si oui je tire un autre nombre
             
             
             //sinon je l'ajoute au tableau lotterie
             
           
           
    
         
         
         
    </body>
</html>
