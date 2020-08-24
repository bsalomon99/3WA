// Création d'un tableau (objet de la classe Array) pour stocker les jours de la semaine
const weekDays = new Array();     // syntaxe longue

// La syntaxe raccourcie est : weekDays = [];

// Création d'une constante contenant l'indice de 'Dimanche' dans le tableau weekDays
const daySunday = 6;

// Affectation de valeurs au tableau.
weekDays[0] = 'Lundi';
weekDays[1] = 'Mardi';
weekDays[2] = 'Mercredi';
weekDays[3] = 'Jeudi';
weekDays[4] = 'Vendredi';
weekDays[5] = 'Samedi';
weekDays[6] = 'Dimanche';

/**
 * Il est également possible de déclarer un tableau directement avec ses éléments à l'intérieur :
 *
 *      const weekDays = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
 */

/*
 * Affichage du contenu d'une partie du tableau directement dans la page HTML.
 *
 * La variable daySunday est utilisée comme un indice dans le tableau weekDays.
 */
document.write('Le premier jour de la semaine est le ' + weekDays[0] + ' ');
document.write('et le dernier jour de la semaine est le ' + weekDays[daySunday] + '.');