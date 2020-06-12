

/*Énoncé
L'utilisateur saisit un montant HT et s'il le souhaite une remise, le résultat TTC s'affiche en HTML.

Détails
L'utilisateur doit pouvoir répondre oui ou yes à la demande de remise.
La saisie de la remise se fait en pourcentage, un nombre à virgule donc, et elle s'applique sur le montant HT autrement il y a fraude à la TVA ;-)
Si une remise est appliquée, il faut à la fin réafficher le pourcentage de remise
S'il n'y a pas de remise il faut à la fin afficher "Aucune remise n'a été appliquée"
Il faut répéter le moins de code possible, notamment il ne faut pas répéter le calcul du montant TTC final.*/



//  s'il le souhaite une remise, le résultat TTC s'affiche en HTML.
//    L'utilisateur doit pouvoir répondre oui ou yes à la demande de remise.
//    La saisie de la remise se fait en pourcentage, un nombre à virgule donc, 
//    et elle s'applique sur le montant HT autrement il y a fraude à la TVA ;-)
//    Si une remise est appliquée, il faut à la fin réafficher le pourcentage de remise
//    S'il n'y a pas de remise il faut à la fin afficher "Aucune remise n'a été appliquée"



// -- 1: creer le 'monde'
const TVA = 20.0;
const prixHT = parseFloat(prompt('Entrer un prix HT'));

const reduction = prompt('Beneficiez vous d\'une remise ?');

// chercher deux methodes: une qui convertit les caracteres en minuscule
//                            une qui convertit en majuscule

// si l'utilisateur beneficie d'une remise: Demande le pourcentage de remise.
if(reduction === 'oui'  || reduction === 'yes') {
   const remise = parseFloat(prompt('Entrer le pourcentage de remise')); 
   montantRemise = (prixHT * remise) / 100;
   prixHT = prixHT - montantRemise;
      document.write(`Le prix ttc est : ${prixTTC}.`)
} else {
    document.write('Aucune remise n\'a été appliquée.');
}

// sinon on affichera "Aucune remise n'a été appliquée"




// -- 2: le calcul
//          // calcul montant de la TVA
const montantTVA = (prixHT * TVA) / 100;

//          // calcul montant TTC
const prixTTC = (prixHT + montantTVA);





// -- 3: l'affichage
document.write('prix TTC: ' + prixTTC);
