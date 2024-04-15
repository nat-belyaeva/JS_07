// function sum (a, b) {
//     console.log( a + b)
// }
//
// let summa = sum(5,8)
//
function task(number) {
    console.log("==================== " + number + " =================================")
}
//
// task(1)
// sum(5, 5)
//
// task(2)
//
// function sum1 () {
//     const a = 2;
//     const b = 4;
//     console.log( a + b)
// }
// sum1()
// let name = "Teacher Anna"
// function showMessage(summ) {
//
//     return    summa
// }
// console.log(showMessage());
// sum( 20, 20)
print('=============Counter ===========================')

console.log(sum2(4.3, 5))

function counter(c) {
    c = c - 2;
  return c * 2
}

console.log(counter(10))
counter(11)

task(3)

function print(string) {
    console.log(string)
}
print('=============================Arrow function===========================')

const arrowSum = (a, b) => a + b;
console.log(arrowSum(2, 5))

function sum2(a, b) {
    return a + b;
}

console.log(arrowSum(45, 0))
const arrowPow = a => Math.pow(a, 3)
console.log(arrowPow(3))

print("Палиндром")

// function viceVerse(name) {
//     let newName = '';
//
//     for(let i = name.length - 1; i >= 0; i--) {
//         newName += name[i]
//         console.log(newName)
//         }
//     return newName.toLowerCase()
//}

// console.log(viceVerse("Anna"))
// console.log(viceVerse('was it a car or a cat i saw'))

function nameReverse(str) {
    let strReverse = '';

    for(let i = str.length - 1; i >= 0; i--) {
        strReverse += str[i]
       }
    return strReverse
}

function isPalindrome(str) {
    let strNoSpace = '';
    let res
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            strNoSpace += str[i]
           // console.log(strNoSpace)
        }
        if (nameReverse(strNoSpace) === strNoSpace) {
            console.log("String is Palindrome")
            res = true
        } else {
            res = false
        }
        return res;
    }
}

    console.log(isPalindrome('q'))






