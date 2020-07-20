// Attente que le doc soit chargé, suit à l'écoute de l'event DOMContentLoaded

// 2 façons : avec fonctions anonyme ou nommée
// Nommée
/*// Function de callBack, elle sera déclenché lors de la capture de l'évènement
function onLoaded() {
    // Traitement attendu suite à la capture de l'évènement
    
    
}

document.addEventListener('DOMContentLoaded', onLoaded)*/

// Anonyme
document.addEventListener('DOMContentLoaded', function () {
    // Traitement attendu suite à la capture de l'évènement
    console.log('Le document est bien chargé')
    
    const $btn = document.querySelector('#action')
    const $btnTOTO = document.querySelector('#toto')
    
    console.log($btn);
    
    // Ecoute du click sur le bouton ($btn)
    $btn.addEventListener('click', function() {
        // Ici, on effectue le traitement
        console.log('On a clické')
        // querySelector => get 1 result
        const $div = document.querySelector('.container')
        // querySelectorAll => get all result who match
        //const $div = document.querySelectorAll('.container')
        
        
        $div.textContent = "C'est bientôt l'heure du goûter !";
    })
    
    // Ecoute du click sur le bouton ($btn)
    $btnTOTO.addEventListener('click', function() {
        // Ici, on effectue le traitement
        console.log('On a clické')
        // querySelector => get 1 result
        const $div = document.querySelector('.container')
        // querySelectorAll => get all result who match
        //const $div = document.querySelectorAll('.container')
        
        
        $div.textContent = "Arf, j'ai trop faim !!!e";
    })

})


