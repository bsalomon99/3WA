
'use strict';

function getRandomInteger(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let caption = document.querySelector('figcaption');


let images = [
    { 
        src: 'img/slides/1.jpg',
        caption: 'Graffiti par Joenomias'
    },
    {
        src: 'img/slides/2.jpg',
        caption: 'Rue urbaine par Wimkantona'
    },
    {
        src: 'img/slides/3.jpg',
        caption: 'Velo Vintage par Cristina'
    },
    {
        src: 'img/slides/4.jpg',
        caption: 'Escalier par Pasja1000'
    },
    {
        src: 'img/slides/5.jpg',
        caption: 'Penang Asia par Onyva'
    },
    {
        src: 'img/slides/6.jpg',
        caption: 'Artiste de rue par Wobbut'
    }
    
];
  
let buttonNext = document.querySelector('#button-next');
let buttonPrev = document.querySelector('#button-prev');
let playAuto = document.querySelector('#play-auto');
let playRandom = document.querySelector('#play-random');


buttonNext.addEventListener('click', function() {
    stopSlider();
    photoSuivante();
});

buttonPrev.addEventListener('click', function(){
    stopSlider();
    photoPreced();
});

playAuto.addEventListener('click', function(){
    if(automatique){
       return stopSlider();
    }
    photoAuto(); 
});

playRandom.addEventListener('click', () => {
    stopSlider();
    randomPhoto();
})

let img = document.querySelector('img');

function changeImage (){
    img.setAttribute('src',images[index].src);
    caption.innerText = images[index].caption;
    
}

let index = 0;

function photoSuivante() {
    index++;
    if(index > images.length - 1) {
        index = 0
    }
    changeImage();
};

function photoPreced() {
    if(index == 0){
    index = images.length
    }
    index--;
    changeImage();
}

function randomPhoto() {
    index = getRandomInteger(0, images.length - 1);
    changeImage();
}

let interval = '';
let automatique = false;

function photoAuto(){
    interval = setInterval(function() {
        automatique = true;
        photoSuivante();
        }, 1000);
        changeImage();
}

function stopSlider (){
    if(interval != '' ) {
        clearInterval(interval);
        interval = '';
        automatique = false;
        
    }
}
