import {
    addToLocalstorage,
    removeFromLocaStorage,
    getItemFromLocalStorage,
    storageKey,
} from './storageModule.js';

import {
    afficheUL,
    createUl,
    ulGenerator,
    deleteContact,
    refreshUl,
} from './htmlModule.js';

let form = document.querySelector('form');
// Variable Globale
window.formEditState = false;
// ES2020:
//globalThis === window dans le contexte du navigateur

document.addEventListener('DOMContentLoaded', () => {
    ulGenerator();
    createContact();
    deleteContact();
});

function createContact() {
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // on pourrait faire une vraie validation
        if (
            this.querySelector('input[name=name]').value === '' ||
            this.querySelector('input[name=email]').value === ''
        ) {
            return;
        }

        const name = this.querySelector('input[name=name]').value;
        const email = this.querySelector('input[name=email]').value;
        const firstname = this.querySelector('input[name=firstname]').value;

        const contact = {
            name,
            email,
            firstname,
        };

        if (contact) {
            if (formEditState) {
                const index = this.dataset.index;
                return updateContact(contact, index);
            }

            return persistContact(contact);
        }
    });
}

function updateContact(contact, index) {
    const contacts = getItemFromLocalStorage(storageKey);
    // avec son index
    // on met a jour les champs du contact
    // on remet notre contact a la bonne position dans le tableau.
    contacts[index] = contact;

    addToLocalstorage(storageKey, contacts);

    form.reset();

    formEditState = false;

    refreshUl(contact, index);
}

function persistContact(contact) {
    const contacts = getItemFromLocalStorage(storageKey);
    contacts.push(contact);
    let index = contacts.length - 1;
    //ndex = contacts.indexOf(contact);
    addToLocalstorage(storageKey, contacts);

    const ul = createUl(contact, index);
    form.reset();
    afficheUL(ul);
}
