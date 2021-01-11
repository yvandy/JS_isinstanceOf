let name = {
    firstname :"vandana",
    lastname :"sharma"
}

let printName = function(hometown ,state){
    console.log(this.firstname + " " + this.lastname +" " + hometown + state);
}

let printMyName = printName.bind(name, "himachal pradesh");
printMyName("India");

Function.prototype.myBind = function(...args){    
    let obj = this, params = args.slice(1);
    return function(...args2){
        obj.apply(args[0], [...params, ...args2]);
    }
}

let printMyName2 = printName.myBind(name,"himachal pradesh");
printMyName2("India");