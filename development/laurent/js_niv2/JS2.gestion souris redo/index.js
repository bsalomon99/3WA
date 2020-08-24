'use strict';   // Mode strict du JavaScript

const rectangle = document.querySelector('.rectangle');
const btn = document.querySelector('#toggle-rectangle');


btn.addEventListener('click', hideShow);
function hideShow (){
    rectangle.classList.toggle('rectanglehide');
}

rectangle.addEventListener('mouseover', redOn);
function redOn() {
    rectangle.classList.add('important');
}

rectangle.addEventListener('mouseout', redOff);
function redOff() {
    rectangle.classList.remove('important', 'good');
    
    
}

rectangle.addEventListener('dblclick', handleGreen);
function handleGreen ()
{
    rectangle.classList.remove('important');
    rectangle.classList.add('good');
    
}
