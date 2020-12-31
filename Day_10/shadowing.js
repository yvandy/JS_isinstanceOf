var a = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);

}
// this 'a'  will point to the same which is inside the block scope, this is the case only with var keyword.
// in this case there will be two scopes:
//1. block : [b:20 , c:30]
//2. global : [a:10]
console.log(a);