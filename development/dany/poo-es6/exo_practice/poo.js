
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
        this.age += 10;
        this.poids +=10;
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


//console.log(personne);
//console.log(personne2);


let personne3 = new Personne ('Salomon', 'Rémi', 61);
personne3.manger();
personne3.grossir(-10);
personne3.vieillir();
console.log(personne3);

class Animals
{
    constructor( species, name, age)
    {
       this.species = species;
       this.name = name;
       this.age = age;
       this.furColor = 'black';
       this.friend = null;
       this.weight = null;
       
    }
    
    like (x){
        this.friend = x;
    }
    aging () {
        this.age += 5;
        
    }
}

let titote = new Animals( 'cat', 'titote', 10);
let meke = new Animals( 'cat', 'Mekedoye', 8);
let lala = new Animals( 'cat', 'Lalah', 6);
let natsuki = new Animals( 'cat', 'Natsuki', 5);
let polka = new Animals('cat', 'Polka', 4);
let inka = new Animals('dog', 'Inka', 5);
let gudule = new Animals('dog', 'Gudule', 11);

titote.like(gudule);
polka.like(natsuki);
console.log(titote);
console.log(polka);
lala.aging();
console.log(lala);


