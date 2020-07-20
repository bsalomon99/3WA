'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/
// Variable qui contient les données du jeu (level, names, pdvs)
let game;

const DRAGON = "dragon";
const KNIGHT = "knight";

// Données pour la V2
const LEVEL_EASY    = 1;
const LEVEL_NORMAL  = 2;
const LEVEL_HARD    = 3;

// Données pour la V3
const CLASS_KNIGHT      = 1;
const CLASS_THIEF       = 2;
const CLASS_MAGICIAN    = 3;

/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/
/**
 * Initialiser les données de jeux en tenant compte du level et de la class dues joueurs
 */
function initGame() {
    // Long
	// game = new Object();
	
	// Affectation dans un second temps des propriétés de l'objet
	// game.round = 1
	
	// Short, on initialise et on valorise en même temps
    game = {
	    round: 1
    };
    
    // V1 init (game => object, round 1, gen PDVS mode normal (2))
    // test est-ce que le niveau exist, sinon mode normal par defaut 2 (game.level)
    
    // Dans le test ci-dessus, il faut s'assurer d'avoir un niveau, s'il n'y en a pas, valoriser game.level à 2 (Mode normal)
    // Valoriser le game.level à ce moment là, sinon il y aura un souci avec le switch
    
	// V2 with level
	// Level
	game.level = requestInt(
	    'Choisissez la difficulté\n'+
	    '1 - Facile, 2 - Normal, 3 - Difficile',
	    1, 3
    );
    
    // Profil
    game.classPlayer = requestInt(
	    'Choisissez un profil\n'+
	    '1 - Chevalier, 2 - Voleur, 3 - Magicien',
	    1, 3
    );

	// Demander à l'utilisateur de saisir le niveau choisi, qu'il faudra ajouter à la partie (game.level)
	switch (game.level) {
	    case LEVEL_EASY:
	        /*
	            En mode facile :
            	--------------
            	* PV dragon : 100 + 5D10
            	* PV joueur : 100 + 10D10
	        */
	        game.pdvKnight = 100 + throwDices(10, 10);
	        game.pdvDragon = 100 + throwDices(5, 10);
	        break;
	    case LEVEL_NORMAL:
	        /*
	            En mode normal :
            	--------------
            	* PV dragon : 100 + 10D10
            	* PV joueur : 100 + 10D10
	        */
	        game.pdvKnight = 100 + throwDices(10, 10);
	        game.pdvDragon = 100 + throwDices(10, 10);
	        break;
	    case LEVEL_HARD:
	        /*
	            En mode difficile :
            	-----------------
            	* PV dragon : 100 + 10D10
            	* PV joueur : 100 + 7D10
	        */
	        game.pdvKnight = 100 + throwDices(7, 10);
	        game.pdvDragon = 100 + throwDices(10, 10);
	        break;
	}
	
	// V3 attribution des roles (chevalier, voleur, magicien)
	// Demander à l'utilisateur de saisir le rôle choisi, qu'il faudra ajouter à la partie (game.classPlayer)
    game.pdvDragonStart = game.pdvDragon
    game.pdvKnightStart = game.pdvKnight
}

// Gestion d'un round de combat
function gameLoop() {
    do {
        // Déterminer qui va frapper (initiative)
        let toto = getAttacker();
        
        // Déterminer les dommages à infliger à l'adversaire != de attackPlayer : computeDamage(attacker)
        let damages = computeDamage(toto);
        
        // V3 Si l'attacker est le dragon et que le chevalier a un rôle de chevalier
        if(toto === DRAGON) {
            // Minoré les dommages (cf. README.md)
            if (game.classPlayer === CLASS_KNIGHT) {
                damages -= Math.round(damages * throwDices(1, 10) / 100)
            }
            
            // Appliquer les dommages
            // game.pdvKnight = game.pdvKnight - damages; //Long
            game.pdvKnight -= damages // Short
        // Sinon
        } else {
            // Si le chevalier a le rôle de magicien
            if (game.classPlayer === CLASS_MAGICIAN) {
                // augmenter les dommage de (cf .README.md)
                damages += Math.round(damages * throwDices(1, 10) / 100)
            }
            // Appliquer les dommages
            game.pdvDragon -= damages
        }
        
        // Afficher l'état du jeux : un round (qui attaque + dommages)
        showState(toto, damages)
        
        // Affichage de l'état général des joueurs 
        showStart()
        
        // Incrémenter le round pour l'affichage du suivant
        game.round++
    } while (game.pdvDragon > 0 && game.pdvKnight > 0);
    
}

// Déterminer l'attaquant
function getAttacker() {
    // Déterminer la valeur du lancer de dé pour chacun (10D6)
    let scoreKnight = throwDices(10,6);
    let scoreDragon = throwDices(10,6);
    
    // Bonus 2 
    if(game.classPlayer === CLASS_THIEF) {
        scoreKnight += Math.round(scoreKnight * throwDices(1, 6) / 100)
    }
    
    // Déterminer qui attaque par rapport aux scores obtenus
    if (scoreKnight >= scoreDragon) {
        return KNIGHT; // "knight"
    } else {
        return DRAGON; // "dragon"
    }
}

// Calculer les dommages infligés en fonction de l'attaquant (attacker)
function computeDamage(attaquant) {
    // Calculer les dommages
    let damages = throwDices(3, 6)
    
    // V2-V3 calculer les variations en fonctions du level et du role choisi (switch)
    switch (game.level) {
        case LEVEL_EASY:
            
            if (attaquant === DRAGON) {
                damages -= Math.round(damages * throwDices(2, 6) / 100)
            } else {
                damages += Math.round(damages * throwDices(2, 6) / 100)
            }
            break;
            
        case LEVEL_HARD:
             if (attacker === DRAGON) {
                damages += Math.round(damages * throwDices(1, 6) / 100)
            } else {
                damages -= Math.round(damages * throwDices(1, 6) / 100)
            }
            break;
        
        default:
            // code
    }
    // V1-V2-V3 Retourner les dommages
    return damages;
}

function showStart() {
    // Sources edes images des joueurs
    let imgKnight = 'knight.jpg';
    let imgDragon = 'dragon.jpg';
    
    // Bonus 1 Jauge du pourcentage des pdv respectifs
    const percentDragon = game.pdvDragon * 100 / game.pdvDragonStart
    if (percentDragon < 30) {
        imgDragon = 'dragon-wounded.png';
    }
    
    const percentKnight = game.pdvKnight * 100 / game.pdvKnightStart
    if (percentKnight < 30) {
        imgKnight = 'knight-wounded.png';
    }
    
    // Start
    document.write(`
        <!-- Etat du jeu -->
        <div class="game-state">
            <!-- Chevalier -->
            <figure class="game-state_player">
                <img src="images/${imgKnight}" alt="Chevalier">
    `);
    
    // Bonus 3 balise progress
    if (game.pdvKnight > 0) {
        document.write(`<figcaption><progress max='100' value='${percentKnight}'></progress>${game.pdvKnight} PV</figcaption>`);
    } else {
        document.write(`<figcaption>Game Over</figcaption>`);
    }
    document.write(`</figure>`);
    
    document.write(`<!-- Dragon -->`)
    document.write(`<figure class="game-state_player">`);
    document.write(`<img src="images/${imgDragon}" alt="Dragon">`)
    
    if (game.pdvDragon > 0) {
        document.write(`<figcaption><progress max='100' value='${percentDragon}'></progress>${game.pdvDragon} PV</figcaption>`);
    } else {
        document.write(`<figcaption>Game Over</figcaption>`);
    }
    
    document.write(`</figure>`);
    document.write(`</div>`);
}

/**
 * Afficher le n° du tour et les PDV respectifs
 * @param string attacker
 * @param integer damagePoints
 */
function showState(attacker, damagePoints) {
    
    let imgWinnerRound, alt, message;
    
    if (attacker === DRAGON) {
        imgWinnerRound = 'dragon-winner.png';
        alt = 'Dragon Vainqueur';
        message = `Le Dragon prend l'initiative, vous attaque et vous inflige ${damagePoints} points de dommage !`;
    } else {
        imgWinnerRound = 'knight-winner.png';
        alt = 'Knight Vainqueur';
        message = `Vous êtes le plus rapide, vous attaquez et lui infligez ${damagePoints} points de dommage !`;
    }
    
    document.write(`
        <!-- Journal de la partie - TOUR N°1 -->
        <h3>Tour n° ${game.round}</h3>
        <figure class="game-round">
            <img src="images/${imgWinnerRound}" alt="${alt}">
            <figcaption>${message}</figcaption>
        </figure>
    `)
}

// Afficher le gagnant
function showWinner() {
    let imagePath, message, winnerName;
    
    // Test qui a encore de la vie
    if (game.pdvDragon > 0) {
        imagePath = 'dragon-winner.png';
        winnerName = 'Dragon Vainqueur';
        message = 'Vous avez perdu le combat, Looser'
    } else {
        imagePath = 'knight-winner.png';
        winnerName = 'Knight Vainqueur';
        message = 'Vous avez gagné le combat, Yipikay'
    }
    
    document.write(`
        <footer>
            <h3>Fin de la partie</h3>
            <figure class="game-end">
                <figcaption>${message}</figcaption>
                <img src="images/${imagePath}" alt="${winnerName}">
            </figure>
        </footer>
    `);
}

function start() {
    // Etape 1 : Init Game
    initGame()
    
    // Etape 2 : Affiche l'état avant de commencer
    showStart()
    
    // Etape 3 : Dérouler du jeux (gameLoop)
    gameLoop()
    
    // Etape 4 : Afficher le gagnant
    showWinner()
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
// Start se charge d'exécuter l'ensemble des tâches à mener
start();