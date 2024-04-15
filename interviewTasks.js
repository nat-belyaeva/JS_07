// вывести четные числа от 0 - 50 не используя самих цифр
// let zero = +false
// let one = +true
// let two = one + one
// let five = two * two + one
// let fifty = (five * five) * two
// console.log(zero)
// console.log(fifty)
// console.log(five)
// for(let i = two; i <= fifty; i += two) {
//     console.log(i)
// }
//
//
//
//
// let nol = +[]
// let odin = nol ** nol
// let dva = odin + odin
// let pyat = dva + dva + odin
// let pyatdesyat = +('' + pyat + nol)
// console.log(nol)
// console.log(odin)
// console.log(pyat)
// console.log(pyatdesyat)
// let z = +[]
// console.log(++z)
// //remove dublicates
// const numbers = [1, 2, 3, 4 , 4, 4, 4, 5, 6, 6, 7]
// const names = ['abc', 'qwerty', 'Anna', "Tanya",'Nat', 'abc', 'abc', 'Anna', "Tanya",'Nat']
// const uniqueNum = [... new Set(numbers)]

//У вас есть массив со скобками, предположим
// [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] . Количество элементов и последовательность может быть разной.
// Нужно выяснить, равно ли количество открывающих и закрывающих скобок одного типа. Последовательность не важна.
//

function isBalanced1 (arr) {
    let counter = 0
    for(let i =0; i < arr.length; i++) {
        if(arr[i] === '[') {
            counter++
        } else {
            counter--
        }
    }
    return counter === 0 ? 'equal' : 'not equal'
}
console.log(isBalanced1('[][][[]]')); // valid
console.log(isBalanced1('[[[[]]]][[[]]][[]][]')); // valid
console.log(isBalanced1('[]][[[]]')); // invalid
console.log(isBalanced1('][[[]][][')); // invalid
//функция isBalanced, которая принимает строку s,  содержащую скобки '[]', проверяет правильность  расстановки скобок.  Возвращает 'valid' or 'invalid'
function isBalanced(s) {
    let res = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "[") {
            res.push(s[i]);
            console.log(res)
        }else if (s[i] === "]") {
            if(res[res.length - 1] === "[") {
                res.pop();
                console.log(res)
            }else {
                return "invalid"
            }
        }
    }
    return res.length === 0 ? "valid" : "invalid";
}
// console.log(isBalanced('[][][[]]')); // valid
// console.log(isBalanced('[[[[]]]][[[]]][[]][]')); // valid
//console.log(isBalanced('[]][[[]]')); // invalid
 console.log(isBalanced('][[[]][][')); // invalid