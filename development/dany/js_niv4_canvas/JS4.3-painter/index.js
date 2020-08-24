'use strict';

document.addEventListener('DOMContentLoaded', function()
{
   
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let rectangle = canvas.getBoundingClientRect();
    let drawing = false;
    let picker = new Picker(document.getElementById("colorpicker"));
    
    picker.draw();
    
    function onMouseMove(event) {
        
        if (drawing === true) {
            
            //let rectangle = canvas.getBoundingClientRect();
            
            let x = event.clientX - rectangle.left;
            let y = event.clientY - rectangle.top;
             
            context.lineTo(x, y);
            context.stroke();
             
         }
    
     }
 
    function onMouseDown(event) {
        
        //let rectangle = canvas.getBoundingClientRect();
            
        let x = event.clientX - rectangle.x;   
        let y = event.clientY - rectangle.y;
            
        //repositionner la souris, éviter le trait de liaison    
        context.moveTo(x,y);
            
        drawing = true;
        
    }
    
    function onMouseUp() {
        
        drawing = false;
    }

    class Picker {
        constructor(target, width, height) {
            this.target = target;
            this.width = width;
            this.height = height;
            this.target.width = width;
            this.target.height = height;
            
            this.context = this.target.getContext("2d");
            
            
            this.pickerCircle = { x:10, y: 10, width: 5, height: 5};
            }
            draw() {
            this.build();
            }
        
            build() {
                let gradient = this.context.createLinearGradient(0, 0, this.width, 0);
                gradient.addColorStop(0, "rgb(255, 0, 0)");
                gradient.addColorStop(0.15, "rgb(255, 0, 255)");
                gradient.addColorStop(0.33, "rgb(0, 0, 255)");
                gradient.addColorStop(0.49, "rgb(0, 255, 255)");
                gradient.addColorStop(0.67, "rgb(0, 255, 0)");
                gradient.addColorStop(0.84, "rgb(255, 255, 0)");
                gradient.addColorStop(1, "rgb(255, 0, 0)");
                
                this.context.fillStyle = gradient;
                this.context.fillRect(0, 0, this.width, this.height);
                
            }
    }
 
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup' , onMouseUp );
       
  
});  
  
  
    