//JS1.3 - Table des Multiplications
//Énoncé
//construire une table des multiplications en JavaScript puis l'afficher en HTML.

//Détails
//Demander à l'utilisateur de saisir la taille de la table des multiplications (exemple : si on saisit 10 il faut faire une table de 1 à 10).
//Il faut utiliser les balises HTML de tableaux pour construire l'affichage.
//Pour l'affichage, lorsque le nombre est multiplié par lui-même (1x1, 2x2, 3x3, etc.), la cellule du tableau HTML doit s'afficher d'une autre couleur que les autres cellules. La solution doit être en CSS.
//Rappels
//Rien de mieux qu'une boucle pour initialiser un tableau...

let tableSize = parseInt(window.prompt('Choisissez la taille de la table de multiplications, càd entrez un nombre entier:'));
let row
let col


for (let row = 1; row < tableSize.length; row++)
{
    for (let col = 1; col < tableSize; col++)
    {
     tableSize += (row*col)+ ' ';
    }
}

