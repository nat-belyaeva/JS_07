// //1.
// // f1 --resolve
// //f2 -- resolve
// //f3 --resolve
// //
//The Promise.all() static method takes an iterable of promises as input and returns a single Promise.
// This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed),
// with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this
// first rejection reason.
// const function1 = ()=> {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve('Data from function1')
//            //  const data = [1, 2, 3]
//            //  resolve(data)
//         })
//     }, 5000)
// }
//
// const function2 = ()=> {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve('Data from function2')
//             // const data = [4, 5, 3]
//             // resolve(data)
//         })
//     }, 3000)
// }
//
// const function3 = ()=> {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve('Data from function3')
//             // const data = [7, 8,9]
//             // resolve(data)
//         })
//     }, 3000)
// }
// Promise.all(([function1(), function2(), function3()]))
//     .then(dataArray => {
//         console.log('All data from diff functions: ', dataArray)
//     })
//     . catch(error => {
//         console.log('Error in promise ', error)
//     })


//case2:
//f1 -resolve
//f2 -reject

const getData1 = ()=> {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            // resolve('Data from getData1')
            const data = [1, 2, 3]
            resolve(data)
        })
    }, 1000)
}
const getError = ()=> {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            // resolve('Data from getData1')
            const data = ['oh error']
            reject(new Error(data))
        })
    }, 5000)
}

Promise.all([getData1(), getError()])
    . then(dataArray => {
               console.log('All data fetched: ', dataArray)
           })
    .catch(error => {
        console.log('Error occur: ', error)
    })
//==================================================
// function getEventNUmber1(value, delay) {
//
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(value % 2 == 0){
//                 resolve(value)
//             } else {
//                 reject(new Error("value is not even number"))
//             }
//         }, delay)
//     })
// }
//
// function getEventNUmber2(value, delay) {
//
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(value % 2 == 0){
//                 resolve(value)
//             } else {
//                 reject(new Error("value is not even number"))
//             }
//         }, delay)
//     })
// }

// function getEventNUmber3(value, delay) {
//
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(value % 2 == 0){
//                 resolve(value)
//             } else {
//                 reject(new Error("value is not even number"))
//             }
//         }, delay)
//     })
// }
//
// Promise.all([getEventNUmber1(3, 1000), getEventNUmber2(2, 2000), getEventNUmber3(6, 500)])
//     . then(dataArray => {
//         console.log('All data fetched: ', dataArray)
//     })
//     .catch(error => {
//         console.log('Error occur: ', error)
//     })

