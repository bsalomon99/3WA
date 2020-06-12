
//S1.2 - Calculatrice Numérique
//Énoncé
//L'utilisateur saisit deux nombres ainsi que l'opération mathématique souhaitée, le résultat de cette opération s'affiche en HTML.

//Les opérations mathématiques acceptées sont :

//L'addition : a + b
//La soustraction : a - b
//La multiplication : a * b
//La division : a / b
//La puissance : a ^ b (exemple : 3 ^ 2 = 9)
// L'utilisateur saisit deux nombres ainsi que l'opération mathématique souhaitée, le résultat de cette opération s'affiche en HTML.

// Créer 2 variables : nombre1, nombre2
// Créer une variable qui va stocker l'opérateur choisi : op
// Créer une variable de résultat : result
let nombre1, nombre2, op, result;

// Structure de répétition : tant que (while / do-while)
do {
    // on continu de poser les questions
    // Poser 2 questions : nombre1 ? nombre2 ?
    // Les nombres saisis peuvent être à virgule.
    nombre1 = window.prompt('Saisir le nombre 1 !')
    nombre1 = parseFloat(nombre1)
    
    nombre2 = window.prompt('Saisir le nombre 2 !')
    nombre2 = parseFloat(nombre2)

    // condition tant que les 2 variables ne sont pas des nombres
} while (isNaN(nombre1) || isNaN(nombre2))
// Fin de répétition

// Demander le choix de l'opérateur à l'utilisateur
op = window.prompt('Saisir l\'opération souhaitée !')

// Déterminer quelle opération doit être effectuée : selon le cas (switch/case)
/*Les opérations mathématiques acceptées sont :
    (L'utilisateur doit pouvoir autant saisir le nom de l'opération que l'opérateur correspondant : + - * / ^)
    
    L'addition : a + b
    La soustraction : a - b
    La multiplication : a * b
    La division : a / b (La division par zéro n'existe pas, il va falloir faire un test avec if pour tester la valeur du nombre2)
    La puissance : a ^ b (exemple : 3 ^ 2 = 9)
*/
    
switch (op) {
    case '+':
    case 'addition':
        result = nombre1 + nombre2
        break;
        
    case '-':
    case 'soustraction':
        result = nombre1 - nombre2
        break;
        
    case '*':
    case 'multiplication':
        result = nombre1 * nombre2
        break;
        
    case '/':
    case 'division':
        if (nombre2 != 0) {
            result = nombre1 / nombre2   
        } else {
            result = "La division par O est impossible, merci de réessayer !"
        }
        break;
        
    case '^':
    case 'puissance':
        result = nombre1 ** nombre2
        break;
    
    default:
        // Si opérateur est inconnu
        // Il faut afficher une erreur
        result = "L'opérateur saisi est inconnu, merci de recommencer !"
        break;
}
// Fin Switch/case


// Il faut répéter le moins de code possible
if (result != undefined) {
    // Notamment le code d'affichage du résultat. (result)
    document.write(`<p>Le résultat de l'opération est : <strong>${result}</strong></p>`)
}
