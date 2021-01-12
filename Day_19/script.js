const userLeft = true
const userWatchingCatMeme = true

function watchTutorialCallback(callback, errorCallback){
    if(userLeft){
        errorCallback({
            name : 'user left',
            message: ':('
        })
    }
    else if(userWatchingCatMeme){
        errorCallback({
            name: 'user watching cat meme',
            message: 'WebDevSimplified < Cat'
        })
    }
    else{
        callback('Thumbs up')
    }
}

watchTutorialCallback(
    (message) => {console.log('success:' + message)} ,
    (error) => {console.log(error.name +' '+error.message)}
    )

    //******************************************************************************************s */

function watchTutorialPromise(){

    return new Promise((resolve, reject) => {
        if(userLeft){
        reject({
            name : 'user left',
            message: ':('
        })
    }
    else if(userWatchingCatMeme){
        reject({
            name: 'user watching cat meme',
            message: 'WebDevSimplified < Cat'
        })
    }
    else{
        resolve('Thumbs up')
    }
    })    
}

watchTutorialPromise().then(
    (message) => {console.log('success:' + message)}).catch((error) => {
        console.log(error.name +' '+error.message)})