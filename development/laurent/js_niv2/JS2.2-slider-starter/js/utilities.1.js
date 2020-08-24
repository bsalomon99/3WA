
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
let caption = document.querySelector('figcaption');
let images = [
    {
        src: 'img/slides/1.jpg',
        caption: 'blah blah'
    },
    {
        src: 'img/slides/2.jpg',
        caption: 'blah blah 2'
        
    },
    {
        src: 'img/slides/3.jpg',
        caption: 'blah blah 3'
    }
  ];
  
  let playAuto = document.querySelector('#play-auto');
  let playRandom = document.querySelector('#play-random');
  let buttonNext = document.querySelector('#button-next');
  let buttonPrev = document.querySelector('#button-prev');
  let img = document.querySelector('img');
  
  let index = 0
  
  buttonNext.addEventListener('click', function() {
      stopSlider();
      photoSuivante();
  })
  
  buttonPrev.addEventListener('click', function() {
      stopSlider();
      photoPreced();
  })
  
  function photoSuivante (){
      
      index++;
      if(index > images.length -1){
          index = 0
      }
      changeImage();
  }
  
  function photoPreced() {
    
      if(index == 0) {
          index = images.length;
         }
          index--;
          changeImage();
      
      console.log(index);
      
  }
  function changeImage() {
      img.setAttribute('src', images[index].src);
      caption.innerText = images[index].caption;
  }
  
  playRandom.addEventListener('click', function(){
      stopSlider();
      randomPhoto();
  });
  
  function randomPhoto () {
      index = getRandomInteger(0, images.length - 1);
      changeImage();
  }
  
  playAuto.addEventListener('click', function(){
      if(automatique) {
          return stopSlider();
      }
      
      photoAuto();
  });
  
  let automatique = false;
  let interval = '';
  
  function photoAuto (){
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