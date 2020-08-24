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
    const paras = formData.get('paras-number');

    // Construction de l'URL de la requête AJAX
    const url = 'https://baconipsum.com/api/?type=all-meat&paras=' + paras + '&start-with-lorem=1';

    /**
     * Remarque: on pourrait également utiliser l'interpolation de variables introduit par ES2015 à la place de la concaténation
     * pour construire la chaîne de requête (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Litt%C3%A9raux_gabarits)
     *
     * const url = `https://baconipsum.com/api/?type=all-meat&paras=${paras}&start-with-lorem=1`;
     */

    // Envoi de la requête AJAX
    ajaxGetJson(url, onAjaxSubmitForm);
}

/**
 * Fonction de rappel (callback) Ajax
 * Elle sera exécutée par JavaScript lors de la réception de la réponse
 * @param {[string]} paragraphs - Les paragraphes de Bacon Ipsum
 */
function onAjaxSubmitForm(paragraphs)
{
    /**
     * Traitement de la réponse du serveur:
     * insertion de chaque paragraphe récupéré dans la balise container
     */

    // Sélection de la balise container
    const container = document.getElementById('lorem-container');

    // On nettoie la balise
    container.innerHTML = "";

    for(const textPara of paragraphs){

        // On construit un élément <p>
        const pElement = document.createElement('p');
        pElement.textContent = textPara;

        // Insertion du paragraphe dans le container
        container.appendChild(pElement);
    }

    container.classList.remove('hide');
}

////////////////////
// CODE PRINCIPAL //
////////////////////
document.addEventListener('DOMContentLoaded', function(){

    // Installation d'un gestionnaire d'événement sur le formulaire sur sa soumission
    form = document.getElementById('lorem-form');
    form.addEventListener('submit', onSubmitForm);
});
