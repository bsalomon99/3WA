<?php

class LoginController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
    
    }

    public function httpPostMethod(Http $http, array $formFields)
    {
    	$email = $_POST['email'];
    	$password = $_POST['password'];
    	
    	$model = new UsersModel();
        $user = $model->getUser($email,$password);
        
        if ( empty($user) == true )
        {
            // erreur
            return ['error' => 'Login ou mot de passe incorrect'];
        }
        else
        {
            // connexion
            $_SESSION['connected_user'] = $user;
            $http->redirectTo("/");
        }
    	
    	
    }
}