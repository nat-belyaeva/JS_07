//.includes(), .reverse(), .find(), .filter(), .every(),
//some(), sort(), .forEach()
//.join(), .slice(), splice(), Number.isInteger()

//.includes()

// true false
//Синтаксис: array.includes(searchElement, search from [index])

// const arr = ['a', 1, null, 'yes', false, NaN, undefined, ['k'], {}, []];

// console.log(arr.includes('a'))
//  console.log(arr.includes('a', 1))
 //console.log(arr.includes('1'))
 //console.log(arr.includes('ye'))
 //console.log(arr.includes(null))
 //console.log(arr.includes(undefined))
 //console.log(arr.includes({}))

 //console.log(arr.includes('k'))
// console.log(arr.includes(NaN))
// console.log(arr.includes(null, -8))

// .reverse()
// const arr = [1, 2, 3, 4, 5]
// arr.reverse()
// console.log(arr)

//.filter() мутируют исходнный массив
//
// const arr = [-1, -2, 3, 6, -5, 0]
// //
// // // >=0
//  const newArr = arr.filter(el => el >= 0)
// //  console.log(arr)
// // //console.log(arrNew)
// //
// // // == 0
// //
// // const arr1 = [-1, -2, 3, 6, -5, 0]
// const num = arr.filter(el => el == 0)
// console.log(num)
//   console.log(arr)
//
// const arr2 = ['a', 'b', 'c', 'd', 'e', 'f']
// const res = arr2.filter((el, index) => index % 2 !== 0)
// console.log(res)
//
//
const words1 = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present']
const modifiedArr = words1.filter((el, index, arr) => {
    let addText = " extra"
    words1[index + 1] += addText
    //el =  el + addText
    return el
})
console.log(modifiedArr)
//
// // toUpperCase() новый массив возвращает изначальный, а старый будет мутирован
//
// const words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
// const arr3 = []
//  words.filter((el, i) => {
//    arr3[i] =  el.toUpperCase()
//     return el
// })
// //console.log(resUpperCase)
// console.log(words)
// console.log(arr3)

//.find()
//array.find() поиск ПЕРВОГО элемента в массиве, который удовлетворяет условия поиска
// const arr = [-1, -2, -3, 6, -5, 8, 13];
// let num = arr.find(el => el > 0)
// console.log(num)
//
// const arr1 = [-1, -2, -3, 6, -5, 8, 13];
// let num2 = arr.find((el, i) => el < 0 && i > 1)
// console.log(num2)

//.findIndex()
// const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"]
// const index = fruits.findIndex(el => el === "banana")
//
// console.log(index)

// .every() true false
// const arr = [10, -2, 0, 1, 9, 5]
// console.log(arr.every(el => el % 2 === 0))


//some
//     [12, 5, 8, 1, 4].some(el => el > 10)

//sort
// a - b

// const arr = [1, 10, 6, 1600, 20, 5]
// //arr.sort((a, b) => b - a)
// arr.sort()
// console.log(arr)

//Сорт со строками a-z
// const arr = ['cap', 'logo', 'apple', 'Österreich','banana', 'loop', ]
// arr.sort((a, b) => a.localeCompare(b))
// console.log(arr)
//min + max in arr
// const arr = [1, 10, 6, 160, 2, 5, 60]
// let sum = arr.sort((a, b) => a - b)[0] + arr.sort((a, b) => b - a)[0]
// console.log(sum)

// let countries = ['Österreich', 'Andorra', 'Vietnam']
//
// const arr = countries.sort((a, b) => a - b)
// console.log(countries)
// console.log(arr)


// console.log(countries.sort((a, b) => b.localeCompare(a)))
// function compare(a, b) {
//   if (a меньше b по некоторому критерию сортировки) {
//     return -1;
//   }
//   if (a больше b по некоторому критерию сортировки) {
//     return 1;
//   }
//   // a должно быть равным b
//   return 0;
// }

//.forEach()
//.forEach((item, index, array)

// const arr = ['One', 'two', 'three', 'Go!']
//
// const newArr = [];
// arr.forEach((el) => newArr.push(el, el.length))
// console.log(newArr)
// const arr = ["Bilbo","Österreich", "Gandalf", "Nazgul",].sort()
//     arr.forEach((el, i, arr) => console.log(`${el} is at index ${i} in ${arr}`))

// .join()
// array.join([separator]),
//
// const aa = [1, 2, 3];
// // console.log(a.join(','))
// // console.log(a.join(''))
// // console.log(a.join(' '))
// // console.log(a.join('+'))
// // console.log(a.join(';'))
// // console.log(a.join())
//
// const arr = ['a', 'b', 'c', 'd', ...aa]
//
// console.log(arr.join(' ?  '))

//.slice()копированиe элементов массива согласно указанным индексам

//array.slice([start[, end]])

//start - индекс начала для копирования
//end - до какого индекса (не включительно)
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.slice()
// console.log(arr)
// console.log(newArr)
// console.log(arr === newArr)
//
// console.log(arr.slice(1, 3))
//
// console.log(arr.slice(2))
// console.log(arr.slice(0, -3))
// console.log(arr.slice(6))


// function sumArr(arr) {
//     arr.sort((a , b) => a - b)
//     let min = arr.slice()[0]
//     let max = Number(arr.slice(-1))
//     console.log(max)
//     return max + min
// }
// console.log(sumArr([1, 7, 5, -8, 13, -6, 2]))

//splice() удаления/замены/добавления элементов.
// array.splice(start[, deleteCount[, element1[, element2[, ...]]]])

// const arr = ['hi', 'by', 'hello', 'good', 'girl', 'boy']
// let removed = arr.splice(2, 3, 123, 456)
// console.log(removed)
// console.log(arr)

// //
// const arr = ['hi', 'by', 'hello', 'good', 'girl', 'boy']
// let r = arr.splice()
// console.log(arr)
// console.log(r)
//
// const arr1 = ['hi', 'by', 'hello', 'good', 'girl', 'boy']
//  arr1.splice(1)
//
// console.log(arr1)
// //
// const arr2 = ['hi', 'by', 'hello', 'good', 'girl', 'boy']
// arr2.splice( -2)
//
// console.log(arr2)

//.map()
// Если нам нужно перебрать массив и вернуть данные для каждого элемента – мы используем map.
// Метод «arr.map(callback[, thisArg])

// power  of 2 **
// const arr = [1, 2, 3, 4]
// const res = arr.map((el, i) => {
//
//        return  i === 2  ? el ** 2 : el
// })
// console.log(res)

// let num = 4
// console.log(num)
// console.log(String(num))
//
// const arr = [-37, -8, 56.3, 0, 18.9]
// const newArr = arr.map(el => String(el))
// console.log(newArr)
//
// const numArr = newArr.map(Number)
// console.log(numArr)

//.reduce()

// let arr = [1, 2, 3, 4, 5]
// let res = arr.reduce((acc, curr) => acc - curr, 0)
// console.log(res)

// const arr = [ '-37', '-8', '56.3', '0', '18.9' ]
// let new1 =  arr.map(Number).sort((a, b) => a - b)
// let new2 =new1.splice(1, arr.length-2)
// let res = new1.reduce((sum, curr) => sum + curr, 0)
// console.log(res)
// console.log(-37 + 56.3)

// function number (array){
//     const res = array.map((el, i) => `${i + 1}: ${el}`)
//     return array === [] ? [] : res
// }
//
//
// console.log(number(["a", "b", "c"]))

// function repeats(arr){
//    return  arr.filter((el, i) => arr.indexOf(el) === arr.lastIndexOf(el)).reduce((sum, curr) => sum + curr, 0)
//
//
// };
// console.log(repeats([4,5,7,5,4,8]))

// function removeChar(str){
//    let newStr = str.replace(str[0], '')
//     let res = newStr.replace(newStr[newStr.length - 1], '')
//    return res
// }
//
// console.log(removeChar('3n885ps5'))


//.indexOf()
//
// let arr = [1, 0, false, 0];
// console.log(arr.indexOf(0))
//
// console.log(arr.indexOf(0, 2))

//.lastIndexOf() возвращает последний индекс искомого элемента в массиве. Если он не найден, вернёт -1.

//  array.lastIndexOf(searchElement[, from = array.length])
// const arr = ['1', 5, 'b', NaN, 'a', 'b', 0]
// console.log(arr.lastIndexOf(45646))
// console.log(arr.lastIndexOf(NaN))
// console.log(arr.indexOf(NaN))
// console.log(NaN === NaN)
// console.log(arr.length)
// console.log(arr.lastIndexOf('b', 5))
// console.log(arr.lastIndexOf('b'))
// console.log(arr.lastIndexOf('b', 4))

//Уникальные элементы в массиве.

const arr = [-1, -2, 0, -2, 7, 7, 7, -1, 0, 8, 3, 4, 2, 2];

const res = arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el))

 const res = arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el))
Дубликаты в массиве

//1. только повторяющиеся элементы (дубликаты).
// const arr = [-1, -2, 0, -2, 7, 7, 7, -1, 0, 8, 3, 4, 2, 2]
// const res = arr.filter(el => arr.indexOf(el) !== arr.lastIndexOf(el))
//
// console.log(res)
// 2.элементы встречаются только один раз.
// const arr = [-1, -2, 0, -2, 7, 7, 7, -1, 0, 8, 3, 4, 2, 2]
// const res = arr.filter((el, i) => i === arr.indexOf(el))
// console.log(res)

// 3. Дан массив arr.
//Вернуть массив дубликатов, при этом каждый дубликат
//должен быть представлен в единственном числе, и в порядке,
//когда он появляется в массиве в последний раз.
// const arr = [-1, -2, 0, -2, 7, 7, 7, -1, 0, 8, 3, 4, 2, 2]
// const res = arr.filter((el, i) => i !== arr.indexOf(el) && i === arr.lastIndexOf(el))
// console.log(res.reverse())

// const arr = [-1, -2, 0, -2, 7, 7, 7, -1, 0, 8, 3, 4, 2, 2]
// const res = []
// arr.forEach((el, i) => {
//     if (i !== arr.indexOf(el) && i === arr.lastIndexOf(el)) {
//         res.push(arr[i])
//
//     }
// })
// console.log(res.reverse())

// const arr = ['1 32 -3 n -5 hj n']
// let res = arr.join()
//     .split(' ')
//     .map(Number)
//     .filter(el => !isNaN(el))
//     .reduce((sum, curr) => sum + curr, 0)
//
// console.log(res)















