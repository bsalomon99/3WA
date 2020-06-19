'use strict';   // Mode strict du JavaScript
/*Enoncé
Demander à l'utilisateur de saisir obligatoirement un nombre quoiqu'il arrive, afficher ce nombre ensuite en HTML.

Détails
On peut saisir un nombre entier comme un nombre à virgule.*/

 //Creer le monde
let userChoice = '';

//action
do {
  userChoice = parseFloat(prompt('enter a number'));
}
while (isNaN(userChoice) === true);

//affichage
console.log(userChoice);
/*
let userChoice = parseFloat(prompt('entrez un nombre'));

if (isNaN(userChoice) === true) {
    document.write('You did no enter a number. Please try again.');
    prompt('entrez un nombre');
}
else {
    document.write(`your number is: ${userChoice}.`);
}
*/