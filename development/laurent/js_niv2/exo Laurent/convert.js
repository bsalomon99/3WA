const form = document.querySelector('form');
const forms = Array.from(document.querySelectorAll('form'));



forms.forEach(function(form) {
   form.addEventListener('submit', identifyForm);
});



function identifyForm(event) {
    event.preventDefault();
    
    const id = this.getAttribute('id');
    
    const degreAconvertir = this.querySelector('input').value;
    
    
    if(id == 'celToFar') {
        return convertCelToFar(makeSureItsANumber(degreAconvertir), this);
        
    } else if(id == 'farToCel') {
        return convertFarToCel(makeSureItsANumber(degreAconvertir), this);
        
    } else if(id === 'farToKel') {
        return farToKel(makeSureItsANumber(degreAconvertir), this);
    } else {
        return celToKel(makeSureItsANumber(degreAconvertir), this);
    }
}

function convertCelToFar(celsius, form) {
    const far = (celsius * 9 / 5) + 32;
    
    affichage(form.nextElementSibling, far);
}


function convertFarToCel(far, form) {
    const cel = (far - 32) * 5 / 9;
    
    affichage(form.nextElementSibling, cel);
}


function celToKel(cel, form) {
    const kel = cel + 273.15;
    
    affichage(form.nextElementSibling, kel);
}


function farToKel(far, form) {
    const kel = (far + 459.67) / 1.8;
    
    affichage(form.nextElementSibling, kel);
}

function affichage(p, degre) {
    p.style.display = 'inline-block';
    console.log(degre);
    p.innerText = degre.toFixed(2);
}


function makeSureItsANumber(number) {
    return parseFloat(number);
}





