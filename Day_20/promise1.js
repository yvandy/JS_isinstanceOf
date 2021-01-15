console.log("synchronous 1");

setTimeout(_ => console.log("Timeout 2"),0);

Promise.resolve().then(_=> console.log("promise 3"));

console.log("synchronous 4");