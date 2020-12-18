let p = {
 // x and y are regular read-write data properties.
 x: 1.0,
 y: 1.0,
 // r is a read-write accessor property with getter and setter

 // Don't forget to put a comma after accessor methods.
 get r() { return Math.hypot(this.x, this.y); },
 set r(newvalue) {
 let oldvalue = Math.hypot(this.x, this.y);
 let ratio = newvalue/oldvalue;
 this.x *= ratio;
 this.y *= ratio;
 },
 // theta is a read-only accessor property with getter only

 get theta() { return Math.atan2(this.y, this.x); }
};
p.r // => Math.SQRT2
console.log(p.theta)