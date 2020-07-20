
'use strict';

/**
 * Génère un entier aléatoire entre 2 bornes
 * @param min - Borne minimale
 * @param max - Borne maximale
 * @returns {number} - L'entier aléatoire
 */
function getRandomInteger(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*## Fonctionnalités
L'objectif du projet est de mettre en place un slider d'images.
Plusieurs boutons permettent d'agir sur le slider :

- Bouton "Image suivante" : affiche la prochaine image
- Bouton "Image précédente" : affiche l'image précédente
- Bouton "Play/Pause" : lancer / stoppe le défilement automatique des images
- Bouton "Random" : affiche une image au hasard, différente de l'image actuelle

En plus de ces boutons, le slider devra être navigable au clavier :

- touche -> (flèche droite) : affiche la prochaine image
- touche <- (flèche gauche) : affiche l'image précédente*/

/*## Indications
### Principe général
Toutes les images du slider seront présentes dès le départ dans le code source HTML. La balise ***figure*** semble ici adéquate.
En CSS il sera aisé de masquer les figures, sauf une, qui sera visible, au moyen d'une classe 'active'.

Changer l'image affichée signifie donc attribuer la classe 'active' à une autre figure... */

let images = [
    {
        src: 'img/slides/1.jpg',
        caption: 'Graffiti par Joenomias' // index 0
    },
    {
        src: 'img/slides/2.jpg',
        caption: 'Rue urbaine par Wimkantona' // index 1
    },
    {
        src: 'img/slides/3.jpg',
        caption: 'Velo Vintage par Cristina' // index 2
    }, 
    {
        src: 'img/slides/4.jpg',
        caption: 'Escalier par Pasja1000' // index 3
    },
    {
        src: 'img/slides/5.jpg',
        caption: 'Penang Asia par Onyva' // index 4
    },
    {
        src: 'img/slides/6.jpg',
        caption: 'Artiste de rue par Wobbut' // index 5
    }
];


let buttonNext = document.querySelector('#button-next');
let buttonPrev = document.querySelector('#button-prev');
let playAuto = document.querySelector('#play-auto');
let playRandom = document.querySelector('#play-random');
let figure = document.querySelector('figure');
let img =  figure.querySelector('img');
let caption = figure.querySelector('figcaption');
let index = 0;
let interval = '';
let automatique = false;


buttonNext.addEventListener('click', () => {
    stopSlider();
    photoSuivante();
});

buttonPrev.addEventListener('click', () => {
    stopSlider();
    photoPreced();
});

playAuto.addEventListener('click', () => {
    
    if(automatique) {
        return stopSlider();
    }
    
    photoAuto();
    
});

playRandom.addEventListener('click', () => {
    stopSlider();
    randomPhoto();
}); 


function changeImage() {
    img.setAttribute('src', images[index].src);
    caption.innerText = images[index].caption;   
    
} 

function photoAuto(){
    
    interval = setInterval(function() {
        automatique = true;
        photoSuivante();
    }, 2000);
    changeImage();
}

function stopSlider() {
    
    if(interval != '') {
        clearInterval(interval);
        interval = '';
        automatique = false;
    }
    
}

function photoSuivante() {
    index++;
    if(index > images.length - 1 ) {
        index = 0;
    }
    console.log(index);
    changeImage();
};

 
function photoPreced () {
 // index 0 
    console.log(index);
     if(index == 0) {
         index = images.length ;
     }
     console.log(index);
     index--; // -1
     changeImage();
}
 
function randomPhoto() {
    index = getRandomInteger(0, images.length - 1);
    changeImage();
}

///////////////    RE: BULLETS   /////////////////

function listeDeDots() {
    
    for(let i = 0; i <= images.length - 1; i++) {
        creeUnDot();
    }
}

function creeUnDot(index) {
    const dot = document.createElement('li');
    
    dot.classList.add('dot');
    
    // assigner l'index au data-index des lis
    
    // ajouter un data-index aux lis et lui assigner l'index comme valeur
    
    // => la recherche a faire:  set custom attribute JS
    
    dot.setAttribute('data-index', index);
    
    document.querySelector('#dots').appendChild(dot);
   
}


document.addEventListener('DOMContentLoaded', () => {
   listeDeDots();
   

   let dots = Array.from(document.querySelectorAll('#dots li'));
   
   dots.forEach(dot => {
        dot.addEventListener('click', function() {
            // index = this.dataset.index;
            index = this.getAttribute('data-index');
            changeImage();
            
        });
   });
  
});




    

