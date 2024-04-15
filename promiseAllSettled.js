//Promise.allSettled
//Behaviour:
// It retuns a single promise that is fullfilled with an array of result objects, one for each promise
//each result object contains:
//a status(etheir'fullfilled' or 'rejected') and
// a value (fulfilled value) or reason (rejected reason)

//use case://When u want to process all promises, whether they succeed or fail,
//and you want to gather information about the outcome of each promise


//case2:
//f1 -resolve
//f2 -reject

const getData1 = ()=> {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
             resolve('Data from getData1')
            // const data = [1, 2, 3]
            // resolve(data)
        })
    }, 5000)
}
const getError = ()=> {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            //  resolve('Data from getData1')
            // const data = ['oh error']
            reject(new Error("Oh error"))
        })
    }, 5000)
}
Promise.allSettled([getData1(),
                          getError()])
    .then(results => {
        results.forEach(res => {
            if(res.status === 'fulfilled') {
                console.log('value; ', res.value)
            } else {
                console.log(res.reason)
            }
        })
    })



