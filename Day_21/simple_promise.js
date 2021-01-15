

    let promiseCleanRoom = new Promise(function(resolve,reject){
        
        let isClean = false;

        if(isClean){
            resolve('Clean');
        }else{
            reject('not Clean');
        }

    });


    promiseCleanRoom.then(function(fromResolve){

        console.log('the room is ' + fromResolve);
    }).catch(function(fromReject){
        console.log('the room is ' + fromReject);
    })