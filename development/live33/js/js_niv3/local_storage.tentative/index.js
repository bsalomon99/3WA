import {
    addToLocalstorage,
    removeFromLocaStorage,
    getItemFromLocalStorage,
    storageKey,
} from './indexModule.js';

import { createContact, createUl, afficheTousLesContacts } from './htmlModule.js';




let form = document.querySelector('form');
//let storageKey = 'contacts';
let button = document.querySelector('button');


document.addEventListener('DOMContentLoaded', () => {
    createContact();
    afficheTousLesContacts();
})



// show/hide form via button
button.addEventListener('click', hideshowForm); 



function addToLocalstorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}


// enlever un item de localstorage
function removeFromLocaStorage(key) {
    localStorage.removeItem(key);
}

// recuperer les donnees
// convertir en tableau
function getItemFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

