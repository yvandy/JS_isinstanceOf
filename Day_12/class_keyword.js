class Range{
    constructor(from,to){
        this.from = from;
        this.to = to;
    }

    includes(x) {return this.from <= x && x<= this.to; }

    *[Symbol.iterator](){
        for(let x = Math.ceil(this.from); x<= this.to;x++)
            yield x;
    }

    toString(){ return `(${this.from}...${this.to})`;}
}

let r = new Range(1,5);
console.log(r.includes(3));
console.log(r.toString());
console.log([...r]);