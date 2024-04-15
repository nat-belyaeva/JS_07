//1 find unique value from array:
const arr = [1, 2, 3, 2, 3,2, 7, 8, 2]
const uniqueArr = [...new Set(arr)] //spread operator
console.log(uniqueArr)

//2 int to Str
const num = 32
const numStr = num + '' //'32'
console.log(numStr + 10) //32 +10 = 3210 concatination
//or
const numStr1 = String(num)
console.log(numStr1 + 10)

//3 float to int
const floatNum = 3.76
const intNum = parseInt(floatNum)
console.log(intNum)

//4 check is if a variable is a Number:
const value = 56
if(typeof value === 'number'  && !isNaN(value)){
    console.log(value + ' is number')
} else {
    console.log(value + " is not a number")
}

//swap variable values:
let a = 5
let b = 10;

[b, a] = [a, b];
console.log(a, b)

//6 check if an object has a property"
const person = {
    name: 'John',
    age: 28
}
if(person.hasOwnProperty('name')) {
    console.log('person has property')
}

//7 remove falsy value from the array:(false, 2, "", null, undefined, NaN)
const values = [0, 1, false, 2, '', null, undefined, NaN, 4]
const newVal = values.filter(Boolean)
console.log(newVal)

//8 String --> UpperCase, LowerCase

const str = 'We learn JS'
const u1 = str.toUpperCase()
const l1 = str.toLowerCase()
console.log(u1)
console.log(l1)

//9   check if array contains a value:
const lang = ['java', 'js', 'python', 'ts']
if(lang.includes('js')) {
    console.log('found')
}

//10 check if an array is empty:
const empty = []
if(empty.length === 0) {
    console.log('Array is empty')
}

//11 generate a random number from the range
const min = 10
const max  = 20
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
console.log(`Random Number : ${randomNumber}`)

//12 String to number
const strNumber = '32' // 32.0, 32.111
const x1 = parseFloat(strNumber)
console.log(x1)

//13 JOin array elements into a String:
const words = ['Hello', 'Nat']
const sentence = words.join(' ') //разделитель пробле или все что угодно
console.log(sentence)

// 14 get obj property
const user = {
    name: 'Tom',
    age: 25,
    dob: '01-01-1999',
    address: {
        street: 'Street1',
        house: '12'
    }
}
console.log(user['name'])
console.log(user['dob'])
console.log(user['address']["street"])
console.log(user.address.house)

//15 clone an array or object

const nums = [10, 20, 30, 50, 66, 70]
const numsDuplicate = [...nums]
console.log(numsDuplicate)

const userDuplicate = {...user} //spread operator
console.log(userDuplicate)

// 16 covert object to array

const employee = {
    name: 'Tom',
    age: 25,
    dob: '01-01-1999',
    }

//a. keys array
const keysArray = Object.keys(employee)
console.log(keysArray)
// b values array
const valuesArray = Object.values(employee)
console.log(valuesArray)

// c key-value array
const keyValArr = Object.entries(employee)
console.log(keyValArr)

//17 get current date and time:
const currentDate = new Date()
console.log(currentDate.toLocaleString())

//18 check if variable is defined
let i
if(typeof i === 'undefined') {
    console.log('variable is not defined')
}

//19 truncate an array:
const testing = [0, 1, 2, 3, 4, 5, 6, 7]
testing.length = 3
console.log(testing)

//20 Last item in array: without using .length
const pop = [0, 1, 2, 3, 4, 5, 6, 7]
const n1 = pop.slice(-1)

console.log(n1)




