import {
    addToLocalstorage,
    removeFromLocaStorage,
    getItemFromLocalStorage,
    storageKey,
} from './storageModule.js';

import { afficheUL, createUl, ulGenerator } from './htmlModule.js';

let form = document.querySelector('form');

document.addEventListener('DOMContentLoaded', () => {
    ulGenerator();
    createContact();
});

function createContact() {
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (
            this.querySelector('input[name=name]').value === '' ||
            this.querySelector('input[name=email]').value === ''
        ) {
            return;
        }

        const name = this.querySelector('input[name=name]').value;
        const email = this.querySelector('input[name=email]').value;
        const firstName = this.querySelector('input[name=firstname]').value;

        const contact = {
            name,
            email,
            firstName,
        };

        if (contact) {
            persistContact(contact);
        }
    });
}

function persistContact(contact) {
    const contacts = getItemFromLocalStorage(storageKey);
    contacts.push(contact);
    let index = contacts.length - 1;
    //ndex = contacts.indexOf(contact);
    addToLocalstorage(storageKey, contacts);

    const ul = createUl(contact, index);

    afficheUL(ul);
}
