// one parameter
    const square = num => num * num
    const res = square(5)
    console.log(res)
//no parameters
    const mesg = () => "Hello js"
    console.log(mesg())
//incorrect
// const mesg1 =  => "Hello js"
// console.log(mesg())
//two or more

const add = (a, b) => a + b
console.log(add(3, 5))

const getFullName = person => `${person.firstName} ${person.lastName}`
const person = {
    firstName: "Nat",
    lastName: "Belyaeva"
}
console.log(getFullName(person))

//
const greet = (userName , age) => `Hello, ${userName}! you are ${age} years old`
console.log(greet("NAt", 38))

//rest parameters ....varargs
    const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0)
const total = sum(1, 2, 3, 4, 5)
console.log(total)

const browserInfo = (browser = 'chrome', ... details) => {
    console.log(`Browser: ${browser}`)
    console.log('other details:', details)
}

browserInfo()
browserInfo('firefox', 1, 'mozilla', 'etc')

const findMaxVal = (a, b, c) => {
    return Math.max(a, b, c)
}
const maxValue = findMaxVal(14, 2, 5)
console.log(maxValue)


