var c = 100;

function x(){
    var c= 30;
    console.log(window.c);
    window.c = 20;
}

// Run this in console to understand better

x();
console.log(c);
