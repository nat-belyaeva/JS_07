//one parameter

const square = num => num * num // () =>
console.log(square(5))
//no param
const hello = () => 'hello team!'
console.log(hello())

const add = (a, b) => a - b
console.log(add('4' , 5))

const getPersonInfo = person => `Hello ${person.firstName} ${person.lastName} ${person.age}`
const person = {
    firstName: "Nat",
    lastName: "Bel",
    age: 38
}
console.log(getPersonInfo(person))

//
const greet = (userName = "Tanya", age = 34) =>  `Hello, ${userName}!! you are ${age} years old`
console.log(greet())
console.log(greet("Anna", 44))
console.log(greet("Nat", 38))


const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0)
const total = sum(1, 2 , 3, 4 , 5)
console.log(total)

const browserInfo = (browser = "ff", ...details) => {
    console.log(`browser: ${browser}`)
    console.log('Details:',  details)
}
browserInfo()

browserInfo('chrome', 1, "1231", 'etc')


const maxVal = (a, b, c) => {
    return Math.max(a, b, c)
}
console.log(maxVal(15, 89, 100))

