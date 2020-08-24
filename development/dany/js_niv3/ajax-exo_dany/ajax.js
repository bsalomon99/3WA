
const button = document.querySelector('.btn');

button.addEventListener('click', onClick);

function onClick () {
    $.get('ajax.php', ajaxLoaded);
    let products = JSON.parse(data);
}


function ajaxLoaded(data) {
    
    for(let i = 0; i < data.length; i++) {
        $('#list').append(`<li>${data[i].productName}</li>`);
    }
    
}

