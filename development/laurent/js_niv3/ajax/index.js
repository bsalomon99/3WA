//AJAX
//Asunchronous JavaScript And SML
// on va empecher comportement par défaut et aller chercher uniquement les infos qui ns intéressent
// au lieu de charger toute la page, de changer la page

// on ne change pas de page mais on change l'affichage sur la page
// meme chose que cliquer sur un a sauf qu'on ne charge pas toute la page. 
//3 façons de faire avec des requetes
// AJAX
// Asynchronous JavaScript And XML
const form = document.querySelector('form');

form.addEventListener('submit', vaChercher);

function vaChercher(e) {
    e.preventDefault();
    const name = this.querySelector('input[name=name]').value;
    const firstname = this.querySelector('input[name=firstname]').value;


    const contact = {
        name,
        firstname
    };


    let url = new URL('https://live-33.sites.3wa.io/ajax/index.php');

    url.searchParams.set('id', 10100);
    //url.searchParams.set('user_id', 4134134);


    // fetch c'est depuis 2016
    // Les callback flèches sur plusieurs lignes === return !! pas !! automatique.
    /*fetch(url)
        .then(response => {
            return response.text();
        })
        .then(data => {
            console.log(data);
            document.querySelector('.response').innerHTML = data;
        })
        .catch(error => {
            console.error(error);
        });*/

    // Les callback flèches sur une ligne === return automatique
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let order = data.order
            console.log(order);
        })
        .catch(error => console.error(error));


    // depuis 1998
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'index.php?id=10100');

    xhttp.send();

    xhttp.onreadystatechange = function() {
        //console.log(this);
        if (this.readyState === 4 && this.status === 200) {
            let order = JSON.parse(xhttp.response);
            console.log(order);
        }
    }

}
