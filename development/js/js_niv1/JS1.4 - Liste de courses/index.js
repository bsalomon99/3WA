'use strict';   // Mode strict du JavaScript


let listeDeCourses = ['fraises', 'oranges', 'citrons', 'abricots', 'miel', 'du virus en promo'];

let listeDeCoursesCopie = ['savon', 'eau de javel', 'essence de lavande', 'shampoing', 'lessive'];

// Ajouter un produit par son nom
function ajouterUnProduitALaListe(produit) {
    listeDeCourses.push(produit);
}

ajouterUnProduitALaListe('pommes');


function supprimerUnProduitDeLaListe(produit) {
    
    let articleASupprimer = listeDeCourses.indexOf(produit);
    
    if(articleASupprimer >= 0) {
        
        listeDeCourses.splice(articleASupprimer,1);
        
    } else {
    
        document.write('L\'article n\'est pas dans la liste.');
        return;
    }
}

/// Afficher la taille 
function tailleListeDeCourses () {
    return listeDeCourses.length;
}

const tailleListe = tailleListeDeCourses();

document.write(`La liste contient ${tailleListe} articles :`);

// et le contenu de la liste <ul>
function contenuListeDeCourses(liste) {
    
    document.write('<ul>');
    
    for(let produit of liste) {
        
        document.write(`<li>${produit}</li>`);    
            
    }
    
    document.write('</ul>');    
}

contenuListeDeCourses(listeDeCourses);


contenuListeDeCourses(listeDeCoursesCopie);


supprimerUnProduitDeLaListe();

/////////////////////////////////////////////////////////////////////////

// CODE DE LAURENT




// JS1.4 - Liste de Courses
// Enoncé

// Gérer une liste de courses en affichant les informations dans la console du navigateur web.
// Créer des noms de fonctions clairs, en rapport avec la fonctionnalité implémentée.
// La liste de courses est stockée dans une seule variable.

let listeDeCourses = ['sopalin', 'oranges', 'citrons', 'savon', 'eau de javel', 'du virus en promo'];

// Ajouter un produit par son nom
function ajouterUnProduitALaListe(liste, produit) {
    liste.push(produit);
}

ajouterUnProduitALaListe(listeDeCourses, 'pommes');


if(confirm('Souhaitez vous effacer un produit')) {
    let produit = prompt('Entrez le nom du produit');
    
    
    supprimerUnSeulProduit(produit, listeDeCourses);
}


//         Supprimer un produit ayant un nom spécifique
function supprimerUnSeulProduit(produit, liste) {
    
    // trouver index du produit a supprimer
    let index = liste.indexOf(produit);
    
    // Si l'article a supprimer != 0 ou > 0
    if(index >= 0) {
        // Supprimer le produit grace a son index
        return liste.splice(index, 1);
    }
    
    return document.write('L\'article n\'existe pas');
    
}

supprimerUnSeulProduit('bananes', listeDeCourses);

//         Supprimer tous les produits
function supprimerTousLesProduitsDeLaListe(liste) {
    liste.length = 0;    
}

// supprimerTousLesProduitsDeLaListe(listeDeCourses);


/// Afficher la taille  
function afficherTailleListe(liste) {
    return liste.length;
}


//Afficher le contenu de la liste <ul>
function afficherProduitsDeLaListe(liste) {
    // creer ul
    
    for(let produit of liste) {
        document.write(`<li>${produit}</li>`);
    }
    
    //fermer ul
}

afficherProduitsDeLaListe(listeDeCourses);









