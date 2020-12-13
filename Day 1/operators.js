let str1 = "vandana"
let str2 = "sharma"
str1 += str2
console.log(str1)

///////////////

num1 = 4;
str3 = "concatenate";
num1 += str3;
console.log(num1)

num1 = 4;
str3 = "concatenate";
num1 *= str3;
console.log(num1)

/// FIRST DEFINED /////////////

let options ={timeout :0, title: "", verbose: false, n:null};
console.log(options.timeout??1000);
console.log(options.title??"untitled");
console.log(options.verbose??true);
console.log(options.n??10);

