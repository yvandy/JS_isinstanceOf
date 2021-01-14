
const calculate = (a,b,c) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(a<0||b<0||c<0)
                reject("negative numbers not allowed");
            resolve(a+b+c);
        },1000);
    })
}


const add = async () =>{                //expects a promise to be returned within this function
    const sum1 = await calculate(1,2,3);
    const sum2 = await calculate(sum1,4,5);
    const sum3 = await calculate(sum2,6,7);
    const sum4 = await calculate(sum3,8,9);
    return sum2;
}

add().then((value) => console.log(value)).catch((e) => console.log(e));
//console.log(add())






//+++++++++++++++++++++ promise channing +++++++++++++++++++++

// calculate(1,2,3).then((addition)=>{
//     console.log(addition);
//     return calculate(addition,4,5)
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e);
// })