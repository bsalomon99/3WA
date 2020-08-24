'use strict';

document.addEventListener("DOMContentLoaded", function() {

    // Variables

    var canvas = document.getElementById("paint");
    let context = canvas.getContext('2d');
    let drawing = false;
    let colors = document.querySelectorAll(".color");
    let sizes = document.querySelectorAll(".size");
    let eraser = document.getElementById('eraser');
    //context.shadowColor = 'lime';
    //context.shadowBlur = 15;

    // initialisation du 2 eme canvas ( colorpicker )

    var colorpicker = document.getElementById('colorpicker');
    var context2 = colorpicker.getContext('2d');

    // Fonctions

    function createColorPicker() {
        var gradient = context2.createLinearGradient(0, 0, colorpicker.width, 0);
        gradient.addColorStop(0, "red");
        gradient.addColorStop(0.2, "yellow");
        gradient.addColorStop(0.4, "green");
        gradient.addColorStop(0.6, "blue");
        gradient.addColorStop(0.8, "pink");
        gradient.addColorStop(1, "orange");

        context2.fillStyle = gradient;
        context2.fillRect(0, 0, colorpicker.width, colorpicker.height);

        var gradient2 = context2.createLinearGradient(0, 0, 0, colorpicker.height);
        gradient2.addColorStop(0, "rgba(255,255,255,1)");
        gradient2.addColorStop(0.5, "rgba(255,255,255,0)");
        gradient2.addColorStop(0.5, "rgba(0,0,0,0)");
        gradient2.addColorStop(1, "rgba(0,0,0,1)");

        context2.fillStyle = gradient2;
        context2.fillRect(0, 0, colorpicker.width, colorpicker.height);
    }

    // event : parametre qui contient les informations de l evenements

    function onMouseMove(event) {

        console.log("mouse move");

        if (drawing == true) {
            // Recuperer les coordonnées de la souris

            let rectangle = canvas.getBoundingClientRect();


            let x = event.clientX - rectangle.x;
            let y = event.clientY - rectangle.y;

            /* Version plus simple mais pas supporté globalement

            let x = event.offsetX;
            let y = event.offsetY;

            */

            context.lineTo(x, y);
            context.stroke();
        }
    }

    function onMouseDown(event) {
        let rectangle = canvas.getBoundingClientRect();

        let x = event.clientX - rectangle.x;
        let y = event.clientY - rectangle.y;

        context.beginPath();
        // repositionner le nouveau tracé
        context.moveTo(x, y);

        drawing = true;
    }

    function stopDrawning() {
        console.log("mouse move");

        drawing = false;

        context.closePath();

    }

    function onClickColor() {
        let color = this.dataset.color; // data-color="red"
        // lire le dataset de la balise cliqué
        context.strokeStyle = color;
    }

    function onClickSize() {
        let size = this.dataset.size; // data-size="3"
        // lire le dataset de la balise cliqué
        context.lineWidth = size;
    }

    function onClickEraser() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    function onClickColorPicker(event) {
        let rectangle = colorpicker.getBoundingClientRect();

        let x = event.clientX - rectangle.x;
        let y = event.clientY - rectangle.y;

        let data = context2.getImageData(x,y,1,1).data;
        
        
        context.strokeStyle = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255 } )`;
    }

    // Code principal

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', stopDrawning);
    colorpicker.addEventListener('click', onClickColorPicker);
    // pour eviter un bug lorsque l'on sort du canvas en mode dessin
    canvas.addEventListener('mouseleave', stopDrawning);
    eraser.addEventListener('click', onClickEraser)

    for (let i = 0; i < colors.length; i++) {
        colors[i].addEventListener('click', onClickColor);
    }

    for (let i = 0; i < sizes.length; i++) {
        sizes[i].addEventListener('click', onClickSize);
    }

    createColorPicker();
});
