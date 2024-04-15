// Promise.any()
// The Promise.any() static method takes an iterable of promises as input and returns a single Promise.
// This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value.
// It rejects when all of the input's promises reject (including when an empty iterable is passed),
// with an AggregateError containing an array of rejection reasons.

const promise1 = Promise.reject(0);
const promise4 = Promise.reject(0);
const promise5 = Promise.reject(0);

const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];
const promisesAllRejected = [promise1, promise4, promise5];
//Promise.any(promises).then((value) => console.log(value));
Promise.any(promisesAllRejected).then((value) => console.log(value)).catch((err) =>  console.error('all11 promises rejected: ', err)) ;

// const getData1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('get data1')
//         }, 500)
//     })
// }
// const getData2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('get data2')
//         }, 200)
//     })
// }
//
// const getData3 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('get data3')
//         }, 1000)
//     })
// }
//  Promise.any([getData2(), getData3()]). then(res => {
//     console.log('first success: ', res) //log first resolved
// })
//     .catch((err => {
//         console.error('all promises rejected: ', err) // if all rejected
//     }))

const failure = new Promise((resolve, reject) => {
    reject("Always fails");
});

Promise.any([failure]).catch((err) => {
    console.log(err);
});
// AggregateError: No Promise in Promise.any was resolved