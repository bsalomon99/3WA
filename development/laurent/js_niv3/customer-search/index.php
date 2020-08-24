<?php


require 'connect.php';

if(isset($_POST['customer'])) {

    $string = $_POST['customer'];

    $query = "SELECT customerNumber, customerName
              FROM customers
              WHERE customerName
              LIKE '%$string%'";

    $request = $pdo->prepare($query);



    $request->execute([$_POST['customer']]);

    $customers = $request->fetchAll(PDO::FETCH_ASSOC);


    header("Content-Type: Application/json");
    echo json_encode($customers);
}

if(isset($_GET['cust'])) {

    $customerNumber = $_GET['cust'];

    $query = "SELECT * FROM customers WHERE customerNumber = {$customerNumber}";

    $request = $pdo->prepare($query);

    $request->execute();

    $customer = $request->fetch(PDO::FETCH_ASSOC);

    header("Content-Type: Application/json");
    echo json_encode($customer);

    //include'customer.php';
    //https://live-33.sites.3wa.io/customer-search/index.php?cust=103
}