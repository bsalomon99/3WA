//AJAX
//Asunchronous JavaScript And SML
// on va empecher comportement par défaut et aller chercher uniquement les infos qui ns intéressent
// au lieu de charger toute la page, de changer la page
// on ne change pas de page mais on change l'affichage sur la page
// meme chose que cliquer sur un a sauf qu'on ne charge pas toute la page. 

//3 façons de faire avec des requetes: old method, fetch and ?
// AJAX Asynchronous JavaScript And XML

let btn = document.querySelector('.btn');

let form = document.querySelector('form');

btn.addEventListener('click', vaChercher);

function vaChercher(e) {
    e.preventDefault();
    const name = this.querySelector('input[name=name]').value;
    const firstname = this.querySelector('input[name=firstname]').value;

    const contact = {
        name,
        firstname
    };


    let url = new URL('https://blandine.sites.3wa.io/development/live33/js/js_niv3/ajax-tentative/index.php');

    url.searchParams.set('id', 10100);
    //url.searchParams.set('user_id', 4134134);
    
    
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}