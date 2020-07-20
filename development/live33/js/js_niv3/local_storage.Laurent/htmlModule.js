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
    for (let value of Object.values(contact)) {
        if (value) {
            const li = document.createElement('li');

            li.innerHTML = value;

            ul.appendChild(li);
        }
    }

    const button = document.createElement('button');
    button.innerText = 'Effacer';
    button.classList.add('btn', 'btn-xs', 'btn-danger');
    button.setAttribute('data-delete', index);
    ul.appendChild(button);

    const button2 = document.createElement('button');
    button2.innerText = 'Update';
    button2.classList.add('btn', 'btn-xs', 'btn-info');
    button2.setAttribute('data-update', index);
    ul.appendChild(button2);

    return ul;
}

function deleteContact() {
    const btns = document.querySelectorAll('.btn-danger');
    const btns2 = document.querySelectorAll('.btn-info');
    btns.forEach((btn) => {
        btn.addEventListener('click', function () {
            const index = this.getAttribute('data-delete');

            supprimerEntree(index);
        });
    });

    btns2.forEach((btn) => {
        btn.addEventListener('click', function () {
            const index = this.getAttribute('data-update');

            update(index);
        });
    });
}

function supprimerEntree(index) {
    const contacts = getItemFromLocalStorage(storageKey);

    contacts.splice(index, 1);

    addToLocalstorage(storageKey, contacts);
}

function update(index) {
    const contacts = getItemFromLocalStorage(storageKey);

    const contact = contacts[index];

    document.querySelector('input[name=name]').value = contact.name;
    document.querySelector('input[name=email]').value = contact.email;
    document.querySelector('input[name=firstname]').value = contact.firstName;

    //index;
    // cliffhanger
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

export { afficheUL, createUl, ulGenerator, deleteContact };
