
//https://api.jquery.com/
//https://api.jquery.com/




// ajouter un eventListener sur le formulaire

$form = $('form');
$form.on('submit', persistContact);


function persistContact() {
    e.preventDefault();
    $contact = $(this).serialize();
    console.log($contact);
    
    $contact2 = $(this).serializeArray();
    console.log($contact2);
    
    //contact2 = tableau avec des objets dedans
    
}

//console.log($contact2)[1].)


//$const email = this.querySelector('input[name=email]').value;
//$const firstName = this.querySelector('input[name=firstname]').value;

// fonction ajouter au localstorage


function addtoLocalStorage (key, value){
    localStorage.setItem('contacts', $constacts);
}

$const name = this.()