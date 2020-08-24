'use strict';

$(document).ready(function() {

    function displayStations(stations) {
        // pas besoin de parser le resultat : JCDecaux indique au client qu'il renvoit du JSON
        // JQUERY parse le resultat automatiquement
        console.log(stations);

        // XML - CSV
        // XMLHttpRequest
        // AJAX : Asynchronous javascript and XML
        // AJAJ


        for (let i = 0; i < stations.length; i++) {
            $("#stations ul").append('<li data-number="' + stations[i].number + '"  >' + stations[i].address + '</li>')
        }



    }

    // Charge la liste des stations via la web api de JCDecaux

    let url = 'https://api.jcdecaux.com/vls/v1/stations?contract=lyon&apiKey=09c622072c1defee1523b206c49f56bbf7c84fc0';

    $.get(url, displayStations);

    // poser des listeners sur tout les elements ( li ) presents et futurs
    // delegate event
    $(document).on('click', "li", function() {

        // recuperer le numero de la station
        // lire le dataset number sur le li
        console.log($(this).data('number'));

    });

})
