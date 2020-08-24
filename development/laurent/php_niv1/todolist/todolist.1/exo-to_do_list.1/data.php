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


$dictionnary = [
    'chat' => 'cat',
    'chien' => 'dog',
    'laurent' => 'superman'
];


/////// Si elle existe on retourne la value [$word] associée à la clé $word
function translateToEnglish($word, $dictionnary) {
    if(array_key_exists($word, $dictionnary)) {
        // return qqchose
        return $dictionnary[$word];
    }
}   
    
function translateToFrench($word, $dictionnary) {
    if(in_array($word, $dictionnary)) {
        
        // cherche qqchose et return
        // une fonction php qui cherche dans les tableaux ?
        // $translated = array_search($word, $dictionnary);
        
        return array_search($word, $dictionnary);
    }
}


/////// Verification  du post  : s'il existe (si il a bien été reçu) et s'il contient qqchose
if(isset($_POST) && !empty($_POST)) {
    // - 1: nettoyage du post
    $post = $_POST;
    $cleanPost = cleanPost($post);
    
///////on vérifie qu'il y a bien une clé qui s'appelle direction et une clé qui s'appelle word 
  
    if(array_key_exists('direction', $cleanPost) && array_key_exists('word', $cleanPost)) {
        $direction = $cleanPost['direction'];
        $word = $cleanPost['word'];
        $translatedWord = '';
        
        if($direction === 'toFrench') {
            $translatedWord = translateToFrench($word, $dictionnary);
        }
        
        if($direction === 'toEnglish') {
            $translatedWord = translateToEnglish($word, $dictionnary);
        }
        
        echo $translatedWord;
    }
    
}

