let a =20;
{
    var a= 20; //trying to shadow a let variable inside a block using var variable is not possible, this is illegal shadowing
    // but trying to shadow a let variable using a let varible inside a block is totally fine.

    // But vice versa is legal like: trying to shadow a var varibale inside a block using let variable is legal
    /*
        var a =20;
        {
                let a = 20;
        }

    */

}
