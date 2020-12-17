let point = {
x :1,
y:2,
toString: function() { return `(${this.x},${this.y})`;}
};
console.log(String(point));

// valueOf() method  //

let pp = {
    x:3,
    y:4,
    valueOf: function(){
        return Math.hypot(this.x,this.y);
    }
}
console.log(Number(pp));
console.log(pp>4);
console.log(pp>5);
console.log(pp<6);