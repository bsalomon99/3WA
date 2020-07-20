'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
// Cibler les 3 éléments button, billboard, rocket
const $billboard = document.querySelector('#billboard span')
const $firing = document.querySelector('#firing-button')
const $rocket = document.querySelector('#rocket')
// Créer 2 variables qui vont permettre de gére le timing
let count = 10, timer;

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
// CallBack => mettre en place les différentes étapes du lancement
function onClickButton() {
    // Steps:
    
    // Blocage du comportement par defaut
    $firing.removeEventListener('click', onClickButton)
    
    // 3 - Mise en place de l'action à effectuer au bout de 10 sec (10 000 millisec)
    setTimeout(function () {
        // 3 details :
            // - Maj le fusée (phase 3)
            changePicture('images/rocket3.gif')
            // - Add class tookOff (décollage)
            $rocket.classList.add('tookOff')
    }, count * 1000)
    
    // 1 - Maj de la fusée (phase 2 - petit flamme)
    changePicture('images/rocket2.gif')
    // 2 - Affichage du compte à rebours
    countDown()
        
    // 4 - Répétition à chaque seconde de l'affichage du compteur (cf. function suivante)
    timer = setInterval(countDown, 1000)
}
    
// Répétition à chaque seconde => Affichage dans le billboard 10-9-8-...
// Puis une fois affiché, on pense à décrémenter pour l'affichage suivant.
function countDown() {
    $billboard.textContent = count
    count--;
    // test
    if (count < 0) {
        clearInterval(timer)
    }
}

// Maj img fusée
function changePicture(source) {
    $rocket.setAttribute('src', source)
}

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
// Gestionnaire d'évènement
document.addEventListener('DOMContentLoaded', function (){
    // Écoute du bouton firing pour le lancement , To the Mooon
    $firing.addEventListener('click', onClickButton)
})