


/*PHP1.1 - Traducteur
Enoncé

Créer un programme avec un formulaire permettant de traduire des mots français vers de l'anglais et inversement.
Consignes
PHTML

Dans l'en-tête du template :

    Ajouter un titre au programme : "Traducteur Anglais - Français".

Dans la partie principale du template :

    Si le programme a démarré il n'y a pas de résultat, il faut donc afficher un formulaire pour configurer le programme, 
    sinon il faut afficher le résultat en question.

Dans le formulaire de configuration :

    Ajouter un champ de saisie texte pour le mot (name : word).
    Ajouter une liste déroulante pour le sens de traduction (name : direction), avec deux options "français vers anglais" (value : toEnglish) 
    et "anglais vers français" (value : toFrench).
    Ajouter un bouton de soumission du formulaire pour traduire le mot saisi.
    Le formulaire déclenche une requête HTTP POST vers le programme PHP.

PHP

    Créer une fonction translate() recevant le mot et le sens de traduction en argument et construire le code de traduction à l'intérieur, le résultat est renvoyé au code appelant (le code principal).
    Dans le code principal il faut récupérer les données du formulaire et appeler correctement la fonction translate() puis afficher le template PHTML.

Remarques

    Utiliser systématiquement la syntaxte alternative PHP dans les templates PHTML, en refermant la balise PHP chaque fois en bout de ligne.
    On doit pouvoir saisir le mot en majuscules comme en minuscules.
    On doit gérer le cas où le mot demandé est inconnu.
    Il n'y a qu'une seule variable contenant l'ensemble du dictionnaire, comment le construire ?
    Que se passe-t'il en PHP si le formulaire déclenche une requête HTTP GET ? Quel intérêt de faire un formulaire en HTTP GET ?*/
    
    
    
//$dictionnary = [
//    'chat' => 'cat',
//    'chien' => 'dog',
//    'laurent' => 'superman'
//];

// Formulaire method POST action data.php => recuperer le contenu de post dans ce fichier
//  input -> ajouter un champ de saisie texte pour le mot (name : word).
// select - > avec deux options "français vers anglais" (value : toEnglish) 
// button type submit


// -2 fonction translate
// - verifie le langage vers lequel on doit traduire

// - envoie un resultat


// quand on a un resultat, on l'affiche

<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/style.css" type="text/css" />
    <title>Translator</title>
</head>
<body>
    
    <h1>Translator</h1>
    
    <section>
        
        
        
        <form method="POST" action="data.php" id="word">
        <ul>
            <li>
                <input type="text" name="word" placeholder="mot à traduire" />
                
            </li>
            <li>
                <select name="direction" >
                    <option value="toEnglish">Traduire en anglais</option>
                    <option value="toFrench">Traduire en francais</option>
                </select>
            </li>
            
            <li>
                <input value="submit" type="submit">
            </li>
        </ul>
        </form>
    
    </section>
 </body>
 </htlm>
    