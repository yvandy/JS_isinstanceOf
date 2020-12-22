
// Basic way of copying one object to other object// 

let target= {x:1}
source = {y:2,z:3}

for(let key of Object.keys(source)){
    target[key] = source[key];
}
console.log(target);

// Object.assign()//

