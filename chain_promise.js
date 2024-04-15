function getEventNUmber(value, delay) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(value % 2 == 0){
                resolve(value)
            } else {
                reject(new Error("value is not even number"))
            }
        }, delay)
    })
}

// promise chain:
getEventNUmber(6, 1000)
.then(result => {
    console.log('step 1: getting the result with even number: ', result)
    return getEventNUmber(1, 2000)
})
.then(result => {
    console.log('step 2: getting the result with even number: ', result)
    return getEventNUmber(4, 3000)
})
    .then(res => {
        console.log('step 3: getting the result with even number: ', res * 2)
        return getEventNUmber(2, 3000)
    })
.catch(error => {
    console.log('promise chain error: ', error) // console.log('promise chain error: ', error.message)
})