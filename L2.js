//if ...else

// if(condition){ --> condition has a result true or false
//     instruction; --> what if true?
//         } else {
//     instruction; --> what if false?
//         }

// // check for odd and even
// let a = -1
// if (a > 10) {
//     console.log("больше 10")
// }
// if (a < 100) {
//     console.log("меньше 100")
// }
// if (a / 2 > 20) {
//     console.log("результат деления на 2 больше 20")
//     console.log(a / 2)
// }
// if ( a >= 5 && a <= 40 ) {
//     console.log("значение переменной между 5 и 40 включительно")
//    } else {
//     console.log("значение переменной меньше 5 или больше 40")
// }
//  // «Улитка ползёт вверх по стене высотой 5 метров. Каждый день
// // она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра.
// // За сколько дней она доползёт до вершины стены.»
//
console.log("============================Task Улитка ============================")

let distanceDay = 3;
let distanceNight = -2;
let wall = 5;

let meters = distanceDay;
let allDays = 1;

    for (let i = 1; i <= wall; i++) {
        if (meters < wall) {
            meters = meters+ distanceNight + distanceDay
            //console.log(meters)
            allDays++
        }
    }
console.log( allDays)

 console.log("============================Task Калькулятор============================")
// 1.2 Напишите простенький калькулятор (*, /, +, -). Проверьте ваш код на охват исключений для арифметических операций.
// У вас должны быть две переменные для исходных чисел и одна для оператора. В зависимости от
// оператора, должно происходить то или иное арифметическое действие и выводиться результат в консоль.
    let num = 1;
    let num2 = 0;
    let operator = '/';

    if(operator == '+') {
        console.log(num + num2)
    }
    if(operator== '-') {
        console.log(num - num2)
    }
    if (operator == '*') {
         console.log(num * num2)
         }
    if (operator == '/' && num2 != 0) {
        console.log(num/num2)
        } else {
        console.log('на ноль делить нельзя')
    }



class SmallestIntegerFinder {
    findSmallestInt(args) {
        let min = Number.Max_Value;

        for(let i = 0; i < args.length; i++) {
            if(min > args[i]) {
                min = args[i]
            }
        }
        return min

    }
}
function isLucky(n) {
    let sum  = 0;
    let str =  n.toString()
    for (let i = 0; i < str.length; i++) {
        sum += +str[i]
    }
    console.log(sum)
    if (sum == 0 || sum % 9 == 0) {
       return  true
    } else {
        return false
    }
        }

console.log(isLucky(123456))

