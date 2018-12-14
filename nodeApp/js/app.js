"use strict";
var time = 0;

console.log("Hello from nodeApp");

setInterval(function() {
    time = time + 3;
        console.log(time + "seconds have passed");
    
}, 3000);
