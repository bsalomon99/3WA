'use strict';   // Mode strict du JavaScript

let number = '';

do { 
    number = parseInt(prompt('entrez un nombre pour la table de mult'))
    
} while (isNaN(number) );

function multiply () {
    document.write('<table>');
    
    for(let i = 1; i <= number; i++) {
        document.write ('<tr>');
        
        for(let j = 1; j <= number; j++) {
            document.write('<td>'+ (i * j ) + '</td>');
          }
          
          document.write('</tr>');
    }
    
    document.write('</table>');
    
}
multiply();
