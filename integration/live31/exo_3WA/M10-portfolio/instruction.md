# INSTRUCTIONS
Découverte des animations, des transformations et des transitions CSS
Rappel : lorsque c'est indiqué "par défaut" c'est que cela est dans le body, sauf si c'est sur des liens

## HTML
- Utilisation de la balise figure et figcaption pour les images dans la seconde section

## CSS
- Utilisation des transitions et transformations en CSS
- Largeur du container limité à 1100px maximum en desktop

- Police utilisé : 
    - Par défaut : "Bree Serif"

- espacement des lignes :
    - par défaut : line-height: 2;

- Taille de police **(à convertir en rem)** :
    texte par défaut: 18px (exemple : si astuce du font-size:62.5% sur html, alors 18px = 1.8rem. Sinon si pas astuce, alors 18px 1.125rem)
    nav : 20px
    texte à côté du logo et h1 : 40px
    h2 : 35px
    h3 de la section compétences : 30px
    icône : 25px
    h3 en-dessous des icônes et h3 des artiles : valeur de la taille par défaut
    placeholder input et textarea : 16px
- Dimensions hauteur largeur du cercle autour des icônes : 75px;

- couleurs :
    - Couleur texte par défaut : #999
    - Couleur par défaut des liens : rgba(246, 36, 89,1)
    - Couleur des liens dans le header : #999
    - Couleur des liens dans le header en hover : rgba(246, 36, 89,1)
    - Couleur h1, h2, h3 : #f62459
    - Couleur des h3 dans la section compétences : #777
    - Couleur bordure h2 : rgba(153,153,153,0.1)
    - Couleur dégradé : #999, #000
    - Couleur de fond du lien "Découvrez-moi" et des liens "En savoir plus" (en hover) : #f62459
    - Couleur de fond dans les cercles : rgba(153,153,153,0.1);
    - Couleur des bordures des cercles : rgba(153,153,153,0.2);
    - Couleur des icônes : #999
    - Couleur des placeholder : #666
    - Couleur de fond bouton submit : #f62459
    - Couleur de fond bouton reset : #999

## EFFET CSS
- Effet zoom sur le logo au passage de la souris
- Effet de translation au passase de la souris sur les liens dans la barre de nav
- Animation "rebond" sur les icônes de la troisèmes section au passage de la souris
- Effet hover (au passage de la souris)
    - changement de couleur
        - sur John Doe, 
        - les liens dans la nav 
        - les liens "boutons" En savoir plus (changement de couleur du fond et du texte)
    - logo :
        - zoom de 1.3 sur le losange
    - nav :
        - texte et icones descendent de 10px

- appliquer une transition sur le selecteur universel
    - transition: all 0.3s ease 0s;

## BONUS
- Faire un effet rebond "bounce" en CSS sur les 3 petites icones de "On discute / on tente / on code".
