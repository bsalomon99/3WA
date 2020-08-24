'use strict';

class Time {
    constructor() {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
    }

    setTime(hours, minutes, seconds) {
        this.seconds = seconds;
        this.minutes = minutes;
        this.hours = hours;
    }

    addSecond() {
        //this.seconds++;

        // 10:10:59
        // 10:10:05
        // 10:59:59 -> 10:60:0 ->


        if (this.seconds === 59) {
            this.minutes++;
            this.seconds = 0;

            if (this.minutes === 60) {
                this.hours++;
                this.minutes = 0;
            }
        }

        else {
             this.seconds++;
        }

        //========================

        /*this.seconds ++;

        if( this.seconds == 60)
        {
            this.minutes ++;
            this.seconds = 0;
        }

        if( this.minutes == 60 )
        {
            this.hours++;
            this.minutes = 0;
        }

        */

        // 10:11:00
        // 10:10:06


    }

    
    addSeconds(seconds) {

        this.seconds += seconds;
        let extraMinutes = Math.floor(this.seconds / 60);
        this.seconds = this.seconds % 60;
        this.minutes += extraMinutes;
        let extraHours = Math.floor(this.minutes / 60);
        this.minutes = this.minutes % 60;
        this.hours += extraHours;
    }
}

 
let time = new Time();



// 10, 10, 59

//time.setTime(10, 10, 5);
//time.addSecond();
//console.log(time);
//time.setTime(10, 10, 59);
//time.addSecond();
//console.log(time);
//time.setTime(10, 59, 59);
//time.addSecond();
//console.log(time);

//time.setTime(10, 59, 0);
//time.addSecond();
//console.log(time);

time.setTime(5,0,0);
time.addSeconds( 30 )
console.log(time); // 5:0:30

time.addSeconds( 45 )
console.log(time); // 5:1:15

time.addSeconds( 125 )
console.log(time); // 5:3:20

time.addSeconds( 3605 )
console.log(time); // 6:3:25