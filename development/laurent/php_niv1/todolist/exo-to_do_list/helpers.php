<?php


function clean($string) {
    return htmlspecialchars(htmlentities($string));
}


function cleanPost($post) {
    $rebuildPost = [];
    
    foreach($post as $key => $value ) {
                        // <script>
        $cleanValue = clean($value);
        $cleanKey = clean($key);
       // &lt;script&gt;
    
        $rebuildPost[$cleanKey] = $cleanValue;
        
        //$rebuildPost['lastname'] = '&lt;script&gt;';
        
    }
    
    return $rebuildPost;
    
}
