// setTimeout




//const button = document.querySelector('button');



// setTimeout

// button.addEventListener('click', react);



// function react() {
    
//     setTimeout(function() {
//         console.log(button);
//     }, 1000);
    
// }

// setInterval
/*
const interval = setInterval(react, 1000);

function react() {
    log();
}

function log() {
    console.log(button);
    
    setTimeout(function() {
        
        clearInterval(interval);
        
    }, 5000);
    
}
*/    
     
    
const div = document.querySelector('#date');
let p = document.createElement('p');
let string = '';

let date =  '';

setInterval(function() {
    date = new Date();
    
    string = `${date.getHours()} ${date.getMinutes()} ${date.getSeconds()}`;
    
    p.innerText = string;
    
}, 1000);

div.appendChild(p);

