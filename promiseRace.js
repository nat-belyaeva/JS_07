//The Promise.race() static method takes an iterable of promises as input and returns a single Promise.
// This returned promise settles with the eventual state of the first promise that settles.

//This example shows how Promise.race() can be used to race several timers implemented with setTimeout().
// The timer with the shortest time always wins the race and becomes the resulting promise's state.
//case2:
//f1 -resolve
//f2 -reject
// //Function that returns a rejected promise
const rejectPromise = ()=> {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("Rejected")
        })
    }, 500)
}
//Function that returns a resolved promise
const resolvePromise = ()=> {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Resolved')
        })
    }, 100)
}
// const resolvePromise1 = ()=> {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve('Resolved1')
//         })
//     }, 500)
// }


//
// //Use Promise.race() to see which promise settle first
Promise.race([rejectPromise(),
                    resolvePromise()
                    //resolvePromise1()
                    ])
.then(res => {
    console.log('Result: ', res)
})
.catch(err => {
    console.log("error ", err)
})
//===========================================================
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one');
// });
//
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 200, 'two');
// });
//
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(reject, 200, 'three');
// });
//
// Promise.race([promise1, promise2, promise3]).then((value) => {
//     console.log(value);
// }).catch(err => {
//     console.log(err)
//     }

//)