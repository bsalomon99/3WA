

const TVA = 20.0;

let montantHt = parseFloat(prompt('Entrez un montant HT'));

let demandeRemise = window.confirm('Voulez-vous une remise?');

if (demandeRemise) {
    
    let pourcentRemise = parseFloat(prompt('Quel est le montant de remise souhaité en % ?'));
    
    document.write(`<p>L\'ancien prix HT est de : ${montantHt} &euro;.</p> `);
    
   montantHt = montantHt - (montantHt * pourcentRemise / 100) ;
    
    document.write(`<p>Une remise a été appliquée de ${pourcentRemise} %. </p>`);
    
    document.write(`<p>Le nouveau prix HT remisé est de : ${montantHt} &euro; </p>`);
    
} else {
    document.write('<p>Aucune remise n\'a été appliquée. </p>');
}

// Calcul Tva et ttc
let montantTVA = montantHt * TVA / 100;
let montantTtc = montantHt + montantTVA;

document.write(`<p>Le montant de la TVA s\'élève à : ${montantTVA} &euro;</p> `);
document.write(`<p>Le montant TTC est de : ${montantTtc} &euro;.</p>`);
