<?php

    class ProductsModel
    {
        public function getProducts()
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

            $sql = "SELECT * FROM products";

            $query = $pdo->query($sql);

            $products = $query->fetchAll();

            $pdo = null;

            return $products;
            
            
        }
        
        public function getProduct( $id )
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
            
            $sql = "SELECT * FROM products WHERE id = ?";

            $query = $pdo->prepare($sql);
            
            $query->execute([$id]);

            $product = $query->fetch();

            $pdo = null;

            return $product;
        }    
        
    }

?>
