//callback function
//async call --once this task is completed -- then only callback function will be called

//basic callback:
// function greet(name, callback) {
//     console.log('Hello ' + name) //normal/sync step/task / could be assync call / api
//     callback()
// }
// //callback function
// function welcome() {
//     console.log('welcome!!!')
// }
// greet('Nat', welcome)

//callback with async function:
// function printInfo(name, callback){
// //async function/task/step
//     setTimeout(function (){
//         console.log("printing info for " + name)
//         callback('plz call me back....')
//     }, 5000) //delay of 1000ms/ 1 sec
// }
//
// function displayMessage(mesg){
//     console.log(mesg)
// }
// printInfo('Ann', displayMessage)

function fetchUserData(userId, callback){
    setTimeout(function (){
        const users = {
            1: {
                id: 1,
                name: "Tom"
            },
            2: {
                id:2,
                name: "Jerry"
            }
        }
        const user = users[userId]
        if(user){
           callback(null, user)
        } else {
            callback('User not found..', null)
        }
    }, 2000)
}

//callback function:

function handleUserData(error, user){
    if(error){
        console.error('Error: ', error)
    } else {
        console.log('User: ', user)
    }
}

fetchUserData(3, handleUserData)
//-----------------------------------------------------------
function calculateSum(a, b, callback) {
    let sum = a + b
    callback(sum) // Call the callback function with the result (sum).
}

function showResult(result) {
    console.log("The result is: " + result)
}

calculateSum(5, 10, showResult) // This is like asking your friend to take the photo.