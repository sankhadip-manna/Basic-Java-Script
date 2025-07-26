// Date

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.toDateString())

// let myCreateDate = new Date(2024, 2, 12,)
// let myCreateDate = new Date(2024, 2, 12, 5, 3)
// let myCreateDate = new Date("2023-01-23")
let myCreateDate = new Date("11-14-2022")
// console.log(myCreateDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())

// console.log(Math.floor(Date.now()/1000))


let myNewDate = new Date()

console.log(myNewDate.getMonth()+1);
console.log(myNewDate.getDay());


myNewDate.toLocaleString('default',{
    weekday:"long",
    timeZone:"long"
})
