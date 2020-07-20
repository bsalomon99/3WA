
let images = Array.from(document.querySelectorAll('#photo-list img'));
let span = document.querySelector('#nombre-list');

images.forEach(image => {
    
   image.addEventListener('click', dealWithList);
   
});

//OU BIEN  for(let i = 0; i < images.length; i++) {
//     images[i].addEventListener('click', dealWithList);
// }


function dealWithList() {
    // 
    //   span.innerText = selectedphotos.length; // le nombre d'element contenant la class selected
    //   console.log(selectedphotos);
    this.classList.toggle('selected');
       
   // selectionner tous les elements qui ont la class selected, affficher leur nombre avec la propriete length.
    span.innerText = document.querySelectorAll('.selected').length;
}

/*
//    Selectionner tous les elements => HTMLCollection => tableau
//     #photo-list
let images = document.querySelectorAll('#photo-list img');
let selectedImg = '';
console.log(selectedImg);
let total = document.querySelector('#total span')
images = Array.from(images);
// OU BIEN  let images = Array.from(document.querySelectorAll('#photo-list img'));

images.forEach(function(image) {
    // OU BIEN images.forEach(image => {
    // here image could be anything i.e. item or element...    
        
    
    // console.log(this);
   image.addEventListener('click', function() {
       //console.log(this);
       // this
       this.classList.toggle('selected');
       // ici on gere les classes.
       let selectedImg = document.querySelector('#photo-list img.selected');
   });
});
*/


