'use strict';

document.addEventListener('DOMContentLoaded', function()
{
    let select = document.getElementById('product');
    
    select.addEventListener('change' , onChange );
    
     // declencher une premiere requete AJAX au demarage de la page
    // declencher un faux evenement change
    
    let event = new Event('change');
    select.dispatchEvent(event);
    
    
    function getProduct( json )
    {
        let product = JSON.parse(json);
        
        console.log(product);
        
        $("#name").text(product.title);
        $("#description").text(product.description);
        $("#price").text(product.price);
        $("#photo").attr('src', getWwwUrl()+'/images/meals/'+product.photo);
    }
    
    function onChange()
     {
        let id = select.value;
        
        // variable utilisée pour transmettre l'id a PHP
        let data = { 'id' : id };
        
        // requestUrl => http://live-33.sites.3wa.io/projet/Restaurant%20(Code%20D%C3%A9part)/index.php
        let url = getRequestUrl() +'/product';
        $.get( url , data ,  getProduct );
    }
});