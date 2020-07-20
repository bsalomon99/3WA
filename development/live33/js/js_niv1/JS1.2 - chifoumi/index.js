/*JS1.2 - Chifoumi
Énoncé

L'utilisateur saisit le mot pierre, feuille ou ciseau, l'ordinateur choisit aléatoirement l'une des trois possibilités, et la partie commence !
Détails

    Le mot peut tout aussi bien être saisi en minuscules qu'en majuscules.

Rappels

    Si le joueur et l'ordinateur font le même choix on obtient une égalité.
    Le ciseau est écrasé par la pierre (la pierre gagne, le ciseau perd).
    La feuille est découpée par le ciseau (le ciseau gagne, la feuille perd).
    La pierre est enveloppée par la feuille (la feuille gagne, la pierre perd).
 
    
    
créer le monde
je récupère les infos du user
l'ordi choisit son tirage
on compare les variables

si je joueur et l'ordi dont le même choix on obtient une égalité
si(joueur === ordi){
    egalité
}

le ciseau est écrasé par la pierre
si(joueru === ciseau et ordi === pierre){
    ordi gagne
}

*/
//on crée le monde

//récupérer le choix du user
let choixJoueur = '';


 do {
     choixJoueur = prompt('choisissez entre pierre, feuille et ciseaux').toLowerCase();
 } while (choixJoueur != 'pierre' && choixJoueur != 'feuille' && choixJoueur != 'ciseaux');
 
 //récupérer le choix de l'ordi

let nbAleatoire = Math.floor(Math.random() * 3);
const choixOrdi = ['feuille', 'ciseaux', 'pierre'];

//afficher le choix de l'ordi

console.log('choix de l\'ordinateur : ' + choixOrdi[nbAleatoire]);
document.write('choix de l\'ordinateur : ' + choixOrdi[nbAleatoire]);
/*if(nbAleatoire === 0) {
    ordi = 'pierre';
} 
else if(nbAleatoire === 1) {
    ordi = 'feuille';
}
else {
    ordi = 'ciseaux';
}*/

if(choixJoueur === choixOrdi[nbAleatoire]) {
    console.log('égalité');
}
else {
    switch(choixOrdi[nbAleatoire]) {
        
        case 'pierre':
            if(choixJoueur === 'ciseaux') {
                console.log('perdu, la pierre écrase les ciseaux');
            }
            else {
                console.log('gagné, la feuille enveloppe la pierre');
            }
            break;
            
        case 'feuille':
            if(choixJoueur === 'pierre') {
                console.log('perdu, la feuille enveloppe la pierre');
            }
            else {
                console.log('gagné, les ciseaux découpent la feuille');
            }
            break;
            
        case 'ciseaux':
            if(choixJoueur === 'feuille') {
                console.log('perdu, les ciseaux découpent la feuille');
            }
            else {
                console.log('gagné, la pierre écrase les ciseaux');
            }
            break;
            
        default:
        console.log('erreur');
        
     }
 }