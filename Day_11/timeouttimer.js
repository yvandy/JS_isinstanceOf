function x(){

    for(let i=0;i<10; i++){
    setTimeout(function(){
        console.log(i);
    },1000*i);
}
console.log("hi");
}

x();