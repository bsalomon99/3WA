/* Chifoumi
// L'utilisateur saisit le mot pierre, feuille ou ciseau, l'ordinateur choisit aléatoirement l'une des trois possibilités, et la partie commence
// Poser la question à l'utilisateur, la réponse doit être comprise entre ces 3 choix (mot pierre, feuille ou ciseaux)
// Convertir le choix du user en minuscule/Majuscule// Déclaration une constante qui va stocker les choix possibles// Générer le choix du pc, via le tableau des choix et un aléatoire provenant de Math.random()// Test si le choix du user est correct, sinon repeat// Logique du jeu
// Si le joueur et l'ordinateur font le même choix
// on obtient une égalité.
// Sinon
// if else if soit switch 2// Détails// Rappels/*
Le ciseau est écrasé par la pierre (la pierre gagne, le ciseau perd).
La feuille est découpée par le ciseau (le ciseau gagne, la feuille perd).
La pierre est enveloppée par la feuille (la feuille gagne, la pierre perd).
.*/
let player, computer;

do {
player = window.prompt('choisissez entre pierre, feuille ou ciseaux');
player.toLowerCase(); 
} while (player != 'ciseaux' && player!= 'feuille' && player != 'pierre');

let random = Math.floor(Math.random() * 3);
//computer = choix[random];

if(random == 0) {          
    computer = 'feuille';
}
else if(random == 1) {    
    computer = 'ciseaux';
}
else {                       
    computer = 'pierre';
}

document.write(`player has chosen ${player}. `);
document.write(`computer has chosen ${computer}. `);

if(computer == player) {
    document.write('il y a égalité');
    
} else {
    switch(computer) {
        case'pierre':
        if(player == 'ciseaux') {
            document.write('perdu, la pierre écrase les ciseaux. ');
        } else {
            document.write('gagné, la feuille enveloppe la pierre. ');
        } break;
            
        case'feuille':
        if(player == 'ciseaux') {
            document.write('gagné, les ciseaux coupent la feuille. ');
        } else {
            document.write('perdu, la feuille enveloppe la pierre. ');
        } break;
        
        case'ciseaux':
        if(player == 'pierre') {
            document.write('gagné, la pierre écrase les ciseaux. ');
        } else {
            document.write('perdu, les ciseaux coupent la feuille. ');
        } break;  
        
        default:
        document.write('erreur, please try again');
        break;
        
    }
}
