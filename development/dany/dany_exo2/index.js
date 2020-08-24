/*Exo 2 : Jeu : Deviner un chiffre

L'ordinateur choisit un nombre au hasard, entre 1 et 1000

Le but est de deviner ce nombre. À chaque fois qu'on propose un nombre, on indique si le nombre à deviner est plus petit ou plus grand que celui-ci.

Le programme s'arrête lorsque l'utilisateur à trouvé le nombre et affiche ensuite le nombre de tentative

protip : Utiliser un prompt pour demander le chiffre. 

Afficher le message plus + petit ou plus grand dans le prompt ou avec une alert*/


function getNumberBetween(min, max) {					
return parseInt(Math.floor(Math.random() * (max - min + 1 )) + min);					
}
let randomNumber = getNumberBetween(1, 1000);

console.log(randomNumber);
let userGuess = parseInt(window.prompt('Entrez un nombre entre 1 et 1000'));

let guessCount = 1;

function check () {
    
      
  
  
  if (userGuess === randomNumber) {
    alert('bravo, gagné');
  }
  
  else {
    if(userGuess < randomNumber) {
      alert('trop petit, recommencez');
      guessCount++;
    }
    else if(userGuess > randomNumber) {
      alert('trop grand, recommencez');
      guessCount++;
    }
  }

    
}
    
