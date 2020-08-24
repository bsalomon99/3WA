<?php        

    class Voiture    
    {
        // Proprietés                            
        
        public $marque;
        public $prix;
                                
        public function __construct( $marque , $prix )
        {
            $this->marque = $marque;
            $this->prix = $prix;
        }
    }

    class Personne
    {
        // Proprietés       
        // visibilité
        
        public $nom;
        protected $prenom;
        private $age;
        private $poids;
                                
        public function __construct( $nom , $prenom )
        {
            $this->nom = $nom;
            $this->prenom = $prenom;
            $this->age = 32;
            $this->poids = 70;
            $this->voiture = new Voiture( 'Audi' , 10);
        }
                                
        // Methodes                            
        
        public function vieillir()
        {
            $this->age ++;
            $this->poids ++;
        }
                                
        public function grossir( $nb )
        {
            $this->poids += $nb;
        }
    }
                
    // Heritage
    // PHP : on ne peut heriter que d'une seule classe!!!!    
    // ( C++ : heritage multiple possible )
    // Eleve est une classe enfant de Personne    
    // Personne est un parant de la classe Enfant
                
    class Eleve extends Personne
    {
        public $ecole;
        public $QI = 100;
                                
        public function etudier()
        {
            $this->QI ++;
            $this->grossir(1);
            $this->prenom = "lol"; // OK : protected
            $this->nom = "lol"; // KO : private
        }
                                
        // redefinition : remplace le code de la methode vieillir du parent
                                
        public function vieillir()
        {
            parent::vieillir(); // OK meme si elle modifie une proprieté privée
            $this->etudier();
        }
    }
                
    // Personne -> Eleve -> Delegue
                
    class Delegue extends Eleve
    {
        public $classe;
                
        // Redefinition du constructeur
        public function __construct( $nom , $prenom )
        {
            // Appel au code de la classe parent
            parent::__construct( $nom , $prenom );
            $this->classe = "3WA";
        }
                                
        // Redefinition de la fonction vieillir en    
        // conservant le code precedent
        public function vieillir()
        {
            parent::vieillir();
            $this->grossir(5);
        }
    }
                
    // code principal                
    
    // instanciation
    // $personne est une instance de la classe Personne
                
    $personne = new Personne( "Siriphol" , "Dany" );
    var_dump($personne);
    $personne2 = new Personne( "J" , "R" );
    $personne->nom = "Axel"; // OK
    var_dump($personne);
    //$personne->prenom = "Pierre"; // Fatal Error
    //$personne->age = 32; // Fatal Error
                
    $personne->vieillir();
    var_dump($personne);
    $personne2->grossir(50);
                
    $remi = new Eleve( "Remi" , "Remi");
    $remi->grossir(10);
    $remi->vieillir();
                
    $pierre = new Delegue('Pierre' , 'G');
    var_dump($pierre);
    $pierre->etudier();
    $pierre->grossir(1);
        
    var_dump($pierre);
                
    /*
    // type hinting
    function test( Personne $eleve ): int
    {
        return 5;
    }
                
    test(5) // Fatal error    
    test($personne) // OK
    test($remi) // OK
    test($pierre) // OK
    */

?>