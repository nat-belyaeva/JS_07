// function noBoringZeros(n) {
//
//     while(n % 10 == 0 && n != 0) {
//         n = n / 10
//         console.log(n)
//     }
//     return n
// }
//
// console.log(noBoringZeros(250000))
//while (condition) { //condition == true;
//     code
//     so-called "loop body"

// const arr = [];
// let i = 0;
// while(i < 3) {
//     i++;
//     arr.push(i);
// }
// console.log(arr)
//
// const arr = [];
// let i = 3;
// while(i) {
//     console.log(i)
//     //arr.push(i);
//     i--;
// }
// console.log(i)

// do {
//     // loop body
// } while (condition);
// ==========================================================================

//
// let i = 5;
// do{
//     i++;
//     console.log(i)
// } while( i < 7)

// const arr = []
// let i = 0;
// do {
//     i++
//     arr.push(i)
//     console.log(arr)
//
// } while(i <= 5)
// console.log(arr)
// console.log(i)

// function power(x,y){
//
//     let sum = 1
//     while( y > 0) {
//         sum = sum * x
//         console.log(sum)
//         y--
//         console.log('y' + y)
//     }
//     return sum
//
// }
//
// console.log(power(2, 4))


// function tripleTrouble(one, two, three){
//     let result = 0
//    // console.log(result)
//
//     for( let i = 0; i < one.length; i++) {
//         result = one[i] + two[i] + three[i]
//         console.log(result)
//
//     }   return result
// }

// console.log(tripleTrouble([1, 2],[3, 3],[1,2]))

function filterRange(arr, a, b) {
    const filtered = []

    for(let i =0; i < arr.length; i++) {
        if(arr[i] >= a || arr[i] <= b ) {
            filtered.push(arr[i])
        }

    } return filtered
}

console.log(filterRange([5, 3, 8, 1], 7, 1))

// function processData(data){
//     let arrNew = []
//     let num
//     let res = 1;
//
//     for(let i = 0; i < data.length; i++) {
//         for(let j = 0; j < data[i].length && j % 2 === 0; j++) {
//             num = data[i][j] - data[i][j + 1]
//             arrNew.push(num)
//             console.log(num)
//             console.log(arrNew)
//         }
//     }
//     for(let i = 0; i < arrNew.length; i++) {
//         res *= arrNew[i]
//     }
//     return res
// }
//
// console.log(processData([[2, 5], [3, 4], [8, 7]]))

function filterString (value) {
    let result = " "
    for (let i = 0; i < value.length; i++){
        console.log(value[i])
        if (value[i] < 10) {
            result += value[i]
            console.log(value[i])
        }
    }
    return +result
}

console.log(filterString("aa1bb2cc3dd"))
