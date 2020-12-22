function finall(a,x){
    let res = [],
    len = a.length,
    pos = 0;
    
    
    while(pos<len){
        pos = a.indexOf(x,pos);
        if(pos === -1) break;
        res.push(pos);
        pos = pos+1;
    }
    return res;
}


b = [66,7,4,3,4,8,89,90,4]
console.log(finall(b,4))