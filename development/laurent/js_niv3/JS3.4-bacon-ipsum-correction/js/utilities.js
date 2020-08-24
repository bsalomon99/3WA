'use strict';

/**
 * Envoi une requête AJAX destinée à récupérer des données au format JSON
 * @param url L'URL de la requête AJAX
 * @param callback La fonction de callback, qui sera appelée lors de la réception de la réponse du serveur
 */
function ajaxGetJson(url, callback)
{
    // 1. Création d'un objet XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // 2. Ouverture de la requête vers l'URL de destination avec la méthode GET
    xhr.open('get', url);

    // 3. Envoi de la requête
    xhr.send(null);

    // 4. Ecoute de l'événement 'load', déclenché lors de la fin de la réception de la réponse du serveur
    xhr.addEventListener('load', function() {

        // Si le status HTTP est différent de 200, il y a un problème
        if (xhr.status != 200) {
            console.error('Error ' + xhr.status + ': ' + xhr.statusText);

            /**
             * Remarque: on pourrait également utiliser l'interpolation de variables introduit par ES2015 à la place de la concaténation
             * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Litt%C3%A9raux_gabarits
             *
             * console.error(`Error ${xhr.status} : ${xhr.statusText});
             */

            return; // Sortir de la fonction permet d'éviter d'ajouter un else
        }

        // Récupération de la réponse du serveur et désérialisation
        const response = JSON.parse(xhr.response);

        // Appel de la fonction de callback - On lui donne en paramètre la réponse du serveur à la requête AJAX
        callback(response);
    });

    // 5. Ecoute de l'événement 'error' pour récupérer les erreurs concernant la requête Ajax elle-même
    xhr.addEventListener('error',function() {
        console.error('Request failed');
    });
}