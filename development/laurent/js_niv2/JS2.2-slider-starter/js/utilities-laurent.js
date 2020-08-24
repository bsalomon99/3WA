
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
///////////////////////////////////////////////////////////
let images = [
    {
        src: 'img/slides/1.jpg',
        caption: 'legende associée'
    },
    {
        src: 'img/slides/2.jpg',
        caption: 'legende associée 2'
    },
    {
        src: 'img/slides/3.jpg',
        caption: 'legende associée 3'
    },
    {
        src: 'img/slides/4.jpg',
        caption: 'legende associée 4'
    },
    {
        src: 'img/slides/5.jpg',
        caption: 'legende associée 5'
    },
    {
        src: 'img/slides/6.jpg',
        caption: 'legende associée 6'
    },
];
let buttonNext = document.querySelector('#button-next');
let buttonPrev = document.querySelector('#button-prev');
let buttonAuto = document.querySelector('#button-auto');
let buttonRandom = document.querySelector('#button-random');

let automatique = false;

let figure = document.querySelector('figure');
let index = 0;

let img = figure.querySelector('img');
let caption = figure.querySelector('figcaption');
let interval = '';

buttonNext.addEventListener('click', function() {
    stopSlider();
    photoSuivante();
});


function changeImage() {
    img.setAttribute('src', images[index].src);
    caption.innerText = images[index].caption;    
}



buttonAuto.addEventListener('click', function() {
    if(automatique) {
        return stopSlider();
    }
    
    startSlider();
    
});
function startSlider() {
    interval = setInterval(function() {
        automatique = true;
        photoSuivante();
    }, 3000);
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
    
    if(index > images.length - 1) {
        index = 0;
    }
    
    changeImage();
}

function photoPrecedente() {
    index--;
    
    if(index < 0) {
        index = images.length - 1;
    }
    
    changeImage();
}


function randomPhoto() {
    stopSlider();
    
    index = getRandomInteger(0, images.length - 1);
    
    changeImage();
}


function listeDeDots() {
    
    for(let i = 0; i <= images.length - 1 ; i++) {
        creeUnDot(i);
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


