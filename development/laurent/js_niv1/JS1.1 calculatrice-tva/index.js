const TVA = 20.0;

const prixHT = parseFloat(prompt('entrez le montant HT'));

const montantTva = (prixHT * TVA) / 100;

const montantTTC = prixHT + montantTva;


document.write('le montant HT est : ' + prixHT + ' euros;<br> le montant de TVA est : ' + montantTva + ' euros; <br> Le prix TTC est : ' + montantTTC + ' euros.');

/*JS1.1 - Calculatrice de TVA
Énoncé
L'utilisateur saisit un montant HT, le résultat TTC s'affiche en HTML.

Détails
Le taux de TVA utilisé est le taux normal en vigueur en France, il ne bouge pas.
Il faut réafficher toutes les informations : le montant HT, le montant de TVA et le résultat TTC.
Le montant HT est un nombre à virgule (on peut saisir des centimes).


CORRIGE DE LAURENT :

//- 1 j'ai ça
 const TVA = 20.0;

// -2 QQchose se passe
const prixHT = parseFloat(prompt('Quelle est le montant HT ?'));
// L'utilisateur saisit un montant HT
// Attention au type de la donnée renvoyé par window.prompt() !
// Le montant HT est un nombre à virgule (on peut saisir des centimes).


const montantTva = (prixHT * TVA) / 100;



const montantTTC = prixHT + montantTva;
// -3 J'affiche le resultat.

// Il faut réafficher toutes les informations : le montant HT, le montant de TVA et le résultat TTC.
document.write('Votre montant TTC ' + montantTTC + ' montant HT ' + prixHT + ' Taux de TVA: ' + TVA);


document.write(`Votre montant TTC ${montantTTC}  montant HT  ${prixHT} Taux de TVA:  ${TVA}`);


*/




