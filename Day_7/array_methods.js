let a = [1,2,3,4,5];
console.log(a.slice(0,3)); // Returns [1,2,3]
console.log(a.slice(3)); // Returns [4,5]
console.log(a.slice(1,-1)); // Returns [2,3,4]
console.log(a.slice(-3,-2)); 

let a2 = [1,2,3,4,5,6,7,8];
console.log(a2.splice(4)) // => [5,6,7,8]; a is now [1,2,3,4]
console.log(a2.splice(1,2)) // => [2,3]; a is now [1,4]
console.log(a2.splice(1,1)) // => [4]; a is now [1]

let a3 = [1,2,3,4,5];
console.log(a3.splice(2,0,"a","b")) // => []; a is now [1,2,"a","b",3,4,5]
console.log(a3.splice(2,2,[1,2],3)) // => ["a","b"]; a is now [1,2,[1,2],3,3,4,5]

let a4 = new Array(5); // Start with no elements and length 5
console.log(a4.fill(0)) // => [0,0,0,0,0]; fill the array with zeros
console.log(a4.fill(9, 1)) // => [0,9,9,9,9]; fill with 9 starting at index 1
console.log(a4.fill(8, 2, -1)); 