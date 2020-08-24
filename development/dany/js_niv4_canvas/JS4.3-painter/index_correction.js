'use strict';

document.addEventListener("DOMContentLoaded", function() {
    
    var canvas = document.getElementById("canvas");
    let context = canvas.getContext('2d');
    let drawing = false;
    let colors = document.querySelectorAll(".color");
    let sizes = document.querySelectorAll(".size");
    let eraser = document.getElementById("eraser");

    // event : parametre qui contient les informations de l evenements
    
    function onMouseMove( event ) {
    
        console.log("toto");
        
        if ( drawing === true )
        {
            // Recuperer les coordonnées de la souris
        
            let rectangle = canvas.getBoundingClientRect();
            
            let x = event.clientX - rectangle.x;   
            let y = event.clientY - rectangle.y;
            console.log(event.clientY);
            console.log(rectangle,y);
            /* Version plus simple mais pas supportée globalement 
            
            let x = event.offsetX;
            let y = event.offsetY;
            
            */
            
            context.lineTo(x,y);
            context.stroke();
        }
    }
    
    function onMouseDown( event )
    {
        let rectangle = canvas.getBoundingClientRect();
        
        let x = event.clientX - rectangle.left;   
        let y = event.clientY - rectangle.top;
        
        context.beginPath();
        // repositionner le nouveau tracé
        context.moveTo(x,y);
        
        drawing = true;
    }
    
    function stopDrawing( )
    {
        console.log("mouse move");
        
        drawing = false;
        
        context.closePath();

    }
    
    function onClickColor()
    {
        let color = this.dataset.color; // data-color="red"
        // lire le dataset de la balise cliquée
        context.strokeStyle = color;
    }
    
    function onClickSize ()
    {
        let size = this.dataset.size; // data-size="3"
        // lire le dataset de la balise cliqué
        context.lineWidth = size;
    }
    
    function onClickEraser()
    {
        context.clearRect(0,0, canvas.width, canvas.height);
    }

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup' , stopDrawing );
    // pour eviter un bug lorsque l'on sort du canvas en mode dessin
    canvas.addEventListener('mouseleave', stopDrawing);
    eraser.addEventListener('click' , onClickEraser )
    
    for( let i = 0; i < colors.length ; i++ )
    {
        colors[i].addEventListener('click' , onClickColor);
    }

    for( let i = 0; i < sizes.length ; i++ )
    {
        sizes[i].addEventListener('click' , onClickSize );
    }
});
