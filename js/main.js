


let battery = document.querySelector('.battery');
let batteryInside = document.querySelector('.battery__inside');
let textIndicate = document.querySelector('.indicate');


let a = 0;


function batteryCharger() {

   count = a;
   batteryInside.style.width = count + '%';
   a += 20;

   if (a > 100) {
      a = 0;
   }

   textIndicate.innerHTML = count + '%';

}


setInterval(batteryCharger, 1000);



