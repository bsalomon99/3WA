//variables:
// var  on peut changer la valeur ou le type
// let on peut changer la valeur ou le type

// const on peut pas change de valeur ou le type
// sauf si on a un tableau: on peut muter un tableau: changer la valeur des elements. 
// ou ajouter des elements;
// ou enlever des elements

// types:
// String
let nom = ''; // string vide
let prenom = 'Laurent';
let number = 'vingt';
let number2 = '20';

// Number
let nombre = 20;
let nombre2 = 20.5;

// Object
let maillotOM = {
    nom: 'Maillot interieur 2020',
    prix: 79,
    taillesDisponible: ['M', 'XL'],
    description: 'description du maillot'
}


// Array
let tableau = [];
tableau.push('test');

tableau.push(maillotOM);
tableau[2] = 'autre chose';
console.log(tableau);

// undefined
// null
// difference entre undefined et null: 
// undefined est pas definie

// null est une valeur qui represente null // !!!! En JS null est un 'object'
console.log(typeof null);


// booleans
// true // vrai
// false // faux


// conditions:

if('si ce qu\'on teste est vrai ici') {
    // on execute le code ici
} else {
    // sinon le code ici
}


if('si ce qu\'on teste est vrai ici') {
    // on execute le code ici
} else if('si ce qu\'on teste est vrai ici') {
    // sinon si cette condition est vrai on execute le code ici
} else if('') {
    // sinon si cette condition est vrai on execute le code ici
} else {
    // si aucune des conditions est vraie, on execute le else: defaut.
}

// ASI Automatic SemiColon Insertion
let variable = 'test';
// switch
switch(variable) {
    // au cas ou la variable vaut test
    case 'test':
     // code a effectuer
        console.log(variable);
     // on coupe le code, on sort du switch
        break;
        
    case 'pas test':
     // code a effectuer
        console.log(variable);
     // on coupe le code, on sort du switch
        break;
        
    default:
        console.log('code execute par defaut');
        break;
        
}





// camel case
let nombreDeux;

// snake case
let nombre_deux;



// les boucles:
//la boucle while:

number = 0;

while(number < 10) {
    
    number++;
}


//si on veut que le code s'execute, on met le do
nombre = 10;

do {
    nombre =  parseFloat(prompt('Entre un nombre'));
} while(isNaN(nombre));

// Global Object Math
let randomNumber = Math.random(); // nombre compris entre 0 et 0.9999999999...

console.log(randomNumber);

// Math.min()
// Math.max()

// Doc: https://devdocs.io/javascript/global_objects/math
 Math.floor(Math.random());
 // Math.floor(Math.random()); === 0

Math.floor(10.9); // 10;



// Math.min()
// Math.max()
// Math.floor();
// Math.pow(); **

// Doc: https://devdocs.io/javascript/global_objects/math

// Math.floor(Math.random()); === 0

Math.floor(10.9); // 10;


Math.pow(7, 3); // === 7 ** 3


// https://devdocs.io/javascript/global_objects/string
let string = 'un test de string';

string.charAt(10);
string.length;
string.split();
string.substr(2, 5);
string.toLowerCase(); // convertit tout en minuscule
string.toUpperCase(); // convertit tout en majuscule

function ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.substr(1);
}

console.log(ucFirst(string));
// https://devdocs.io/javascript/global_objects/string

// en PHP la fonction ucFirst existe

















