
function attatchEventListener(){

    let count =0 ;
    document.getElementById("button1").addEventListener("click", function xyz(){
        console.log("button clicked ", ++count);
    });

}

attatchEventListener();