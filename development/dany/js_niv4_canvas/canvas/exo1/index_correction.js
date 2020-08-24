'use strict';

document.addEventListener('DOMContentLoaded', function()
{
  /****
         *  x = 0 , y = 0          x = 500 , y = 0
         *  ----------------------
         *  |                    |
         *  |    x = 250 y = 150 |
         *  |                    |
         *  ----------------------
         *  x = 0 , y = 300      x = 500 , y = 300
         */

        let canvas = document.getElementById("canvas");

        let context = canvas.getContext("2d");
        /*

        context.fillStyle = 'rgb(100,100,0)';
        context.fillRect(20, 10, 150, 100);

        context.beginPath();
        context.strokeStyle = "blue";
        context.lineWidth = 10

        context.moveTo(50, 50);
        context.lineTo(100, 100);
        context.lineTo(250, 100);
        context.stroke();
        context.closePath();

        context.beginPath();
        context.strokeStyle = "purple";
        context.lineWidth = 5
        context.moveTo(300, 150);
        context.lineTo(0, 0);
        context.stroke();
        context.closePath();*/

        // carré

        context.moveTo(500, 100);
        context.lineTo(500, 150);
        context.lineTo(450, 150);
        context.lineTo(450, 100);
        context.lineTo(500, 100);


        // triangle

        context.moveTo(500, 200);
        context.lineTo(450, 300);
        context.lineTo(550, 300);
        context.lineTo(500, 200);

        // losange

        context.moveTo(200, 450);
        context.lineTo(150, 500);
        context.lineTo(200, 600);

        context.lineTo(250, 500);
        context.lineTo(200, 450);
        context.lineTo(200, 600);
        context.moveTo(150, 500);
        context.lineTo(250, 500);


        // grille

        context.moveTo(400, 400);
        context.lineTo(400, 600);
        context.lineTo(600, 600);
        context.lineTo(600, 400);
        context.lineTo(400, 400);

        // lignes horizontales

        for (let i = 420; i <= 580; i += 20) {
            /*
            context.lineTo(400, i);
            context.lineTo(600, i);
            context.lineTo(600, i + 20);
            context.lineTo(400, i + 20);
            */
            context.moveTo(400,i);
            context.lineTo(600,i)
            
        }

        // lignes verticales
        
        for (let i = 420; i <= 580; i += 20) {
          /*
            context.lineTo(i, 600);
            context.lineTo(i, 400);
            context.lineTo(i - 20, 400);
            context.lineTo(i - 20, 600);*/
            context.moveTo(i, 400);
            context.lineTo(i, 600);
        }

        context.stroke();
        
        
   // spirale
        
        let x = 0;
        let y = 350;
        
        context.moveTo(x,y);
        /*
        for ( let i = 0 ; i <= 400; i += 50)
        {
            x -= i;
            context.lineTo(x,y);
            y += i;
            context.lineTo(x,y);
            i -= 50;
            x += i;
            context.lineTo(x,y);
            y -= i;
            context.lineTo(x,y);
        }
        
        */
        let gap = 50;
        for (let i = 0; i < 4; i++) {
    
            context.lineTo((y - i * gap), (x + i * gap));
            context.lineTo((y - i * gap), (y - i * gap));
            context.lineTo((x + i * gap), (y - i * gap));
            context.lineTo((x + i * gap), (x + i * gap + gap));
    
    
        }

        context.stroke();
    
});