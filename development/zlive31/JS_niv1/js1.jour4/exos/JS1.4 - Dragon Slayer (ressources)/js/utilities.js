'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/
/**
 * Générer un aléatoire en fonction de 2 valeurs (min, max)
 * @param int min
 * @param int max
 * @return int
 */
function getRand(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

/**
 * Générer un lancé de dé en fonction de 2 valeurs (nbDices, nbFaces)
 * @param int nbDices
 * @param int nbFaces
 * @return int
 */
function throwDices(nbDices, nbFaces) {
  // Valeur par defaut de la somme des dés (0)
  let sum = 0;
  
  // Répétition du nombre de lancés
  for (let index = 0; index < nbDices; index++) {
      sum = sum + getRand(1, nbFaces); // Long
      //sum += getRand(1, nbFaces); // Short
  }
  
  // Retour de la somme des dés lancés
  return sum;
}

// Exemple de function qui pourrait servir pour poser les 2 questions (level, rôle)
/**
 * Retourne un chiffre compris entre les bornes min, max, correspondant à la question posée
 * @param string message
 * @param int min
 * @param int max
 * @return int requestInteger
 */
function requestInt(message, min, max) {
  let requestInteger;
  
  do {
    requestInteger = parseInt(prompt(message))
    
  } while (isNaN(requestInteger) || requestInteger < min || requestInteger > max);
  
  return requestInteger; 
}


