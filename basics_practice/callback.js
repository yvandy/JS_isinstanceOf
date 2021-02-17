const perOne = (name, callback) => {
    console.log(`IAm busy right now. Iam talking to ${name}. I will call you back. `);
    callback();
}

const perTwo = () => {
    console.log(`Hey Whatsup. I called you back `);
}

perOne("vandana", perTwo);




//---------------------------------------------------------//
// const funA = () => {
//     setTimeout(function () {
//         console.log('welcome funnA');
//     }, 3000);

// }

// const funB = () => {
//     console.log('welcome funnB');
// }

// funA();
// funB();