// what is callback function in JS
// function are first class citizens in JS
// the function passed into another function is called callback function , the function passed is called CB function
// *** JS is a synchronous and single-threaded language, so it can do one thing at a time in a specific order,
// but due to callback functions we can do async things insode JS.

setTimeout(function(){
    console.log("timer");
},5000);


function x(y){
    console.log("x");
    y();

}

x(function y(){
    console.log("y");
    // y is the callback function in this.
})

