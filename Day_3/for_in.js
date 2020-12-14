var circle = {rad1:5, rad2:6};

function CircleArea(){
    this.color = "red";
}

CircleArea.prototype = circle;

var obj = new CircleArea();

for (const prop in obj){
    if(obj.hasOwnProperty(prop)){
        console.log(`obj.${prop} = ${obj[prop]}`);
    }
}


function Carea(rad){
    return (3.14*rad*rad);
}

for(let val of Object.values(circle)){
    const result = Carea(val);
    console.log(result);
}



// for(let p in String){
//     console.log(String[p]);
// }