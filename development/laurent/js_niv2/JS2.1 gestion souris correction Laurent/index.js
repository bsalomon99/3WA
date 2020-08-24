'use strict';   // Mode strict du JavaScript
const btn = document.querySelector('#toggle-rectangle');
const rectangle = document.querySelector('.rectangle');
    
btn.addEventListener('click', function() {
    rectangle.classList.toggle('hidden');
})
    
    //if (getComputedStyle(rectangle).display != "none") {
     //   rectangle.style.display = "none";
    //} else {
    //    rectangle.style.display = "block";
    //}

rectangle.addEventListener('dblclick', dealWithGreen);
rectangle.addEventListener('mouseover', changeCouleur);
rectangle.addEventListener('mouseout', changeCouleur);



function dealWithGreen() {
    this.classList.toggle('green');
}


function changeCouleur() {
    this.classList.toggle('important');
}

