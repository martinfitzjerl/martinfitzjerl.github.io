"use strict";

class Namer{

    constructor(name){
        this.name = name;
    }

    sayName() {
        alert(this.name);
    }

    

    
}

let user = new Namer("John");

user.sayName();


var time = 0;


console.log("Hello from nodeApp");
    
    
setInterval(function() {
    time = time + 3;
    document.body.innerHTML = time + "seconds passed";
    
}, 3000);


function dor(){
    console.log("dor");
}
