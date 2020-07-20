
// je veux recuperer les donnees du formulaire.
// convertir celsius en far.



// declarer une variable celsius
// recuperer la valeur du champ input celsius
// Quand on appuie sur le boutton du formulaire, ma fonction doit tourner.
// Quand je clique sur Envoyer, celsius doit etre egal au champ cel du formulaire

// selectionner le formulaire
const form = document.querySelector('form');


form.addEventListener('submit', function(event) {
    
    event.preventDefault();
    
    // form selectionne son input
    const input = this.querySelector('input');
    
    // selection de la valeur de l'input
    const celsius = input.value;
    
    
    const far = convertCelToFar(celsius);
    
    // DOM
    
    // le this represente le formulaire
    const p = this.nextElementSibling; //
    
    p.style.display = 'inline-block';
    
    p.innerText = `${celsius} celsius est egal a ${far} farenheit`;
});


// declarer une variable farenheit || resultat
function convertCelToFar(celsius) {
    const far = (celsius * 9 / 5) + 32;
    
    return far;
}





