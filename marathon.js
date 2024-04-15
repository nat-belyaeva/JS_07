function swapVar(a, b) {
if( typeof a !== 'number' || typeof a !== 'number')  {
return 'Invalid input'
} else {
a = a + b
b = a - b
a = a - b

return [a, b]
//return 'a is ' + a + 'b is ' + b
}
}

console.log(swapVar(2 , 10))
console.log(swapVar(2.5 , 10.3))
console.log(swapVar(-2 , -10))

console.log(swapVar("zsdf" , 10.3))
console.log(swapVar(true , 10.3))
console.log(swapVar(null ,null))

