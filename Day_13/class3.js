class Complex{
    constructor (real,imaginary){
        this.r = real;
        this.i = imaginary;
    }

    plus(that){
        return new Complex(this.r + that.r , this.i + that.i);
    }

    times(that){

        return new Complex(this.r * that.r - this.i* that.i , this.r * that.i + this.i * that.r);
    }

    static sum(c,d) { return c.plus(d);}
    static product(c,d){return c.times(d);}

    get real(){ return this.r;}
    get imaginary(){ return Math.hypot(this.r, this.i);}

    toString(){ return `{${this.r}, ${this.i}}`;}

    equals(that){
        return that instanceof Complex && this.r === that.r && this.i === that.i;
    }
}
obj1 = new Complex(8,7);
obj2 = new Complex(7,8);
obj3 = obj1.plus(obj2);

console.log(obj3);
console.log(obj1.plus(obj2).toString());

// Complex.ZERO = new Complex(0,0);
// Complex.ONE = new Complex(1,0);
// Complex.I = new Complex(0,1);