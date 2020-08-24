'use strict';   // Mode strict du JavaScript


/****Interactions

    Quand on clique sur le bouton toggle-rectangle, cela cache ou affiche le rectangle.
    Quand la souris se déplace à l'intérieur du rectangle il devient rouge; il reprend sa couleur originale quand la souris n'est plus dedans.
    Quand on double-clique sur le rectangle il devient vert.
***********/
// fonction afficher/cacher le rectantle 

// Creer le monde

const rectangle = document.querySelector('.rectangle');
const button = document.querySelector('#toggle-rectangle');


// fonction afficher/cacher le rectantle qd on clique sur le bouton 
button.addEventListener('click', hideShowRectangle);


function  hideShowRectangle (){
    //if(rectangle.style.display === "none" ){
    //rectangle.style.display = "block";
    if(rectangle.classList.contains('rectanglehide')) {
        rectangle.classList.remove('rectanglehide')
    }
    else {
        //rectangle.style.display = "none";
        
        //rectangle.remove('rectanglehide');
        rectangle.classList.add('rectanglehide');
    }
}

rectangle.addEventListener('dblclick', doubleClick);
rectangle.addEventListener('mouseover', changeRed)
////
function changeRed(){
    rectangle.classList.add('important');
}
function doubleClick () {
    rectangle.classList.remove('important');
    rectangle.classList.add('good');
    
}
function mouseLeave() {
    rectangle.classList.remove('good','important');
}
