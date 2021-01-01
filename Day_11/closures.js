/*  Uses of closures:
-- Module design pattern
-- Currying
-- Functions like once
-- memoize
-- maintaining state in aasync world
-- setTimeouts
-- Iterators
-- and many more...
*/

function x(){
    var i = 1;
    setTimeout(function(){

        console.log(i);
    }, 4000);

    console.log("hi");   // "hi" will be printed first and then after 4 sec "1" will be printed.
}
x();