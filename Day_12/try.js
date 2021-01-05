class Static_method{

    constructor(a,b){
            this.a = a;
            this.b = b;
    }

    
    sub(a,b) { return a-b};
    static add(a,b){ return a+b};

}

obj1 = new Static_method();
console.log(obj1.sub(4,6));

console.log(Static_method.add(4,1));

