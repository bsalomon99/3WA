/////////////////////////////  Déclarations (variables -> let et const) /////////////////////////////

// La liste de courses est stockée dans une seule variable. -> array
const list = []; // short
// const list = new Array(); // long

/////////////////////////////  Déclarations (functions) /////////////////////////////
/**
 * Ajouter un produit par son nom
 */
function addItem(product) {
    // Prendre le paramètre, on va l'insérer à l'aide d'une fonction provenant de l'objet Array. (push)
    list.push(product);
}
/**
 * Supprimer un produit ayant un nom spécifique
 */
function removeItem(product) {
    // Déterminer si l'éléement existe
    let indexToRemove = list.indexOf(product);
    
    // test si suppression ou msg error
    if (indexToRemove >= 0 ) {
        list.splice(indexToRemove, 1);
    } else {
        console.error("L'élément n'existe pas dans la liste !");
    }
}
/**
 * Supprimer tous les produits
 */
function removeAll() {
    list.splice(0);
}
/**
 * Afficher la taille et le contenu de la liste
 */
function displayList() {
    console.log(`La liste contient : ${list.length} produits !`);
    console.log(list);
}
/////////////////////////////  Programme (dérouler des actions à mener) /////////////////////////////
// Start
console.clear(); // vider la console
displayList();
// Pour vérifier le bon fonctionnement du programme il faut écrire du code de test, par exemple :
// 1 - Ajouter 4 produits simples puis afficher les informations
// Appeler la fonctionnalitée d'ajout 4 fois pour remplir la liste
addItem("Chocolat");
addItem("café");
addItem("jus d'orange");
addItem("kinder");
// Afficher l'état actuel de la liste
displayList();

// 2 - Demander à l'utilisateur de saisir le nom d'un produit, essayer de supprimer celui-ci puis afficher les informations
// Poser une question à l'utilisateur pour supprimer un produit, si celui-ci n'existe pas, afficher un message d'erreur
// Longue
let itemToRemove = prompt("Saisissez le nom d'un produit à supprimer")
removeItem(itemToRemove)
// Courte
//removeItem(prompt("Saisissez le nom d'un produit à supprimer"))
// Afficher l'état actuel de la liste
displayList()

// 3 - Supprimer tous les produits puis afficher les informations
// Appel de la fonction qui vide la liste
removeAll()
// Afficher l'état actuel de la liste
displayList()