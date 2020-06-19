'use strict';   // Mode strict du JavaScript

document.write('</ul>');
const voiture = {
    brand: 'ford',
    price: 19000,
    color: 'aliceblue'
}



// 
// marque: ford
// price: 1900
// color: aliceblue // bonus background-color === aliceblue

document.write('<ul>');

for(element in voiture) {
    if(element === 'color') {
        document.write(`<li id="color" style="background-color:${voiture[element]}">${element}: ${voiture[element]}</li>`);    
    } else {
        document.write(`<li>${element}: ${voiture[element]}</li>`);    
    }
}

document.write('</ul>');


const html = document.getElementById('color');

html.addEventListener('click', function() {
   // Quand on clique sur cet element, on change de couleur
   console.log(html.style);
   html.style.backgroundColor = 'orangered';
   html.style.color = 'orangered';
   
   
});

function calculSurfaceCarree(a = 10, b = 10) {
    let surface = a * b;
    
    return surface;
}

console.log(calculSurfaceCarree(50, 60));
 
// si je on accepte un argument par defaut dans une fon