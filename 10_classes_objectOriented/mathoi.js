const discriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(discriptor)

// console.log(Math.PI)

// Math.PI = 5
// console.log(Math.PI)

const chai =  {
    name:"Cold chai",
    price: 300,
    isAvaible:true,

    oderchai: function(){
        console.log("chai nahi bane")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai, "name",{
    // writable:false,
    enumerable:true
})

// console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !=='function'){

        console.log(`${key}, ${value}`)
    }
}