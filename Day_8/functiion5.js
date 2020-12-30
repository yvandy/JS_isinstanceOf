function timed(f) {
 return function(...args) { // Collect args into a rest parameter array
     f(...args); // Spread the args back out again
 }
}

function f(a,b,c){
    console.log(a,b,c);
}
innerFunction = timed(f);

innerFunction.prototype