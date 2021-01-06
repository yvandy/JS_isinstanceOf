class AbstractSet{

    has(x) { throw new Error("Abstract method");}
}

class NotSet extends AbstractSet{

    constructor(set){
        super();
        this.set = set;
    }

    has(x){ return `{x|x not belongs to {this.set.toString()}}`;}
}

class RangeSet extends AbstractSet{
    constructor(from,to){
        super();
        this.from = from;
        this.to = to;
    }

    has(x){ return x>= this.from && x<= this.to;}
    toString(){ return `{x| ${this.from} <= x <= ${this.to}}`;}
}

NotSet1 = new NotSet(90);
console.log(NotSet.has);

// abs = new AbstractSet;
// console.log(abs.has(9));
