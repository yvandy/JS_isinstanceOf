let square = function(x){ return x*x;}
console.log(square(5));

// The first anonymous function is equivalent to the anonymous  class written below.

let Square = class {constructor (x) {this.area = x*x};}
console.log(new Square(4).area);