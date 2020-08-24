////////////////////////////////////////
// DECLARATION DES VARIABLES GLOBALES //
////////////////////////////////////////
let form;

///////////////
// FONCTIONS //
///////////////
function onSubmitForm(event)
{
    /**
     * Annulation du comportement par défaut (soumission du formulaire)
     * pour que le formulaire ne se soumette pas et qu'on reste sur la page
     */
    event.preventDefault();

    /**
     * Récupération du nombre de paragraphes souhaités
     *
     * On peut récupérer la valeur d'un champ grâce à la propriété value :
     *      const paras = document.getElementById('paras-number').value;
     *
     * On peut aussi utiliser la nouvelle interface FormData pour récupérer les données d'un formulaire
     * puis utiliser les méthodes associées pour manipuler les valeurs des champs.
     * Attention ! Pour l'objet FormData soit rempli, les champs doivent avoir un attribut name
     *
     * Documentation FormData : https://developer.mozilla.org/fr/docs/Web/API/FormData/Utilisation_objets_FormData
     */
    const formData = new FormData(form);
    const username = formData.get('username');

    // Construction de l'URL de la requête AJAX
    const url = 'https://api.github.com/users/' + username;

    /**
     * Remarque: on pourrait également utiliser l'interpolation de variables introduit par ES2015 à la place de la concaténation
     * pour construire la chaîne de requête (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Litt%C3%A9raux_gabarits)
     *
     * const url = `https://api.github.com/users/${username}`;
     */

    // Envoi de la requête AJAX
    ajaxGetJson(url, onAjaxSubmitForm);
}

/**
 * Fonction de rappel (callback) Ajax
 * Elle sera exécutée par JavaScript lors de la réception de la réponse
 * @param {[string]} user) - L'utilisateur recherché
 */
function onAjaxSubmitForm(user)
{
    /**
     * Traitement de la réponse du serveur:
     * Affichage de l'avatar de l'utilisateur avec lien vers sa page github
     */

    // Sélection du container de l'utilisateur
    const container = document.getElementById('github-user-container');

    // On nettoie la balise
    container.innerHTML = "";

    // On construit un élément <a> et un élément <img> à l'intérieur
    const aElement = document.createElement('a');
    const imgElement = document.createElement('img');

    aElement.href = user.html_url;
    aElement.title = 'Voir le profil';
    aElement.target = '_blank';
    imgElement.src = user.avatar_url;
    imgElement.alt = user.login;
    imgElement.classList.add('bg-light'); 

    aElement.appendChild(imgElement);

    // Insertion dans le container
    container.appendChild(aElement);
}

////////////////////
// CODE PRINCIPAL //
////////////////////
document.addEventListener('DOMContentLoaded', function(){

    // Installation d'un gestionnaire d'événement sur le formulaire sur sa soumission
    form = document.getElementById('github-user-form');
    form.addEventListener('submit', onSubmitForm);
});
