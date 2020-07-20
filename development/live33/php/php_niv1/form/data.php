<?php



//var_dump($_GET);

// var_dump($_GET['name']);
// var_dump($_GET['age']);
//var_dump($_GET['ville']);


//foreach($_GET as $value) {
  //  var_dump($value);
//}

/*foreach($_GET as $key => $value) {
   echo $key . '==' . $value . '<br>';
}*/

var_dump($_POST);
// var_dump($_SERVER['QUERY_STRING']);
echo(htmlspecialchars($_POST['firstname'] ) );

$test = htmlentities($_POST['lastname'] );

$test2 = html_entity_decode($test);
var_dump($test2);

echo( $_POST['lastname'] );

$test3 =  htmlspecialchars($_POST['lastname'] );
var_dump($test3);
$test4 = htmlspecialchars_decode($test3);
var_dump(count_chars($test4));



function clean($string) {
    $clean =  htmlentities($string);
    $clean =  htmlspecialchars($string);
    
    return $clean;
}


function cleanPost($post) {
    $rebuildPost = [];
    
    foreach($post as $key => $value ) {
                        // <script>
        $cleanString = clean($value);
       // &lt;script&gt;
        
        $rebuildPost[$key] = $cleanString;
        
        //$rebuildPost['lastname'] = '&lt;script&gt;';
        
        return $rebuildPost;
    
    }
    
}

$post = $_POST;
$cleanPost = cleanPost($post);

echo '<p>clean post</p>';

var_dump($cleanPost);




