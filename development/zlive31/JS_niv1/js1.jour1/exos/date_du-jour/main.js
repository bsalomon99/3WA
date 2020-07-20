const dayNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

// Création d'une instance de la classe Date.
let date = new Date();

// short version.
document.write(`Nous sommes le ${dayNames[date.getDay()]} ${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`);

// version du corrigé
document.write(". Nous sommes le " + dayNames[date.getDay()] + " ");
document.write(date.getDate() +"");
document.write(" " + monthNames[date.getMonth()]);
document.write(" Oui, je sais, je me répète.");

// test on a single line
document.write("Le " + dayNames[date.getDay()]+ " " + date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear());