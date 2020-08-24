<?php


$number = 1;
$string = 'string';


$number = 'string'; // string
$string = 'number'; // string


// Constante
define('NOMCONSTANTE', 'valeur'); 
const CONST2 = 'valeur2';
//

$true = true; // boolean
$false = false; // boolean
$float = 1.2; // float
$int = 1; // integer


//echo ($float * $int);

//echo $number;
//echo $string;
//echo NOMCONSTANTE;
//echo CONST2;
//echo $true;
//echo $false;

//echo $float;
//echo $int;

//echo $number . " " . $string . " " . NOMCONSTANTE . " " . CONST2 . " " . $true . " " . $float  . " " . $int;

//echo "<p>";
 //   echo ($float * $int);
//echo "</p>";

//var_dump($string);
//var_dump($float);

//echo '<pre>';
//   var_dump($string);
//    var_dump($float);
//echo '</pre>';

//echo '<pre>';
//    echo '<code>';
//        echo $string;
//        echo $float;
//    echo '</code>';
//echo '</pre>';

$array = [$string, $float, $true];

//for($i = 0; $i < sizeof($array); $i++) {
//    echo $array[$i];
//}

//for($i = 0; $i < sizeof($array); $i++) {
//    echo '<p style="color: blue; background-color: red; padding: 1em;">' . $array[$i] . '</p>';
//    echo "<p style=\"color: blue;>\">" . $array[$i] . "</p>";
//}

//function test() {
//    return $true;
//}

//echo "<br>";
//$i = 0;
//while($i < 10) {
//    echo $i;
 //   $i++;
//}

// tableau associatif
$array2 = 
[
    "cle" => "valeur",
    "cle2" => "valeur2",
    "cle3" => "valeur3"
];

foreach($array2 as $key => $value) {
   echo "<p>" . $key . "</p>";
   echo "<p>" . $value . "</p>";
    
}
foreach($array as $element) {
    echo $element;
}