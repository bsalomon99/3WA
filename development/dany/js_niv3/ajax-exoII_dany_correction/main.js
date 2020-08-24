'use strict';



$(function() {

    // fonction de traitement AJAX
    // le parametre json va automatiquement recevoir les données de la page products.php
    function getProducts(json) {
        console.log(json);
        let products = JSON.parse(json);
        console.log(products);

    
        var html = "<table>";
        
        html += "<tr><th>Nom </th> <th> Description </th> <th> Prix </th></tr>";
        
        for (let i = 0; i < products.length; i++) 
        {
            html += "<tr>";
            //html = html + "<tr>";
            html += "<td>"+products[i].productName+"</td>";
            html += "<td>"+products[i].productDescription+"</td>";
            html += "<td>"+products[i].MSRP+"</td>";
            html += "</tr>";
        }
        
        html +="</table>";
        
        $("#products").html(html);
        
    }

    // Poser un event listener au clic sur le boutton

    function onClickLoadProducts() {
        console.log("click");

        // Charger la liste de produits en AJAX

        $.get('products.php', getProducts);
    }
    
  
    function onClickSearch() {
        // recuperer la valeur de l'input
    
        /*let input = document.getElementById('max-price');
        let maxPrice = input.value;*/
        
        let maxPrice = $("#max-price").val();
        console.log(maxPrice);
        
        // requete AJAX avec envoi
        
        // ranger la données dans un objet
        
        let data = { price : maxPrice }
        
        $.get('search.php', data , getProducts );
        
        
    }
    
    // Code principal

    $("#load").click(onClickLoadProducts);
    $("#search").click( onClickSearch );
    
    
    
})
       
    
