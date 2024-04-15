const  randomNumberPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        const valueRandom = Math.random()

        if(valueRandom > 0.5) {
            resolve(valueRandom)
        }else {
            reject(new Error('value is too small ' + valueRandom))
        }
    }, 2000) //delay 2 sec
})

randomNumberPromise.then(result => {
    console.log('promise is fulfilled', result)
}).catch(err => {
    console.error("promise is rejected", err)
})

