# Le concept d'AJAX

AJAX (Asynchronous JavaScript and XML) est le résultat d'un ensemble de technologies permettant d'***envoyer une requête HTTP en JavaScript***.
Et envoyer des requêtes HTTP en JavaScript va permettre de faire des aller-retours entre le client et le serveur de manière totalement transparente pour l'internaute,
puisque la page n'a pas besoin d'être rechargée. 

On va par exemple pouvoir aller chercher côté serveur des données au format XML, JSON, mais aussi HTML, ou encore texte simple.

## Les outils

- ***XMLHttpRequest*** est la classe JavaScript qui permet d'envoyer des requêtes AJAX.
- Il existe également une nouvelle API, ***fetch***, qui utilise la nouvelle notion de ***promesse***
- Des librairies comme ***Axios*** utilisent également le concept de promesse.
- ***jQuery*** propose des fonctions très simples d'utilisation pour envoyer des requêtes AJAX, comme **$.ajax()**, **$.get()**, **$.post()** ou encore **$.getJSON()**

Ajax va pouvoir récupérer ou transmettre des données sur un serveur, à partir d'un événement javaScript (moteur AJAX) programmé sur la page.

![Application AJAX (Source : Sutterlity Laurent)](resources/ajax-model.jpg)

## Format des données échangées

L’objet XMLHttpRequest permet d’échanger des informations sous différents formats :

1. Texte simple (impossible à mettre en forme)
2. HTML (peut se révéler assez lourd quand il s'agit d'un grand volume de données)
3. XML idem HTML (permet de manipuler les données avec les fonctions DOM)
4. JSON leger, il permet de structurer l'information en utilisant la syntaxe objet de JavaScript

## jQuery.get()

La méthode $.get(), fournie par la librairie jQuery, permet :

1. d'envoyer une ***requête HTTP*** avec la ***méthode GET*** vers l'***url*** passée en premier paramètre, par exemple pour recevoir des données du serveur
2. d'exécuter une fonction de ***callback*** dont le premier argument (data) contient les données reçues du serveur. Cette fonction ne sera exécutée que lorsque la réponse du serveur sera reçue. 


        $.get( 'url', function( data )
        {
          // Insertion dans le document
          $( "#ajax-target" ).html( data );
        });

## jQuery.getJSON()

La méthode $.getJSON(), fournie par la librairie jQuery, permet la récupération de données JSON automatiquement désérialisées.

        $.getJSON('url', function( data ) {
          // Lire les données contenues dans data en javaScript : par exemple un tableau
          data.forEach( function( item ){
            ....
          })
        });
        
## jQuery.post()

La méthode $.post(), fournie par la librairie jQuery, permet l'envoi de requête HTTP avec la méthode POST.
On l'utilisera notamment pour envoyer des données vers le serveur. Les données voyageront dans le corps de la requête.
Côté serveur elles seront récupérées dans la super globale $_POST.

Les données transmises viendront en second paramètre sous forme d'objet, la fonction de callback passera en troisième paramètre.

        $.post('url', {data: myData}, function( response ) {
          console.log(response);
        });