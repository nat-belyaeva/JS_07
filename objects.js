// ===================  Обьявление обьекта  ===========================
// let user = new Object();
// let use1 = {}
// let arr = new Array();
// let str = new String()
//
// let arr1 = []
//
// let user1 = {
//     name: 'Nat',
//     age: 38,
//     isAdult: true,
//     "my salary": undefined,
//     a: 123
//     }
// // console.log(user1)
// // console.log(user1.age)
// console.log(user1["my salary"])
// //console.log(user1."my salary") //ошибка
// console.log(user1["name"])
// // update
// user1.age = 20
// user1.name = "Tim"
//
// user1["isAdult"] = false
//
// let newName = 'newName'
// user1["name"] = newName
// console.log(user1)
//
//
// //add new one
// user1.address = {
//     country: 'USA',
//     city: "NY"
// }
//
// user1["pet"] = 'Dog'
//
// let hobby = {
//     sport : "swimming",
//     cookery: "sweets"
// }
// user1[hobby.sport] = '3 days a week'
// user1[hobby.cookery] = "online"
//
// console.log(user1)
// console.log(typeof user1)
// console.log(user1.address)
// console.log(user1.address.city)

//delete

// delete user1.address.city
// console.log(user1)

// создание объекта с использ пременной

// let name = 'Anna'
// let age = 17
// const user = {
//     [name]: age,
//     ['hobby']: 'sport'
// }
// console.log(user)
// // обращение к обьктум
//
// const customers = [
//     {
//         id: '01',
//         personalInfo: {
//             name: {
//                 first: 'John',
//                 last: 'Dow',
//             },
//         },
//     },
//     {
//         id: '02',
//         personalInfo: {
//             name: {
//                 first: 'Jane',
//                 last: 'Dow',
//             },
//             dob: '01/01/1990',
//             "contactInfo": {
//                 phone: '+123456789',
//                 email: null,
//                 address: null,
//             },
//         },
//         purchases: [null],
//     }];
// //1 уровень
// console.log(customers.length)
// console.log(customers[0])
// console.log(customers[1])
// console.log(customers[2])
//
// // 2 уровень
// console.log(customers[0].id)
// console.log(customers[1].purchases)
//
// //3
// console.log(customers[1].personalInfo.name)
// console.log(customers[1].personalInfo['name'])
// console.log(customers[1].personalInfo.dob)
//
// //4
// console.log(customers[1].personalInfo.name.first)
// console.log(customers[1].personalInfo.contactInfo.phone)

// проверка существующих свойст

// let user = {}
// console.log(user.age)
// console.log(user.age === undefined) // true свойсво не существует

// через оперетор in (идет по ключам)
// let obj = {
//     firstName: 'Sofia',
//     lastName: 'I.',
//     age: 35,
//     language: 'Java',
//     newKey: undefined,
//     undefined: false,
//     job: null,
// }
// console.log('firstName' in obj)
// console.log('first' in obj)
// console.log(undefined in obj)
// console.log('Java' in obj)
//
// console.log(obj.newKey === 123)

// let name = obj.firstName
// let language = obj.language
// console.log(name, language)
//
// let a  = ` Hi ${name}, Do you like ${language}`
// console.log(a)
//
// let newKey = 'hello'
// obj[newKey] = a
// console.log(obj)

//цикл for .. in
//for(let key in object) {
// Тело цикла
// }

let obj = {
    firstName: 'Sofia',
    lastName: 'I.',
    age: 35,
    language: 'Java',
    newKey: undefined,
    undefined: false,
    job: null,
}
for(let key in obj) {
   // console.log(key)
   // console.log(obj[key])
    console.log(key + ": " + obj[key])
}

//
