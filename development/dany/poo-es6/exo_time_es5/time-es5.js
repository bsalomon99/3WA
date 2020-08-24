// Classe time + definition

/*

class Time {

    constructor() {
        console.log("creation");
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
    }
}
        
*/

var Time = function()
{
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
}

/*

setTime(hours, minutes, seconds) {
            this.seconds = seconds;
            this.minutes = minutes;
            this.hours = hours;
        }
        
*/

Time.prototype.setTime = function(hours, minutes, seconds) 
{
    this.seconds = seconds;
    this.minutes = minutes;
    this.hours = hours;
}


//============

'use strict';

var Time = function()
{
    this.hours = 0; 
    this.minutes = 0;
    this.seconds = 0;
}

Time.prototype.addSecond = function()
{
    this.seconds ++;
    
    if( this.seconds == 60 )
    {
        this.seconds = 0 ;
        this.minutes ++;
    }
    
    if ( this.minutes == 60 )
    {
        this.minutes = 0;
        this.hours ++;
    }
    /* ou bien
    this.addSeconds(1);
    */
}

Time.prototype.addSeconds = function(seconds)
{
    
    this.seconds += seconds;
    // utiliser un %
    var minutesToAdd = Math.floor(this.seconds / 60 );
    this.minutes += minutesToAdd;
    this.seconds = this.seconds % 60;
    
    var hoursToAdd = Math.floor(this.minutes / 60 );
    this.hours += hoursToAdd;
    this.minutes = this.minutes % 60;
    
    
    /*
    for( let i = 0 ; i < seconds ; i++ )
        this.addSecond();
    */
}

Time.prototype.setTime = function( hours , minutes, seconds) 
{
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
}

Time.prototype.displayTime = function()
{
    console.log( this.hours + ":" + this.minutes + ":" + this.seconds );
}

// ==== Classe Alarme

var Alarm = function()
{
    this.time = new Time();
    this.limit ;
    this.interval;
}

Alarm.prototype.ding = function( seconds )
{
    this.limit = seconds;
    this.interval = setInterval( this.advance.bind(this) , 1000 );
}

Alarm.prototype.advance = function()
{
    
    this.time.addSecond();
    
    if ( this.time.seconds == this.limit )
    {
        alert('ding');
        clearInterval( this.interval );
    }
    console.log(this.time.seconds );
}

// ==== Code principal =====

var time = new Time();
time.displayTime();
time.addSecond();
time.displayTime();


time.setTime( 5,5,5);
time.addSecond();
time.displayTime();

time.setTime( 5,5,59);
time.addSecond();
time.displayTime(); // 5:6:0

time.setTime( 5,59,59);
time.addSecond();
time.displayTime(); // 6:0:0

time.setTime( 10,1,1);
time.addSeconds( 30 );
time.displayTime(); // 10,1,31
time.addSeconds( 61 );
time.displayTime(); // 10,2,32
time.addSeconds( 190 );
time.displayTime(); // 10,5,42
time.addSeconds( 3600 );
time.displayTime(); // 11,5,42
time.addSeconds( 36003544 );
time.displayTime(); // 10012:4:46

// =========

var alarm = new Alarm();
alarm.ding(5);
/*
0:0:0
(index):46 0:0:1
(index):46 5:5:6
(index):46 5:6:0
(index):46 6:0:0
(index):46 10:1:31
(index):46 10:2:32
(index):46 10:5:42
(index):46 11:5:42
(index):46 10012:4:46
*/

// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial