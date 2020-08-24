import {
    getItemFromLocalStorage,
    storageKey,
    addToLocalstorage,
} from './storageModule.js';

function createUl(contact, index) {
    const ul = document.createElement('ul');

    ul.setAttribute('data-index', index);
    //console.log(Object.keys(contact));
    //console.log(Object.values(contact));
    //console.log(Object.freeze(contact));

    for (let [key, value] of Object.entries(contact)) {
        if (value) {
            const li = document.createElement('li');

            li.setAttribute('data-key', key);
            li.innerText = value;

            ul.appendChild(li);
        }
    }
    //TODO: voir TODO plus bas.
    const li = addDeleteButton();

    ul.appendChild(li);

    addEditAction(ul);

    return ul;
}

function addEditAction(ul) {
    const li = ul.firstChild;

    li.classList.add('text-info');

    li.addEventListener('dblclick', editContact);
}
// TODO: Extraire un fonction pour recuperer un contact
function editContact() {
    const index = this.parentElement.dataset.index;
    const contacts = getItemFromLocalStorage(storageKey);
    const contact = contacts[index];
    // remplir le formulaire avec les données du contact
    for (let [key, value] of Object.entries(contact)) {
        document.querySelector(`input[name=${key}]`).value = value;
    }

    formEditState = true;

    const form = document.querySelector('form');

    form.setAttribute('data-index', index);
}

// TODO: reflechir a un nom de fonction correct.
function addDeleteButton() {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.innerText = 'Effacer';
    button.classList.add('btn', 'btn-xs', 'btn-danger');

    button.addEventListener('click', deleteContact);

    li.appendChild(button);

    return li;
}

function deleteContact() {
    const ul = this.parentElement.parentElement;
    let index = ul.dataset.index;
    //index = ul.getAttribute('data-index');

    const contacts = getItemFromLocalStorage(storageKey);

    contacts.splice(index, 1);

    addToLocalstorage(storageKey, contacts);

    ul.remove();
    resetIndex();
}

function resetIndex() {
    const uls = document.querySelectorAll('ul');

    for (let index = 0; index < uls.length; index++) {
        uls[index].dataset.index = index;

        //console.log(uls[index]);
        //uls[index].setAttribute('data-test', 'test ' + index);
        //uls[index].dataset.test = index;
        //console.log(uls[index].dataset);
    }
}

function ulGenerator() {
    const contacts = getItemFromLocalStorage(storageKey);

    contacts.forEach((contact, index) => {
        const ul = createUl(contact, index);

        afficheUL(ul);
    });
}

function afficheUL(ul) {
    const children = document.body.children;

    Array.prototype.forEach.call(children, (child) => {
        if (child.classList.contains('container')) {
            child.lastElementChild.appendChild(ul);
        }
    });
}

function refreshUl(contact, index) {
    // Recuperer le ul
    const ul = document.querySelector(`ul[data-index="${index}"]`);

    let lis = ul.querySelectorAll('li[data-key]');
    //lis = ul.querySelectorAll('li:not(:last-child)');

    lis.forEach((li) => {
        updateLi(li, contact);
    });
}

function updateLi(li, contact) {
    for (let [key, value] of Object.entries(contact)) {
        if (key === li.getAttribute('data-key')) {
            li.innerText = value;
        }
    }
}

export { afficheUL, createUl, ulGenerator, deleteContact, refreshUl };
