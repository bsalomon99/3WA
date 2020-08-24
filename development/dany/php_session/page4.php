<h1> Terminer la session </h1>

<?php

session_start();

// vide la session
session_destroy();
var_dump($_SESSION);