
// on ajoute un eventListener 'submit' au formulaire
// on recupere les donnees du formulaire
// quand on clique sur submit, on empeche le rechargement de la page
let form = document.querySelector('form');
let storageKey = 'contacts';
let button = document.querySelector('button');


document.addEventListener('DOMContentLoaded', () => {
    createContact();
    afficheTousLesContacts();
})


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
    console.log(contact);
        // Si la cle et sa valeur ont le meme nom: on peut declarer un objet comme ca
        // object shorthand property
        //const contact = {
        //    name,
        //    email
        //};
    
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
// show/hide form via button
button.addEventListener('click', function() {
    form.classList.toggle('hide');
});

let btn = document.querySelector('.delete');
btn.addEventListener('click', function() {
    removeFromLocaStorage(storageKey);
});

// Recuperer tous les contacts du localstorage
//const contacts =  getItemFromLocalStorage(storageKey);

//console.log(contact); // vide, il est comme ca a la ligne 8.




//alert(contact[index]);
//const children = document.body.children;

//Array.prototype.forEach.call(children, child => {
//   if(child.classList.contains('container')) {
//      child.lastElementChild.appendChild(ul);
//  }
//});
//document.querySelector('.row').appendChild(ul);



// le row est un child de container qui est un child de body
// le row est le lastElementChild de container
// container c'est le 2eme element de body


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

