<?php

class ConfirmController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
        // proteger l'acces a la page 
        // empeche les paniers vides
        if ( isset($_SESSION['cart']) == false || empty($_SESSION['cart'] ))
        {
            $http->redirectTo('/');    
        }
        
        $cart = $_SESSION['cart'];
        
        return [ 'cart' => $cart ];
    }

    public function httpPostMethod(Http $http, array $formFields)
    {
    
    	 
    	 
    }
}