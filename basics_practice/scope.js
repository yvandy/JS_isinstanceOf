function a() {
    var b = 30;
    c();
    function c() {
        console.log(b);
    }
}

a();
console.log(b);
