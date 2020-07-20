
//recherche des photos(toutes les balises li)
const listPhotos = document.querySelectorAll('.photo-list li');

//recherche de la balise em (nb de photos selected)
const total  = document.querySelector('#total em');

//Définir des actions (fonction)
//Dans un gestionnaire d'évènements (et uniquement dans ce cas-là) la variable this 
//représent l'objet DOM qui a déclenché l'event

function clickOnPhoto()
{
    this.classList.toggle('selected');
   
    const selectedPhotos = document.querySelectorAll('.photo-list li.selected');
     
    total.textContent = selectedPhotos.length;
    
}

 /*gestionnaire d'event, click sur les li*/
 
for (let i = 0; i < listPhotos.length; i++)
    {
        listPhotos[i].addEventListener('click', clickOnPhoto);
    }
    