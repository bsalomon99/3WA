<?php

    class UsersModel
    {
        public function addUser(
            $firstname,
            $lastname, 
            $date_of_birth, 
            $address, 
            $city, 
            $zipcode,
            $phone,
            $email,
            $password)
        
        {
            $pdo = new PDO
        (
        		'mysql:host=home.3wa.io:3307;dbname=live-33_blandine_restaurant;charset=UTF8',
        		'blandine',
                '4e2aadedNDA0ODE3MTg0NmExNzM0YmFjODlmYzNh90b73373',
        	    [
        	    	PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        	        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC // fetchall en tableau associatif automatiquement
        	    ]
            );
            
            $sql = 'INSERT INTO users(
                firstname, 
                lastname, 
                date_of_birth, 
                address,
                city,
                zipcode,
                phone,
                email,
                password) VALUES(
                    :firstname, :lastname, :date_of_birth, :address, :city, :zipcode, :phone, :email, :password
                )';
            
            $query = $pdo->prepare($sql); 
            
                $values = [
                'firstname' => $firstname,
                'lastname' => $lastname,
                'date_of_birth' => $date_of_birth,
                'address' => $address,
                'city' => $city,
                'zipcode' => $zipcode,
                'phone' => $phone,
                'email' => $email,
                'password' => $this->hashPassword( $password) 
                ];
                
                     
            $query->execute( $values );
        }
        
        private function hashPassword( $password )
        {
            // sel aleatoire : string aleatoire
            $salt = '$2y$11$'.substr(bin2hex(openssl_random_pseudo_bytes(32)), 0, 22);
            
            // hash avec bcrypt
            // bcrypt stocke le sel dans le hash donc pas besoin de champ supplementaires
            $hash = crypt( $password , $salt );
            
            return $hash;
        }
        
        
        public function getUser($email, $password)
        {
            $pdo = new PDO
        	 (
        		'mysql:host=home.3wa.io:3307;dbname=live-33_blandine_restaurant;charset=UTF8',
        		'blandine',
                '4e2aadedNDA0ODE3MTg0NmExNzM0YmFjODlmYzNh90b73373',
        	    [
        	    	PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        	        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC // fetchall en tableau associatif automatiquement
        	    ]
            );
            
            $sql = "SELECT * FROM users WHERE email = ?" ;
            
            $query = $pdo->prepare($sql);
            $query->execute([$email]);
            
            $user = $query->fetch();
            
           //email ne retourne pas d'utilisateur
            
            if( empty($user) == true )
            {
                return null;
            }
            
            // recuperation du hash
             $hash = $user['password'];
            
            // mot de passe correct
            // parce qu'on utilise bcrypt, password verify extrait le sel automatiquement 
            // et rehash le password avec
            if ( password_verify($password, $hash) == true ) 
            {
                return $user;
            }
            else
            {
                return null;
            }
            
            
        }
        // retour : utilisateur
    }

?>