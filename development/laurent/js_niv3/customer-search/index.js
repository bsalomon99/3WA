const form = document.querySelector('form');

// form.addEventListener('key', vaChercher);

const input = document.querySelector('input[name=customer]');
input.addEventListener('keyup', vaChercher);

function vaChercher(event) {
    event.preventDefault();

    let url = 'https://blandine.sites.3wa.io/development/live33/js/js_niv3/customer-search/index.php';

    const name = this.value;

    let formdata = new FormData();

    formdata.append('customer', name);


    let request = new Request(url, {
        method: 'POST',
        body: formdata,
        mode: 'cors'
    });


    fetch(request)
        .then(response => {
            return response.json();
        })
        .then(data => {
            document.querySelector('#response').innerHTML = '';

            data.forEach(customer => {
                createUl(customer);
            });
        })
        .catch(error => console.error(error));
}


function createUl(customer) {
    const resp = document.querySelector('#response');

    resp.innerHTML += `
    <p>
        <a
            class="recuperer"
            href="https://blandine.sites.3wa.io/development/live33/js/js_niv3/customer-search/index.php?cust=${customer.customerNumber}">${customer.customerName}
        </a>
    </p>`;

    const links = document.querySelectorAll('.recuperer');

    links.forEach(link => {
        link.addEventListener('click', getOneCustomer);
    });
}



function getOneCustomer(event) {
    event.preventDefault();

    const url = this.href;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // selectionner la ul
            // on fait qqchose avec data
            const ul = document.querySelector('#customer');

            ul.innerHTML = `
                <li>${data.customerName}</li>
                <li>${data.addressLine1}</li>
                <li>${data.phone}</li>
                <li>${data.postalCode}</li>
                <li>${data.state}</li>
                <li>${data.city}</li>
                <li><button id="edit">Editer</button></li>
            `;

        })
        .catch(err => console.error(err));

}


















function vaChercher(event) {
    event.preventDefault();
    
    let url = 'https://blandine.sites.3wa.io/development/live33/js/js_niv3/customer-search/index.php';
    
    
    //const name = document.querySelector('input[name=customer]').value;
    const name = this.value;
    
    let formdata = new FormData();
    
    formdata.append('customer', name);
    
    let request = new Request(url, {
        method: 'POST',
        body: formdata,
        mode: 'cors'//optional: cross origin ressource sharing
        
    });
    
    fetch(request)
        .then(response => {
            return response.json();
    })
    .then(data => {
        afficheClients(data);
    })
    .catch(error => console.error(error));
}



function afficheClients(clients) {
    clients.forEach(client => {
        createUl(client);
    });
}

function createUl(client) {
    const ul = document.createElement('ul');
    
    //ul.setAttribute('data-customer', name);
    ul.innerHTML = `<li>${customer.name}</li>`;
    return ul;
}