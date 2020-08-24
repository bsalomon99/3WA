<?php

require('connect.php');

//var_dump($_POST);
var_dump($_POST['article_id']);
//var_dump($_GET['id']);



$nickname = $_POST['nickname'];
$content = $_POST['content'];
$article_id = $_POST['article_id'];
//$upvote = $_GET['upvote'];
//$downvote = $_GET['downvote'];
/// or // $article_id = $_POST['article_id'];

$sql = "INSERT INTO comments(nickname, content, article_id, upvote, downvote)
VALUES ( :nickname , :content , :article_id , 0, 0 )";

$query =  $pdo->prepare($sql);

$data = [
    'nickname' => $nickname,
    'content' => $content,
    'article_id' => $article_id
];

$query->execute( $data );

header('Location: detail.php?id='.$article_id);

?>


//// redirection pour ne pas rester sur la meme page, revenir sur la page article
//où le visiteur pourra voir l'article et son commentaire


