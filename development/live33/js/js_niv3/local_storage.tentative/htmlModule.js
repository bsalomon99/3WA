import { getItemFromLocalStorage, storageKey } from './indexModule.js';


function createContact() {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
    
        let name = this.querySelector('input[name=name]').value;
        let email = this.querySelector('input[name=email]').value;
        // on met les donnees dans un objet
        let contact = {
            name: name,
            email: email
        
        };
    
    
        // on met cet objet dans un tableau
        let contacts = getItemFromLocalStorage(storageKey);
        contacts.push(contact);
        let index = contacts.length - 1;
        // on convertit ce tableau en string
        // on envoie le tableau dans localStorage.
        // appeler la fonction quand le contact est cree. (donc a la ligne 35)
        addToLocalstorage(storageKey, contacts);
        createUl(contact);
    });
}   

// Afficher les contacts sur la page
// faire une petite fonction pour creer une ul.
// cette fonction accepte un contact en parametre.
function createUl(contact, index) {
    
    let ul = document.createElement('ul');
    
    ul.innerHTML = `<li>${contact.name}</li><li>${contact.email}</li>`;
    
    document.querySelector('div').appendChild(ul);
}

function afficheTousLesContacts() {
        let contacts = getItemFromLocalStorage(storageKey);
        let ul = document.createElement('ul');
        contacts.forEach((contact, index) => {
            ul = createUl(contact, index);
            document.querySelector('div').appendChild(ul);
        });
    
}

function hideShowForm () {
    form.classList.toggle('hide');
}


export { createContact, createUl, afficheTousLesContacts, hideShowForm };