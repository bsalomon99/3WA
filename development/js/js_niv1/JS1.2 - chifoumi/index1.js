let playerChoice = window.prompt('Que choisissez-vous : pierre, feuille ou ciseaux ?').toLowerCase();


const Choices = ['feuille', 'ciseaux', 'pierre'];

const randumNb = Math.floor(Math.random() * Choices.length);

let computerChoice = Choices[randumNb];

//Si le joueur et l'ordinateur font le même choix on obtient une égalité.
if(playerChoice === computerChoice) {
    console.log ("égalité!");
}
//Le ciseau est écrasé par la pierre (la pierre gagne, le ciseau perd).
if (playerChoice === 'feuille' && computerChoice === 'pierre') {
    console.log("gagné !");
}

if (playerChoice === 'pierre' && computerChoice === 'feuille') {
    console.log("perdu!");
}

//La feuille est découpée par le ciseau (le ciseau gagne, la feuille perd)
if (playerChoice === 'ciseaux' && computerChoice === 'feuille') {
    console.log("gagné!");
}

if (playerChoice === 'feuille' && computerChoice === 'ciseaux') {
    console.log("perdu!");
}

//La pierre est enveloppée par la feuille (la feuille gagne, la pierre perd).
if (playerChoice === 'ciseaux' && computerChoice === 'pierre') {
    console.log("perdu!");
}

if (playerChoice === 'pierre' && computerChoice === 'ciseaux') {
    console.log("gagné !");
}