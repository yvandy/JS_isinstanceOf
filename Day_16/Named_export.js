// Named export 

class Nokia{
    volumeUp(){
        console.log("High volume");
    }
}

function show(){
    console.log("Helo Module");
}

export const a = 10;

export {Nokia,show};