'use strict';

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function onClickSendRequestButton()
{
    const example = $(this).data('example');

    switch (example) {

        case 'example-1':

            // Envoi d'une requête Ajax avec la méthode Http GET
            $.get(
                'static_content/static_content.html', // URL cible vers laquelle la requête est envoyée
                onGetResponseExample1 // fonction de callback qui recevra la réponse du serveur
            );
            break;

        case 'example-2':

            // Envoi d'une requête Ajax avec la méthode Http GET
            $.getJSON(
                'static_content/static_data.json', // URL cible vers laquelle la requête est envoyée
                onGetResponseExample2 // fonction de callback qui recevra la réponse du serveur
            );
            break;

        case 'example-3':

            // Envoi d'une requête Ajax avec la méthode Http GET
            $.get(
                'dynamic_content/movies.php', // URL cible vers laquelle la requête est envoyée
                onGetResponseExample3 // fonction de callback qui recevra la réponse du serveur
            );
            break;

        case 'example-4':

            // Envoi d'une requête Ajax avec la méthode Http GET
            $.getJSON(
                'dynamic_content/trucks.php', // URL cible vers laquelle la requête est envoyée
                onGetResponseExample4 // fonction de callback qui recevra la réponse du serveur
            );
            break;

        case 'example-5':

            // On récupère le contenu du champ de formulaire
            const course = $('#s5 input[type="text"]').val();

            // Si le champ texte est vide on ne fait rien
            if(!course.trim()){
                return;
            }

            // Envoi d'une requête Ajax avec la méthode Http GET
            $.post(
                'post-data.php', // URL cible vers laquelle la requête est envoyée
                {data: course},
                onGetResponseExample5 // fonction de callback qui recevra la réponse du serveur
            );
            break;
    }


}