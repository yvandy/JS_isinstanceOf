let o = {x:1,y:2,z:3};
o.propertyIsEnumerable('toString'); //false

for (let p in o){
    console.log(p); // this prints own property not own properties not inherited ones
}

for (let p in o){
    if(!o.hasOwnProperty(p)) continue;
}

for(let p in o){
    if(typeof o[p] === "function") continue;
}