'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/
// Pour représenter un lancer de dés, nous noterons nDx, où n est le nombre de dés à lancer, x le nombre de faces de chacun des dés. 
// Par exemple 2D6 représente un lancer de 2 dés à 6 faces.
function lancerDeDes(nbrDes, nbrFaces) {
    let resultat = 0;
    let min = 1;
    
    for(let i = 0; i < nbrDes; i++) {
        resultat += parseInt(getNumberBetween(min, nbrFaces));
    }
    
    return resultat;
}

// Generer un nombre en min et max
function getNumberBetween(min, max) {
    return parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
}

// 	Calcul de l'initiative : chaque personnage lance 10Des a 6 faces. 
function determineInitiative() {
    // determiner initiative de chacun
    do {
        player.initiative = lancerDeDes(10, 6);
        dragon.initiative = lancerDeDes(10, 6);    
    } while(player.initiative === dragon.initiative);
    
    
    // si dragon initiativ > player
    //      dragon commence
    // sinon
    //      player commence
    let initiative = 'player';
    
    if(dragon.initiative > player.initiative) {
        initiative = 'dragon'
    } 
    
    return initiative;
}