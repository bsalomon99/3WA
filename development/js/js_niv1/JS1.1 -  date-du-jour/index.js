/*afficher dynamiquement la date du jour en HTML sous la forme “Nous sommes le Mardi 11 Février 2014”.

Détails
Il va falloir se servir de tableaux pour afficher en français les noms des jours de la semaine et des mois...
Rappels
La classe Date possède une méthode pour extraire chaque partie de la date et de l'heure
Attention aux valeurs renvoyées par chaque méthode, bien lire la documentation*/

const aujourdhui = new Date();

const day = aujourdhui.getDay();

const jour = aujourdhui.getDate();

const month = aujourdhui.getMonth();

const year = aujourdhui.getFullYear();




const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

console.log(months[month], days[day], aujourdhui.getFullYear());

document.write(`Nous sommes le ${days[day]} ${jour} ${months[month]} ${year}.`);




console.log(months[month], days[day], jour, year);
