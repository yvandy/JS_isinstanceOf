
let o = {
    m: function(){
        //let self= this;
        console.log(this === o);      
        const f =()=>{
            console.log(this === o); //true arrow functioinherits this keywor
        }
        f();
    }
}
o.m();