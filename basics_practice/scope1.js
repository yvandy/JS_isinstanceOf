var a = "hello guys....";

function first() {
    var b = "how are you .. ?";
    second();

    function second() {
        var c = "Myself Vandana ";
        console.log(a + b + c);

        three();
    }
}

function three() {
    var d = "plz like this...";
    var f = "hi";
    console.log(a + f + d);
}
first();