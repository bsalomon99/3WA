'use strict';

document.addEventListener('DOMContentLoaded', function() {

    // Encapsulation
    
    // 1 classe => 1 responsabilité

    class Time {

        constructor() {
            console.log("creation");
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

    class Clock {
        constructor(element) {
            // Composition
            // Separer les responsabilités
            this.time = new Time();
            this.element = element;
        }

        start() {
            setInterval(() => this.advance(), 1000);
        }
        
        advance()
        {
            this.time.addSecond()
            this.element.textContent =
                    `${this.time.hours}:${this.time.minutes}:${this.time.seconds}`;
        }
    }

    // Code principal

    // Utilisation de la classe Clock

    let element = document.getElementById('time');
    let clock = new Clock(element);
    clock.start();

});

// POO : PHP / JS / JAVA / C# / C++

// NON POO: PERL , C, ADA, PHP 4

