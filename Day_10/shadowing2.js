let b = 100;
{
    var a = 10;
    let b = 20;
    const c= 30;
    console.log(a);
    console.log(b);
    console.log(c);

}

// do check the console for the detailed explanation :
// there will be 3 scopes in this case :

//1. script [b:100]
//2. block [b:20,  c:30]
//3. global [a:10]

console.log(b);
