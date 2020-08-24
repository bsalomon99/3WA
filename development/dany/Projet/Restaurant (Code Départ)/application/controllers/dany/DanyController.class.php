<?php

class TestController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
        var_dump('page de test');
        
        $nb = 'lol';
    	/*
    	 * Méthode appelée en cas de requête HTTP GET
    	 *
    	 * L'argument $http est un objet permettant de faire des redirections etc.
    	 * L'argument $queryFields contient l'équivalent de $_GET en PHP natif.
    	 */
    	 $data = new Data();
    	 $student = $data->getStudent();
    	 
    	 // transmettre une valeur du controleur vers la vue
    	 return [
    	   'nb' => $nb ,
    	   'name' => 'dany',
    	   'student' => $student
    	 ];
    }

    public function httpPostMethod(Http $http, array $formFields)
    {
    	/*
    	 * Méthode appelée en cas de requête HTTP POST
    	 *
    	 * L'argument $http est un objet permettant de faire des redirections etc.
    	 * L'argument $formFields contient l'équivalent de $_POST en PHP natif.
    	 */
    }
}