<?php

class SendcartController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {

    }

    public function httpPostMethod(Http $http, array $formFields)
    {
        // deserialise le panier recu depuis JS
 	    $cart = json_decode($_POST['cart']);
 	    
 	    // stockage du panier dans la session
 	    $_SESSION['cart'] = $cart;
 	    
 	    echo 'true';
 	    die();
    }
}