//.length
console.log("JavaScript".length)

console.log("JavaScript"[2])
console.log("JavaScript".charAt(2))
//a-z: 97 to 122
console.log("JavaScript".charCodeAt(2)) // AScII value

console.log("JavaScript".toLowerCase())
console.log("JavaScript".toUpperCase())

console.log("JavaScript".slice(2, -5))
console.log("Javascript".substring(2, 6)) //vaSc
console.log("Javascript".substring(-2,2)) // -ve --> 0, 2 Ja

console.log("Javascript".concat(" is Cool").concat(" and easy!"))

let lang = "Java_JavaScript_Python"
const arr = lang.split('_')
console.log(arr[0])
console.log(arr[2])
console.log(arr[5])

console.log("Javascript".includes("Java"))
console.log("Javascript".includes("Python"))

console.log("Dev test Framework".replace("Dev", "JS"))
console.log("Dev test Framework Dev".replace("Dev", "JS"))
console.log("Dev test Framework Dev".replaceAll("Dev", "JS"))

console.log("Dev test Framework Dev".replace("Dev", "JS"))
console.log("01-01-1990".replaceAll('-', '/'))

console.log(("  hello js    ").trim())
console.log(("  hello js    ").trimStart())
console.log(("  hello js    ").trimEnd())

console.log("Dev".padEnd(10, "*")) //dev*******
console.log("Develop".padEnd(10, "*"))
console.log("Developer".padEnd(10, "*"))
console.log("Developers".padEnd(10, "*"))

console.log("Dev".padStart(10, "*")) //*******dev
console.log("Develop".padStart(10, "*"))
console.log("Developer".padStart(10, "*"))
console.log("Developers".padStart(10, "*"))

console.log("Javascript".startsWith("J")) //true
console.log("Javascript".endsWith('script')) //true

console.log("dev".repeat(3))

console.log("Hello cats and dogs".indexOf("cats"))
console.log("Hello cats and dogs".indexOf("Cats"))
console.log("Hello cats and dogs".indexOf("cats"))
console.log("Hello cats and dogs".indexOf("H"))

console.log("Hello cats and dogs".lastIndexOf("cats"))

console.log("Hello cats and dogs".search("cats")) //
