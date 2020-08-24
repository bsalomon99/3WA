'use strict';

/////////////////////////////////////////////////////////////////////////////////////////
// FONCTIONS                                                                           //
/////////////////////////////////////////////////////////////////////////////////////////

function isFieldEmpty( name, errorMessage , event )
{
    let field = document.getElementById(name);
    
    if ( field.value.length == 0 )
    {
        document.getElementById(name+'_error').textContent = errorMessage;
        field.classList.add('error');
        // annuler un evenement
        // bloquer le submit du formulaire
        event.preventDefault();
    }
}

function resetErrors()
{
    // retirer les bordures rouges
    
    let inputs = document.querySelectorAll('#register input');
    
    for( let i = 0; i < inputs.length; i++ )
    {
        inputs[i].classList.remove('error');
    }
    
    // retirer les textes 
    
    let texts = document.querySelectorAll('#register fieldset p');
    
    for( let i = 0; i < texts.length; i++ )
    {
        texts[i].textContent = "";
    }
}

function onRegisterSubmit( event )
{
    resetErrors();
    
    isFieldEmpty( 'firstname', "Le prenom ne doit pas etre vide", event );
    isFieldEmpty( 'lastname', "Le nom ne doit pas etre vide", event );
    isFieldEmpty( 'address', "L'adresse ne doit pas etre vide", event );
    isFieldEmpty( 'phone', "Le telephone ne doit pas etre vide", event  );
    isFieldEmpty( 'email', "L'email ne doit pas etre vide", event  );
    isFieldEmpty( 'password', "Le mot de passe ne doit pas etre vide", event  );
    isFieldEmpty( 'city', "La ville ne doit pas etre vide", event  );
    isFieldEmpty( 'zipcode', "Le code postal ne doit pas etre vide", event  );
    
    let zipcode = document.getElementById('zipcode');
    
    if ( zipcode.value.length != 5 )
    {
        document.getElementById('zipcode_error').textContent = "Le code postal doit faire 5 caracteres";
        zipcode.classList.add('error');
        // annuler un evenement
        // bloquer le submit du formulaire
        event.preventDefault();
    }
}


/////////////////////////////////////////////////////////////////////////////////////////
// CODE PRINCIPAL                                                                      //
/////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded' , function()
{
    let form = document.getElementById('register');
    
    form.addEventListener('submit', onRegisterSubmit);
})