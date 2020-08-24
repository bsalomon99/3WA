<?php

class ProductController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
        $id = $_GET['id'];
        
        $model = new ProductsModel();
        $product = $model->getProduct($id);
        
        echo json_encode($product);
        
        // empecher d executer la vue
        die();
    }

    public function httpPostMethod(Http $http, array $formFields)
    {
 	
    }
}