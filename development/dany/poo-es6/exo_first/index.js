/*let nom = 'S';
let prenom = 'Dany';

function manger()
{
    
}



let personne = { nom : 'S', prenom: 'Dany', manger : function(){ ... }  } 

let voiture = { nombreDeRoue : 4, conduire : function() .... }

personne.voiture = voiture;

personne.voiture.conduire();

//================================

let personne2 = { nom : 'K', prenom: 'Komala', manger : function(){ ... }  } 
*/
// Classes : Objets generiques

// Objet : proprieté + fonctions

// Personne : nom + prenom + fonctions 
// Types de données personalisés

class Voiture 
{
    constructor( marque, annee, prix )
    {
        this.marque = marque;
        this.annee = annee ;
        this.prix = prix;
    }
    
    conduire( km )
    {
        this.prix -= km;
    }
    
    calculerPrix( anneeActuelle )
    {
        return this.prix + this.prix * (anneeActuelle - this.annee )
    }
    
}

class Personne
{
    constructor( nom , prenom, age )
    {
        // propriété de l objet personne
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.poids = 70;
        this.voiture = new Voiture('Audi' , 2000 , 10000);
        this.parent = null;
    }
    
    ajouterParent( personne )
    {
        this.parent = personne;
    }
    
    // Methodes
    
    manger()
    {
        this.poids ++;
    }
    
    vieillir()
    {
        this.age += 1;
        this.poids ++;
    }
    
    allerAuMCDO()
    {
        this.manger();
        this.vieillir();
    }   
    
    grossir( poids )
    {
        this.poids += poids;
        
        if( poids > 5 )
            console.log("faudrait ptet aller a la salle " + this.nom );
    }
    
}

// personne , personne2 : instance de la classe Personne
let maman = new Personne('S', 'Blandine', 59);

let personne = new Personne("Valmy" , "Malic", 27); // instanciation
personne.manger();
personne.grossir(10);
personne.ajouterParent(maman);

let personne2 = new Personne("Siriphol" , "Dany", 32);
personne2.vieillir();
personne2.voiture.conduire(20);
personne2.allerAuMCDO();


console.log(personne);
console.log(personne2);


