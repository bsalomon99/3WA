
const TVA = 20.0;


let montantHt = window.prompt('Entrez un montant HT');

montantHt = parseFloat(montantHt);
let montantTva;
montantTva = montantHt * TVA / 100 ;
let montantTtc = montantHt + montantTva ;

document.write(`
    <p> Le montant ht est : ${montantHt}</p>
    <p>Le montant tva est : ${montantTva}</p>
    <p>Le montant ttc est : ${montantTtc} &euro; </p>


`);
document.write("<p>Le montant TTC est donc de " + montantTtc + " euro.</p>");

document.write("<p>J'INSISTE. LE MONTANT TTC EST VRAIMENT DE " + montantTtc + " €.</p>");

document.write(`<p>J'INSISTE LOURDEMENT. LE MONTANT TTC EST VRAIMENT DE ${montantTtc} € ou bien euros.</p>`);