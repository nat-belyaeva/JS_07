// ---- JavaScript has 8 data types:
//
//  number
//  bigint
//  string
//  boolean
//  null
//  undefined
//  symbol
//
//  object
//
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53);
// console.log(Number.MIN_SAFE_INTEGER);
//
// console.log(Number.isSafeInteger(2 ** 53));
//
// console.log(typeof 123 )
// let a = 456n
// console.log(typeof a)
//
// let str = "12345"
// console.log(str)
// console.log(str[3])
// console.log(str[str.length - 2])
// console.log(str.length)
//
// //str[i]
//
// let str1 = 234 + ''
// let str2 = '' + 234
// let str3 = String(2324)
// console.log(typeof str1, typeof str2, typeof str3)
//
// let z = 2
// let s = +"2"
// console.log(z + String(s))
// console.log(z + s)
//
// // --- в number:
// let num1 = +'-567';
// let num2 = '-567' * 1;
// let num3 = Number('2324')
//
// console.log(true)
// console.log(+true)
// console.log(+false)
//
// let qwerty
// console.log(typeof qwerty)
// console.log(+undefined)
// console.log('qwe'/2)
//
//
// // =============== null ======================
//
// let varNull = null
// console.log(varNull)
// console.log(typeof varNull)


//Data types (8)
// 1.number
// 2.bigint
// 3.string
// 4.boolean
// 5.null
// 6.undefined
// 7.symbol
// 8.object


// // Numbers
// console.log(typeof 15)       // Returns: "number"
// console.log(typeof 42.7)     // Returns: "number"
// console.log(typeof 2.5e-4)   // Returns: "number"
// console.log(typeof Infinity)  // Returns: "number"
// console.log(typeof NaN)      // Returns: "number". Despite being "Not-A-Number"

// //bigint
// console.log(typeof 123456878n) // Returns: "bigint"




// // Strings
// console.log(typeof '')        // Returns: "string"
// console.log(typeof 'hello')   // Returns: "string"
// console.log(typeof '12')      // Returns: "string". Number within quotes is typeof string

// // // Booleans
// console.log(typeof true)      // Returns: "boolean"
// console.log(typeof false)     // Returns: "boolean"

// // undefined
// let u = undefined
// console.log(typeof u)             // Returns: "undefined"
// console.log(typeof undeclaredVariable)    // Returns: "undefined"

// null
// это объект в JavaScript, представляющий примитивные типы данных.
// Нулевое значение в JavaScript используется для ссылки на отсутствие какого-либо значения объекта,
// и если какая-либо функция или переменная возвращает значение null,
// мы можем сделать вывод, что объект не может быть создан.
// let b = null
// console.log(typeof b)          // Returns: "object"


//Tricky interview questions
// -----------------------------------------------------------------


// Accidental global variable
// a = 5   // если нет ключевого слова, по умолчанию подразумевается var
//let a = b = 0    // it does declare a global variable b
// let a, b         // both with let

// {
//     let a = 7
// }
// console.log(a);   // ReferenceError: a is not defined


// {
//     var a = 7
// }
// console.log(a);  // 7
// Для «var» не существует блочной области видимости


// -----------------------------------------------------------------


// Hoisting (подъем)
// Hoisting is the mechanism of moving the variables  declaration to the top of the scope.
// (Подъем — это механизм перемещения объявления переменных в начало области видимости.)


//What happens if you access myVar and myConst before declaration?


// myVar           // => ???  undefined


// console.log(myVar)
// var myVar = 'value'
// В этой ситуации объявление перемещается в верхнюю часть области видимости,
// а переменной присваивается значение undefined




// myConst         // => ???  ReferenceError
// myLet             // => ???  ReferenceError


// console.log(myLet)
// console.log(myConst)
// const myConst = 3.14
// let myLet = 'value'
// ----------------------------------------------------------------------

