console.log('ok');

// Déclaration d'une constante.
const TAUX_DE_TVA = 20.0;

// Déclaration de trois variables.
let montantHT;
let montantTTC;
let montantTVA;


// Affectation d'une valeur à une variable.
montantHT = 100;


// Incrémentation d'une variable.
montantHT++;                        // Identique à montantHT = montantHT + 1;

/* A partir de cette ligne montantHT vaut 101. */


// Décrémentation d'une variable.
montantHT--;                        // Identique à montantHT = montantHT - 1;

/* A partir de cette ligne montantHT vaut 100 de nouveau. */


// Opérations arithmétiques sur des variables et constantes.
montantTVA = montantHT * TAUX_DE_TVA / 100;
montantTTC = montantHT + montantTVA;

// Affichage du résultat directement dans la page HTML.
document.write(montantTTC);
let string = 'test belle phrase';
let string2 = '5 + 6';

console.log(string2);