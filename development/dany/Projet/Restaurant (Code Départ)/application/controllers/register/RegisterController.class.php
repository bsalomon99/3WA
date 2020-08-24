<?php

class RegisterController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
        
        
        
    	/*
    	 * Méthode appelée en cas de requête HTTP GET
    	 *
    	 * L'argument $http est un objet permettant de faire des redirections etc.
    	 * L'argument $queryFields contient l'équivalent de $_GET en PHP natif.
    	 var_dump("httpget");
    	 */
    	 
    	 
    	 
    	 // transmettre une valeur du controleur vers la vue
    	 
    }

    public function httpPostMethod(Http $http, array $formFields)
    {
        /*
         var_dump($_POST);
    	
    	 * Méthode appelée en cas de requête HTTP POST
    	 *
    	 * L'argument $http est un objet permettant de faire des redirections etc.
    	 * L'argument $formFields contient l'équivalent de $_POST en PHP natif.
    	 */
    	 $firstname = $_POST['firstname'];
    	 $lastname = $_POST['lastname'];
    	 $date_of_birth = $_POST['year'] .'-'.$_POST['month'] .'-'.$_POST['day'];
         $address = $_POST['address'];
         $city = $_POST['city'];
         $zipcode = $_POST['zipcode'];
         $phone = $_POST['phone'];
         $email = $_POST['email'];
         $password = $_POST['password'];
         
         
         $errors = [];
    	 
    	 if( strlen($date_of_birth) != 10 && strlen($date_of_birth) != 9 && strlen($date_of_birth) != 8)
    	 {
    	     array_push($errors, 'erreur');
    	 }
    	 
    	 if ( empty($firstname) == true )
    	 {
    	     //afficher un message d'erreur
            array_push($errors, 'le prenom ne doit pas etre vide');
    	 }
    	 
    	 if ( empty($lastname) == true )
    	 {
    	     //afficher un message d'erreur
    	     array_push($errors,  'le nom ne doit pas etre vide');
    	 }
    	 
    	 if ( empty($address) == true )
    	 {
    	     //afficher un message d'erreur
    	     array_push($errors,  'l\'adresse ne doit pas etre vide');
    	 }
    	 
    	 if ( empty($zipcode) == true || strlen($zipcode) != 5 )
    	 {
    	     //afficher un message d'erreur
    	     array_push($errors,  'le code postal doit faire 5 caracteres');
    	 }
    	 
    	 if ( empty($city) == true )
    	 {
    	     //afficher un message d'erreur
    	     array_push($errors,  'la ville ne doit pas etre vide');
    	 }
    	 
    	 if ( empty($phone) == true || strlen($phone) < 8 || strlen($phone) > 15 )
    	 {
    	     //afficher un message d'erreur
    	     array_push($errors,  'le telephone doit faire entre 8 et 15 caracteres');
    	 }
    	 
    	 if ( empty($email) == true )
    	 {
    	     //afficher un message d'erreur
    	     array_push($errors,  'l email ne doit pas etre vide');
    	 }
    	 
    	 if ( empty($password) == true || strlen($password) < 10 )
    	 {
    	     //afficher un message d'erreur
    	     array_push($errors,  'le mot de passe doit faire au moins 10 caracteres');
    	 }
    	 
    	  //==================
    	 
        if( count($errors) == 0 )
    	 {
    	     $model = new UsersModel();
        	 $model->addUser($firstname,
                $lastname, 
                $date_of_birth, 
                $address, 
                $city, 
                $zipcode,
                $phone,
                $email,
                $password);
                
            // redirection vers l'accueil
            
            $http->redirectTo('/');
    	 }
        else
    	 {
    	     return [ 'errors' => $errors ];
    	 }
    	 
    	 
    }
}