// //async Function: First, you declare a function as async.
// // This is like telling the barista,
// // "I am going to order coffee." It prepares the function to handle tasks that take some time, like making coffee.
//
// async function getOrder() {
//     // This function is now ready to handle orders that take time.
// }
//
// //await: Inside an async function, you use await before something that takes time,
// // like waiting for coffee. It's like saying, "I will wait right here until my coffee
// // is ready before doing anything else."
//
// async function getOrder() {
//     let coffee = await makeCoffee(); // Wait for the coffee to be made.
//     return coffee; // Once it's ready, return the coffee.
// }
//
// //async function without await
//
// async function f1() {
//     console.log('return a promise(resolved)')
//     return 42
// }
//
// f1().then(res => {
//     console.log(res)
// })
//
// async function f2() {
//     console.log('return a promise(error)')
//     return new Error('oh error')
// }
//
// f2().catch(err => {
//     console.log(err)})

//async function with a resolve/result promise:

function getInfo() {
   return  new Promise((resolve, reject) => {

        setTimeout(() => {
            const valueRandom = Math.random()

            if(valueRandom > 0.5) {
                resolve(valueRandom)
            }else {
                reject(new Error('value is too small ' + valueRandom))
            }
        }, 2000) //delay 2 sec
    })
}
//create a function which is calling  randomNumberPromise
async function getNumberInfo() {
    try{
        const res = await getInfo()
        console.log("result: ", res)
    }
    catch (e) {
        console.log("Err: ", e)

    }
}

 getNumberInfo()