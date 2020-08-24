'use strict';

/*
// attendre que la page soit chargée avant d executer le code principal

document.addEventListener('DOMContentLoaded', function() {

    // Poser un event listener au clic sur le boutton

    function onClickLoadProducts() {
        console.log("click")
    }

    $("#load").click(onClickLoadProducts);


});

$(document).load(function()
{
     // Poser un event listener au clic sur le boutton

    function onClickLoadProducts() {
        console.log("click")
    }

    $("#load").click(onClickLoadProducts);
})*/

$(function() {

    // fonction de traitement AJAX
    // le parametre json va automatiquement recevoir
    // les données de la page products.php
    function getProducts(json) {
        console.log(json);
        let products = JSON.parse(json);
        console.log(products);

        /*
        let table = document.createElement('table');
        let div = document.getElementById('products');
        div.appendChild(table);
       
        
        for (let i = 0; i < products.length; i++) 
        {
            let tr = document.createElement('tr');
            table.appendChild(tr);

            let td = document.createElement('td');
           
            td.innerHTML = products[i].productName;
            tr.appendChild(td);
            
            let td2 = document.createElement('td');
            td2.innerHTML = products[i].productDescription;
           
            tr.appendChild(td2);
            
            let td3 = document.createElement('td');
            td3.innerHTML = products[i].MSRP;
           
            tr.appendChild(td3);

        }
        */
        /*
        
        let div = document.getElementById('products');
        
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
        
        div.innerHTML += html;*/
        
        
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

    $("#load").click(onClickLoadProducts);
})
