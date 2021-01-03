function Range(from,to){
    this.from = from;
    this.to = to;
}

Range.prototype = {

    includes: function(x){ return this.from <= x && x<= this.to;},

    [Symbol.iterator]: function*(){

        for(let x=Math.ceil(this.from); x<= this.to; x++)
            yield x;
    },
    toString: function(){
        return"(" + this.from + "..." + this.to +")" ;
    }
};

let r = new Range(1,4);
console.log(r.includes(3));
console.log(r.toString());
console.log([...r]);

