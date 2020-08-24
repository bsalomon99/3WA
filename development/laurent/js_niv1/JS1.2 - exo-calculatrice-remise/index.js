'use strict';   // Mode strict du JavaScript

// -- 1: creer le 'monde'
const TVA = 20.0;
let prixHT = parseFloat(prompt('Entrer un prix HT'));

// chercher deux methodes: une qui convertit les caracteres en minuscule
//                            une qui convertit en majuscule
// indice: to upper case, to lower case
const reduction = prompt('Beneficiez vous d\'une remise ?').toLowerCase();

// si l'utilisateur beneficie d'une remise: Demande le pourcentage de remise.
if(reduction === 'oui' || reduction === 'yes') {
   const remise = parseFloat(prompt('Entrer le pourcentage de remise')); 
   let montantRemise = (prixHT * remise) / 100;
   prixHT = prixHT - montantRemise;
   
   document.write(`<p>Une remise, d\'un montant de ${montantRemise} euros a été appliquée.</p>`);
   // sinon on affichera "Aucune remise n'a été appliquée"

} else {
    document.write('<p>Aucune remise n\'a été appliquée. </p>');
}

// -- 2: le calcul
//          // calcul montant de la TVA
const montantTVA = (prixHT * TVA) / 100;

//          // calcul montant TTC
const prixTTC = (prixHT + montantTVA);


// -- 3: l'affichage
document.write(`<p>Le prix TTC est de ${prixTTC} euros.</p>`);