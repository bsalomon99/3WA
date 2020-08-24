'use strict';

$(function() {

    // fonction de traitement AJAX
    // le parametre json va automatiquement recevoir les données de la page products.php
    function getSites(json) {
        
        let sites = json;
        console.log(json);
        
        var html = "<table>";
        
        
        html += "<tr> <th> Adresse </th> </tr>";
        
        for (let i = 0; i < 20; i++) 
        {
            html += "<tr>";
            //html = html + "<tr>";
            
            html += "<td>"+sites[i].address+"</td>";
            
            html += "</tr>";
        }
        
        html +="</table>";
        
        $("#sites").html(html);
        
    }

    // Poser un event listener au clic sur le boutton

    function onClickLoadSites() {
        console.log("click");

        // Charger la liste des sites en AJAX

        $.get('https://api.jcdecaux.com/vls/v1/stations?contract=lyon&apiKey=09c622072c1defee1523b206c49f56bbf7c84fc0', getSites);
    }
    
  
    
    
    // Code principal

    $("#load").click(onClickLoadSites);
    
    
    
    
})
       
    
