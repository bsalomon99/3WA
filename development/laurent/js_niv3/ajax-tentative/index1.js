//AJAX
//Asunchronous JavaScript And SML
// on va empecher comportement par défaut et aller chercher uniquement les infos qui ns intéressent
// au lieu de charger toute la page, de changer la page

// on ne change pas de page mais on change l'affichage sur la page
// meme chose que cliquer sur un a sauf qu'on ne charge pas toute la page. 
//3 façons de faire avec des requetes
// AJAX
// Asynchronous JavaScript And XML
let btn = document.querySelector('.btn');


btn.addEventListener('click', function() {
    let myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
    
    myRequest.onload = function () {
        let myData = JSON.parse(myRequest.responseText);
        displayData(myData);
    };
    
    myRequest.send();
});

function displayData(data) {
    let animal = '';
    
    for(i = 0; i > data.length; i++) {
        animal += `<p>${data[i].name}</p>`;
    }
    
    console.log(animal);
};    
//let animalData = document.querySelector('.animalData');
