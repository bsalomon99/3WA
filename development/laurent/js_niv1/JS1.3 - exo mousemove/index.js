'use strict';   // Mode strict du JavaScript



let holidayList = ['Greece', 'Spain', 'France', 'UK', 'Ireland', 'Scotland'];
let button = document.querySelector('#btn');


function displayList () {
    
    document.write('<ul>');
    for ( let item of holidayList) {
        document.write('<li>' + item + '</li>');
        // methode moderne: `<li>${item}</li>`
    }
    
    document.write('</ul>');
}

button.addEventListener('mousemove', displayList);









