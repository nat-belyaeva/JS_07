//1 function declaration

function add(a, b) {
    return a + b
}

function print() {
    console.log("hi")
}
const sum = add(5, 6)
console.log(sum)

print()

//2 function expression:Annonymous fuction

const multiply = function(x, y) {
    return x*y
}
const mult = multiply(5, 3)
console.log(mult)

//3 Arrow function
const divide = (a1, b1)=> a1 / b1
const div = divide(20, 2)
console.log(div)

//4 Function Constructor:

const substract = new Function('a', 'b', 'return a - b')
const subs = substract(10, 2)
console.log(subs)

//5 IIFE(Immediately Invoked Function Expression)
//     ( function() {
//     console.log("server is up n running on port 3000")
// })()

//6 Generator Function:
// function* and yield keyword

function* generateNumberSequence() {
    yield 1
    yield 2
    yield 3
    yield 4

}
const generator = generateNumberSequence()
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)

//7Annonymous function //no specific name

const numbers = [1, 2, 3, 4, 5]
const squareNumbers = numbers.map(function(el) { //callback function
    return el * el
})
console.log(squareNumbers)

const numbers1 = [1, 2, 3, 4, 5]
const squareNumbers1 = numbers1.map((el) => { //callback function
    return el * el
})
console.log(squareNumbers1)

//8 Recursive function call yourself 4 --> 4*3*2*1
function factorial(n) {
    if(n === 0 || n === 1) {
        return 1
    } else {
      return   n * factorial(n - 1)
    }
}

console.log(factorial(5))

// Higher-Order Function

function addition(a, b) {
    return a + b
}

function multiplication(a, b) {
    return a * b
}
function operate(funcName, a, b) {
    return funcName(a,b)
}
const sum1 = operate(addition,3, 5)

console.log(sum1)
console.log(operate(multiplication, 3, 5))








