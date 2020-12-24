  
let o = {
    m: function(){
        //let self= this;
        console.log(this === o);      
        const f = (function(){
            console.log(this === o);
        }).bind(this);
        f();
    }
}
o.m();
