
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
    const fahr = input.value;
    
    
    const celsius = convertFahrToCel(fahr);
    
    // DOM
    
    // le this represente le formulaire
    const p = this.nextElementSibling; //
    
    p.style.display = 'inline-block';
    
    p.innerText = `${fahr} Fahrenheit est egal a ${celsius} Celsius.`;
});


// declarer une variable farenheit || resultat
function convertFahrToCel(fahr) {
    const celsius = (fahr - 32) * 5 / 9;
    
    return celsius;
}





