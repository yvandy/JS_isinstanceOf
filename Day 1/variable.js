console.log("Hello World");

const arr = [1,2,3,4,5];

// testing array reduce
function sum(arr){
    return arr.reduce((prev,current)=>prev+current,0);
}
console.log(sum(arr));