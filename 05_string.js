const name = "Sankha"
const repoCount = 50
// console.log(name + repoCount + " value add")


// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Sankha-dip Mannna ")

// console.log(gameName[0])
// console.log(gameName.__proto__);


console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase())
console.log(gameName.charAt(5));
console.log(gameName.indexOf('d'))
// console.log(gameName.repoCount())

const Newname = gameName.substring(0,4);
console.log(Newname)

const anotherString = gameName.slice(-8 , 5)
console.log(anotherString)

const newstring = "   Sankha   "
console.log(newstring)
console.log(newstring.trim())

const url = "https://sankha.com/sankhaDoc"
console.log(url.replace('Doc','Note'));


console.log(url.includes('sankha'));


console.log(url.split('-'))