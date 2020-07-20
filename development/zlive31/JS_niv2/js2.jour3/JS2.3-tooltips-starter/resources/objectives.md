# Tooltips

## Contexte
Dans le cadre de la réalisation d'un site proposant des cours de français 
et de littérature, nous devons afficher des textes avec certains mots soulignés.
Ces mots soulignés possèdent une définition qu'il va falloir afficher au clic 
sur le mot dans une info-bulle (tooltip).

***Précisions sur le comportement attendu :***

- Au clic sur un mot souligné, sa définition apparaît dans une info-bulle placée au-dessus du mot cliqué. 
Toutes les autres info-bulles sont fermées. Il ne peut pas y avoir 2 info-bulles ouvertes en même temps. 
- Au clic sur une info-bulle, celle-ci se referme.
- Au clic n'importe où ailleurs sur la page, si une info-bulle était ouverte, elle se ferme.

## Indications
### Liste des définitions

- ***Commère*** : Personne curieuse et bavarde qui colporte les nouvelles partout (se dit aussi d'un homme).
- ***Maint*** : En grand nombre : En maint endroit. Maintes et maintes fois. À maintes reprises.
- ***Pèlerine*** : Personne qui va visiter des hauts lieux de piété dans un but essentiellement religieux.
- ***Nuës*** : Nuage de grande étendue, généralement épais et sombre, annonciateur de pluie ou d'orage.

### Placement des définitions dans le HTML
Côté HTML on placera les mots qui possèdent une définition dans une balise 
&lt;span&gt;. La définition, masquée dans un premier temps, sera placée elle aussi
 dans une balise 
&lt;span&gt; avec la classe "tooltip", à l'intérieur de la première, puisqu'elle dépend de celle-ci pour son
 placement. La définition d'un mot apparaîtra juste au dessus du mot en 
 question.

Ce qui donnera par exemple : 

***&lt;span&gt;Commère&lt;span class="tooltip"&gt;Personne curieuse et bavarde qui colporte les nouvelles partout (se dit aussi d'un homme).&lt;/span&gt;&lt;/span&gt;***

La classe 'tooltip' n'est pas absolument indispensable mais elle permettra de faciliter la sélection 
des info-bulles. 

### Construction des tooltips
Pour ne pas encombrer le code HTML, la balise &lt;span class="tooltip"&gt; contenant la définition du mot ne sera
pas présente dans le code source HTML : on va les construire dynamiquement en JavaScript !

Comment stocker le texte de la définition de chaque mot ? 

Pour stocker une information dans le HTML, le plus approprié est d'utiliser un attribut data. On
va donc ajouter aux balises &lt;span&gt; contenant le mot à cliquer un attribut data 'tooltip'.
Cet attribut data permettra à la fois de stocker la définition d'un mot et de repérer les mots à cliquer.
Ce qui donnera  : 

***&lt;span data-tooltip="Personne curieuse et bavarde qui colporte les nouvelles partout (se dit aussi d'un homme)."&gt;Commère&lt;/span&gt;***

## Conseils
### Découper le travail en plusieurs petites étapes
Essayez de découper en petits morceaux une tâche qui 
paraît trop importante de prime abord si on la traite dans sa globalité.
Voici une proposition de découpage.

1. Préparation des ***feuilles de style CSS*** : c'est toujours plus agréable pour
 faire des tests d'avoir quelque chose de visuellement correct.
2. Construire les tooltips dynamiquement en JavaScript 
3. Masquer tous les tooltips au chargement de la page
4. Gérer le click sur un mot (afficher "Mot cliqué!" dans la console)
5. Faire apparaître le tooltip au click sur un mot (ne pas oublier de fermer tous les autres)
6. Gérer le click sur les tooltips pour les fermer
7. Gérer le click ailleurs sur la page

### Gérer des événéments sur des éléments imbriqués
Vous allez devoir gérer le clic sur des éléments imbriqués les uns dans les autres.
La ***propagation des événements*** va faire que certains clics vont déclencher des actions que vous ne souhaiteriez pas.

Il existe plusieurs outils pour gérer ce comportement : 

- gérer la ***propagation des événements*** : capture ou bouillonnement, arrêt de la propagation manuelle, etc
- utiliser la ***délégation d'événements*** : plutôt que d'installer un gestionnaire d'événement au clic sur plusieurs éléments, 
on va en installer un seul sur un élément englobant. A l'intérieur du gestionnaire d'événement on va ensuite faire le tri pour
savoir quel élément à réellement été cliqué...et agir en conséquence !