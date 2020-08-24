
/*JS1.2 - Calculatrice Numérique
Énoncé
L'utilisateur saisit deux nombres ainsi que l'opération mathématique souhaitée, le résultat de cette opération s'affiche en HTML.

Les opérations mathématiques acceptées sont :

L'addition : a + b
La soustraction : a - b
La multiplication : a * b
La division : a / b
La puissance : a ^ b (exemple : 3 ^ 2 = 9)
Détails
Il faut afficher une erreur en cas d'opération mathématique inconnue.
Les nombres saisis peuvent être à virgule.
L'utilisateur doit pouvoir autant saisir le nom de l'opération que l'opérateur correspondant : + - * / ^
Il faut répéter le moins de code possible, notamment le code d'affichage du résultat.

*/
//créer le monde
let number2 = '';
let number1 = '';
let op = prompt('choisissez un opérateur parmi addition, soustraction, multiplication, division ou puissance');
let result = '';

//gerer erreur si pas un nombre
do {
    number1 = parseFloat(window.prompt('Saisissez un premier nombre'))
    number2 = parseFloat(window.prompt('Saisissez un deuxieme nombre'))
}
while (isNaN(number1) && isNaN(number2) === true);
    

// gerer erreur division
// si le nombre2 est egal a 0 et que operateur est egal a division ou que l'operateur === /
if(number2===0 && (op='division')){
    console.log('opération impossible')
} else {
   result = number1 / number2;

//calcul
switch(op) {
    case 'addition':
    case '+':
        result = number1 + number2;
        break;
        
    case 'soustraction':
    case '-':
        result = number1 - number2;
        break;        
    case 'multiplication':
    case '*':
        result = number1 * number2;
        break; 
    
    case 'division':
    case '/':
        result = number1 / number2;
        break; 
        
    case 'puissance':
    case '^':
        result = number1 ** number2;
        break; 
            
    default:
        result = 'erreur';
        break;
 }
 
 //Afficher le résultat
   document.write('<p>Le résultat de l\'opération est :' + result + '.</p>');


}