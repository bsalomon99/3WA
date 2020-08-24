'use strict';

document.addEventListener('DOMContentLoaded', function()
{
   
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");
   
   
   //carré
  context.beginPath();
  context.moveTo(100, 100);
  context.lineTo(100, 200);
  context.lineTo(200, 200);
  context.lineTo(200, 100);
  context.lineTo(100, 100);
  context.stroke();
  context.closePath();
  
  
  //triangle
  context.beginPath();
  context.moveTo(300, 100);
  context.lineTo(300, 300);
  context.lineTo(500, 300);
  context.lineTo(300, 100);
  context.stroke();
  context.closePath();
  
  //kite
  context.moveTo(100, 300);
  context.lineTo(0, 500);
  context.lineTo(100, 600);
  context.lineTo(200, 500);
  context.lineTo(100, 300);
  context.lineTo(100, 600);
  context.stroke();
  context.moveTo(0, 500);
  context.lineTo(200, 500);
  context.stroke();
  
  
    
  //grid  
  context.moveTo(400, 0);
  context.lineTo(600, 0);
  context.lineTo(600, 200);
  context.lineTo(400, 200);
  context.lineTo(400, 0);
  context.lineTo(450, 0);
  context.lineTo(450, 200);
  context.lineTo(500, 200);
  context.lineTo(500, 0);
  context.lineTo(550, 0);
  context.lineTo(550, 200);
  context.lineTo(600, 200);
  context.lineTo(600, 150);
  context.lineTo(400, 150);
  context.lineTo(400, 100);
  context.lineTo(600, 100);
  context.lineTo(600, 50);
  context.lineTo(400, 50);
  context.stroke();
  
  //maze
  
  context.moveTo(300, 400);
  context.lineTo(500, 400);
  context.lineTo(500, 600);
  context.lineTo(350, 600);
  context.lineTo(350, 450);
  context.lineTo(450, 450);
  context.lineTo(450, 550);
  context.lineTo(400, 550);
  context.lineTo(400, 500);
  context.stroke();
  
  
    
       
  
  
  
  
    
});