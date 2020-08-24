'use strict';   // Mode strict du JavaScript

// Creer le monde
// Commencer par afficher un ligne 
/***************
let number = '';
  
*/
// J'ouvre une balise table


let number = '';

do {
    number = parseFloat(prompt('entrez un nombre'));
} while (isNaN(number));


// J'ouvre une balise table
document.write('<table>');


// initialize une boucle avec le nombre de l'utilisateur
// le nombre va determiner la longueur de la boucle
//  cette boucle sert a generer des balises HTML qui se repetent.

for(let i = 1; i <= number; i++) {
    
    // si number est egal a 5, je genere 5 <tr></tr>
    document.write('<tr>');
        // Ici je dois genere les <td></td>
        // Le nombre de td est determine par number aussi
        for(let j = 1; j <= number; j++) {
            
            if(i === j) {
                document.write('<td class="idem">');
            }
            else {
            document.write('<td>');
            }
            
            document.write(i * j);
            document.write('</td>');
        }
    
    document.write('</tr>');
    
}
document.write('</table>');



