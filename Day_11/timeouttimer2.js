function x(){
    for(var i=0;i<10; i++){
        function close(x){
            setTimeout(function(){
            console.log(x);
    },1000*x);
    }

    close(i);
}
console.log("hi");
}

x();