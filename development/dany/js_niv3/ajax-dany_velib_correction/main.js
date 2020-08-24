'use strict';

const CITY = 'nantes';
const API_KEY = 'b91888dba6ab242e1f13b377cb8b47b13aec62e0'

var map;
var marker;

// camelCase : displayStations
// snake_case : display_stations

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

    function displayStation(station) {
        // rendre visible la div de detail
        $("#station").show();

        $("#station h1:first-child").text(station.name)
        $("#available-bikes").text(station.mainStands.availabilities.bikes)
        $("#address").text(station.address)
        $("#free-slots").text(station.mainStands.availabilities.stands)
        $("#GPS").text(station.position.latitude + ',' + station.position.longitude)
        
        // affichage de la carte
        
         // initialisation

        if( map == null )
        {
            map = L.map('map').setView([station.position.latitude, station.position.longitude], 14);
        
            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicnplIiwiYSI6ImNrZDh1MnIwYTAxbXkzM3J4MzQ4OGNnZDEifQ.p3Jqg1aMILv4CRHydga2gQ'
            , {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'pk.eyJ1IjoicnplIiwiYSI6ImNrZDh1MnIwYTAxbXkzM3J4MzQ4OGNnZDEifQ.p3Jqg1aMILv4CRHydga2gQ'
            }).addTo(map);
            marker = L.marker([station.position.latitude, station.position.longitude]).addTo(map);
        }
        else
        {
            map.panTo([station.position.latitude, station.position.longitude])
            marker.setLatLng([station.position.latitude, station.position.longitude])
        }
        
    }

    // Charge la liste des stations via la web api de JCDecaux

    let url = 'https://api.jcdecaux.com/vls/v1/stations?apiKey=' + API_KEY + '&contract=' + CITY;

    $.get(url, displayStations);

    // poser des listeners sur tout les elements ( li ) presents et futurs
    // delegate event
    $(document).on('click', "li", function() {

        // recuperer le numero de la station
        // lire le dataset number sur le li
        console.log($(this).data('number'));

        let number = $(this).data('number');

        let url = 'https://api.jcdecaux.com/vls/v3/stations/' + number + '?contract=' + CITY + "&apiKey=" + API_KEY;

        $.get(url, displayStation);
    });

   
})
