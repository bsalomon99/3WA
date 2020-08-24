'use strict';

$(function() {

    // fonction de traitement AJAX
    // le parametre json va automatiquement recevoir les données de la page products.php
    function getSites(json) {
        
        let sites = json;
        console.log(json);
        
        var html = "<ul>";
        
        
        html += "<li> Adresse </li>";
        
        for (let i = 0; i < sites.length; i++) 
        {
            html += "<li>";
            //html = html + "<tr>";
            
            html += "<li>"+sites[i].address+"</li>";
            
            html += "</li>";
        }
        
        html +="</ul>";
        
        $("#sites").html(html);
        
    }
    function displayStation (sites) {
    for (let i = 0; i < sites.length; i++) {
        $("#sites ul").append('<li data-number="' + sites[i].number + '">' + '</li>')
    }
    
    $(document).on('click', "li", function(){
        alert('click');
        console.log($(this).data('number'));
    });
    

    function onClickLoadSites() {
        console.log("click");

        // Charger la liste des sites en AJAX

        $.get('https://api.jcdecaux.com/vls/v1/stations?contract=lyon&apiKey=09c622072c1defee1523b206c49f56bbf7c84fc0', getSites);
    }
    
    
    $.get('https://api.jcdecaux.com/vls/v3/stations/{station_number}?contract=lyon&apiKey=09c622072c1defee1523b206c49f56bbf7c84fc0', displayStation);
    
    
  // Code principal
    // Poser un event listener au clic sur le boutton
    $("#load").click(onClickLoadSites);
    
    stationNumber
    
    
})
       
    
