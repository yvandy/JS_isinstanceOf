function max(first =-Infinity,...rest){

    let maxVal = first;

    for(let n of rest){
        if (n> maxVal){
            maxVal = n;
        }
    }
    return maxVal;
}

res = max(60,7,78,90,45)
console.log(res);