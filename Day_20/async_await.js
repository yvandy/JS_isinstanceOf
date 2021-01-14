
const calculate = (a,b,c) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(a<0||b<0||c<0)
                reject("negative numbers not allowed");
            resolve(a+b+c);
        },1000);
    })
}


calculate(1,2,3).then((addition)=>{
    console.log(addition);
    return calculate(addition,4,5)
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e);
})