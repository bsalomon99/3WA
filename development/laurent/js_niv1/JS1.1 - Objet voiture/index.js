/*JS1.1 - Objet Voiture
Énoncé
Créer puis afficher en HTML un objet représentant une voiture :

La marque de la voiture
Son année de fabrication
Sa date d'achat
La liste des passagers (au moins 2), avec le prénom de chacun des passagers
Détails
Afficher les propriétés de l'objet voiture sous la forme d'une liste HTML
On peut représenter n'importe quelle date en JavaScript en donnant une chaîne de caractères à la création d'une instance de la classe Date :

    // Représente la date du 5 avril 2014, format américain YYYY-MM-DD.
    var myBirthday = new Date('2014-04-05');
 
Rappels
On peut stocker un objet dans un tableau tout comme on peut stocker un tableau dans un objet...*/

const myCar = {
    marque: 'Peugeot',
    dateFab: '2015',
    dateAchat: '2018',
    passagers: ['Rémi', 'Marie', 'Sarah']
};

document.write(`La marque de ma voiture est ${myCar.marque}. 
    <br> La date de fabrication est ${myCar.dateFab}.
    <br> La date d'achat est ${myCar.dateAchat}.
    <br> Liste de mes passagers : ${myCar.passagers[0]}, ${myCar.passagers[1]}, ${myCar.passagers[2]}.`);
