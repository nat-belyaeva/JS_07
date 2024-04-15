// console.log("JavaScript".length)
//
//  console.log("JavaScript"[6])
// console.log("JavaScript".charAt(2))
// //a - z 97 -122
// console.log("JavaScript".charCodeAt(1)) //Ascii value
//
// console.log("JavaScript".toLowerCase())
// console.log("JavaScript".toUpperCase())

// console.log("JavaScript".slice(2, -5))
// console.log("Javascript".substring(2, 6))
// console.log("Javascript".substring(-2, 6)) //-2 -> 0, 6
//
// console.log("JavaScript".concat( " oneLove").concat(' !!!!'))
//
//
// let lang = "Java_JavaScript_Python"
//
// const arr = lang.split('_')
// console.log(arr)
// console.log(arr[0])
// console.log(arr[5])
//
// console.log("Javascript".includes("Java"))
// console.log("Javascript".includes("Python"))

// console.log("Dev test Framework".replace('Dev', 'Auto'))
// console.log("Dev test Framework Dev".replace('Dev', 'Auto'))
// console.log("Dev test Framework Dev".replaceAll('Dev', 'Auto'))
// console.log("01-01-1990".replaceAll('-', '/'))
//
// console.log(("  hello js    ").trim())
// console.log(("  hello js    ").trimStart())
// console.log(("  hello js    ").trimEnd())

// console.log("Dev".padEnd(10, "*"))
// console.log("Develop".padEnd(10, "*"))
// console.log("Developer".padEnd(10, "*"))
// console.log("Developers".padEnd(10, "*"))
//
//
// console.log("Dev".padStart(10, "*")) //*******dev
// console.log("Develop".padStart(10, "*"))
// console.log("Developer".padStart(10, "*"))
// console.log("Developers".padStart(10, "*"))
//
// console.log("Javascript".startsWith("J")) //true
// console.log("Javascript".endsWith('script*')) //true
//
// console.log("dev".repeat(3))

// console.log("Hello cats and dogs".indexOf("cats"))
// console.log("Hello cats and dogs".indexOf("c"))
// console.log("Hello cats and dogs and cats".lastIndexOf("cats"))
//
// console.log("Hello cats and dogs".search("cats"))
// console.log("Hello cats and dogs".search("c"))

//functions

function add(a, b) {
    return a + b
}

console.log(add(2, 2))

function print() {
    console.log("Task1")
}

print()
print()
print()

//2 function expression:Annonymous fuction

const multiply = function (x, y) {
    return x * y
}

const mult = multiply(3, 3)
console.log(mult)

//Arrow function

const divide = (x, y) => x / y
console.log(divide(10, 2))

//Function Constructor:

const substract = new Function('a', 'b','return a - b')
console.log(substract(10, 2))

// Annonymous function

const numbers = [1, 2, 3, 4, 5]
const squareNum = numbers.map(function (e){
    return e * e
})
console.log(squareNum)

const numbers1 = [1, 2, 3, 4, 5]
const squareNum1 = numbers1.map((e) =>  e * e)
console.log(squareNum1)

//8 Recursive function call yourself 4 --> 4*3*2*1  == 24
function factorial(n) {
    if(n === 0 || n === 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}



