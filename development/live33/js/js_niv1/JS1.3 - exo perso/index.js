'use strict';   // Mode strict du JavaScript


let listeCourse = ['caviar', 'champagne', 'huile olive'];

let listeCourseBis = ['javel', 'eponges', 'savon'];

let liste = [];

function addItem (liste, element) {
    liste.push(element);
}

addItem(listeCourse,'champignons');

addItem(listeCourseBis, 'arsenic');
document.write(listeCourse);
document.write(listeCourseBis);
//afficher contenu liste

function displayList(liste) {
    document.write('<ul>');
    
    for(let element of liste) {
        document.write(`<li> ${element} </li>`);
    }
    
    document.write('</ul>');
}
displayList(listeCourse);
displayList(listeCourseBis);

function removeItem (liste, element) {
    let itemToBeRemoved = liste.indexOf(element);
    
    if (itemToBeRemoved > 0){
        liste.splice(itemToBeRemoved, 1 );
    }
    else {
        document.write('item unknown');
    }
}
removeItem(listeCourse,'champignons');
displayList(listeCourse);
/*
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
 
*/