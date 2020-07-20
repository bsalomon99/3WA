 // mon objet

// objet entre accolades {}, tableau entre crochets []
 
let myCar = { brand: 'Peugeot', manuDate: '2011', buyDate:'2015', passengers: ['Rémi ', 'Marie ', 'Sarah']};
   
    document.write(myCar.brand + " " + "<br>" + myCar.manuDate + "<br>"  + myCar.buyDate + "<br>"  + myCar.passengers[0] + " <br>" + myCar.passengers[1]+ "<br>" + myCar.passengers[2]);
     
    document.write(`<p>Marque de la voiture :  ${myCar.brand}. </p>`); 
    
       
    document.write("<p>Marque de la voiture : " + myCar.brand + "</p>");
    
    document.write(`<p> essai avec the weirdo en une ligne<br> Marque de la voiture :  ${myCar.brand} <br> Date de fabrication : ${myCar.manuDate} <br> Liste des passagers : ${myCar.passengers}</p>`);
    
    document.write("<p> date de fabrication : " + myCar.manuDate + "</p>");
    document.write("<p> les passagers sont (long version): " + myCar.passengers[0] + " " + myCar.passengers[1] + " et " + myCar.passengers[2] + "</p>");
    document.write(`<p> les passagers sont (short version) : ${myCar.passengers[0]}, ${myCar.passengers[1]} et ${myCar.passengers[2]} </p>`);