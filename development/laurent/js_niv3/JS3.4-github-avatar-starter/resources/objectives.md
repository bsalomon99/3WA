# Github Avatar

## Recherche d'utilisateurs Github
L'objectif est de créer un moteur de recherche d'utilisateurs Github.

A partir d'un nom d'utilisateur, il va falloir lancer une recherche et afficher l'avatar de l'utilisateur recherché,
avec un lien sur l'avatar vers la page Github de l'utilisateur.

Pour effectuer cette recherche, nous disposons d'une API offerte par Github.
Une API est un service qui va nous founir des données et qui peut être interrogé
comme une page web, via une URL et en utilisant le protocole HTTP. On peut donc interroger une telle API simplement en faisant une requête Ajax.

Documentation de l'API : https://developer.github.com/v3/

## Interface Utilisateur
L'interface présentera un formulaire avec :

 - un champ textuel pour chercher un utilisateur à partir de son login
 - un bouton pour lancer la recherche
 - un espace pour afficher l'avatar de l'utilisateur trouvé avec un lien dessus vers sa page Github

 ### Indications complémentaires

 - Au clic sur l'avatar, la page Github de l'utilisateur s'ouvre dans un nouvel onglet
 - Il faut gérer le cas où l'utilisateur n'existe pas et n'est pas trouvé par l'API. Que se passe-t-il dans ce cas-là ?

## Choix techniques
Il existe plusieurs solutions techniques pour envoyer une requête AJAX.
Vous découvrirez ici la méthode historique en JavaScript : la classe ***XMLHttpRequest*** !

Il peut être utile de créer une ***fonction utilitaire*** pour envoyer une requête AJAX ! 

## Mockups

![Mockup 1](resources/mockups/mockup1.jpg)
![Mockup 2](resources/mockups/mockup2.jpg)