<?php

/*

    Personnages : Voleur, Mage, Guerrier
    Voleur : vole de l'argent
    Mage : se soigner
    Guerrier : + de force et de vie
    Caracteristiques : Force, Argent, point de vie
    Personnage peuvent s attaquer entre eux
*/

class Personnage
{
    public $nom;
    public $age;
    public $caracteristiques;

    public function __construct( $nom , $age )
    {
        $this->nom = $nom;
        $this->age = $age;
        $this->caracteristiques = new Caracteristiques(10,5,5);
    }

    public function attaquer( Personnage $cible )
    {
        $cible->caracteristiques->HP -= $this->caracteristiques->force;
    }

    public function afficherInfos()
    {
        echo "nom : ".$this->nom." <br>";
        echo "age : ".$this->age." <br>";
        $this->caracteristiques->afficherCaracteristiques();
    }
}

class Caracteristiques
{
    public $HP;
    public $force;
    public $argent;

    public function __construct( $HP , $force, $argent )
    {
        $this->HP = $HP;
        $this->force = $force;
        $this->argent = $argent;
    }

    public function afficherCaracteristiques()
    {
        echo "HP : ".$this->HP." <br>";
        echo "Force : ".$this->force." <br>";
        echo "Argent : ".$this->argent." <br>";
        echo "--------------<br>";
    }
}

class Voleur extends Personnage
{
    // redefinition du constructeur
    public function __construct( $nom , $age )
    {
        parent::__construct($nom, $age);
        $this->caracteristiques->argent = 10;
    }

    // redefinition
    public function attaquer( Personnage $cible )
    {
        parent::attaquer($cible);
        $cible->caracteristiques->argent --;
        $this->caracteristiques->argent ++;
    }
}

class Guerrier extends Personnage
{
    // redefinition du constructeur
    public function __construct( $nom , $age )
    {
        parent::__construct($nom, $age);
        $this->caracteristiques = new Caracteristiques(20,5,0);
    }
}

class Mage extends Personnage
{
    // redefinition du constructeur
    public function __construct( $nom , $age )
    {
        parent::__construct($nom, $age);
        $this->caracteristiques = new Caracteristiques(8,1,5);
    }

    public function attaquer( Personnage $cible )
    {
        parent::attaquer($cible);
        $this->caracteristiques->HP ++;
    }
}

// code principal

$mage = new Mage("Axel" , 16 );
$guerrier = new Guerrier("Blandine", 50 );
$voleur = new Voleur("Yoan" , 26 );

$mage->afficherInfos();
$guerrier->afficherInfos();
$voleur->afficherInfos();

$mage->attaquer($guerrier);
$guerrier->attaquer($voleur);
$voleur->attaquer($mage);

$mage->afficherInfos();
$guerrier->afficherInfos();
$voleur->afficherInfos();


?>



