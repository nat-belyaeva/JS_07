// вывести четные числа от 0 - 50 не используя самих цифр

// remove dublicates
// const numbers = [1, 2, 3, 4 , 4, 4, 4, 5, 6, 6, 7]
// const names = ['abc', 'qwerty', 'Anna', "Tanya",'Nat', 'abc', 'abc', 'Anna', "Tanya",'Nat']
//
// const uniqueNum = [... new Set(numbers)]
// console.log(uniqueNum)
// const uniqueNames = [... new Set(names)]
// console.log(uniqueNames)
//
// function isBalancedH(s) {
//     let array = []
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === "[") {
//             array.push(s[i]) // array = []
//             console.log(array)
//         } else if (s[i] === "]") {
//             if (array.length) {
//                 array.pop()
//                 console.log(array)
//             } else {
//                 return 'invalid'
//             }
//         }
//     }
//     return array.length === 0 ? 'valid' : 'invalid'
// }
//
// console.log(isBalancedH('[][][[]]')); // valid
// console.log(isBalancedH('[[[[]]]][[[]]][[]][]')); // valid
// console.log(isBalancedH('[]][[[]]')); // invalid
// console.log(isBalancedH('][[[]][][')); // invalid

//создать ряд из n чисел так, чтобы:
//        первые два элемента ряда равнялись 1
//        любой другой элемент ряда был суммой двух предыдущих.
//        Пример:
//        1, 1, 2, 3, 5, 8, …

let n = 11
const arr = [1, 1]

    for (let i = 1; i < n - 1; i++) {
        console.log( arr.push(arr[i - 1]+ arr[i]))
    }
console.log(arr)
