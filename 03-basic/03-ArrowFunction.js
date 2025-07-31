
const usre = {
    usrename: "Sankha",
    Usreid: 1324524,
    price:999,
    WelComeMassage: function(){
        console.log(`${this.usrename}, Welcome To Website`)
        // console.log(this)
    }
}
// usre.WelComeMassage()
// usre.usrename = "sam"
// usre.WelComeMassage()
// console.log(this)

// function well (){
//     console.log(this)
// }
// well()

// const chai = function(){
//     let usrename="Snakha"
//     console.log(this.usrename)
// }
// chai()
const chai = ()=>{
    let usrename="Snakha"
    console.log(this)
}
// chai()



// const addtwo = (num1,num2)=>{
//     return num1+num2
// }
// console.log(addtwo(2,4))
// const addtwo = (num1,num2)=> num1+num2


// const addtwo = (num1,num2) => (num1+num2)



const addtwo = (num1,num2) => ({usrename:"Sankha"})



console.log(addtwo(2,4))



// const usre = {
    usrename: "Sankha",
    // Usreid: 1324524,
    // price:999,
    // WelComeMassage: function(){
        console.log(`${this.usrename}, Welcome To Website`)
        // console.log(this)
    // }
// }
// usre.WelComeMassage()
// usre.usrename = "sam"
// usre.WelComeMassage()
// console.log(this)

// function well (){
//     console.log(this)
// }
// well()

// const chai = function(){
//     let usrename="Snakha"
//     console.log(this.usrename)
// }
// chai()
// const chai = ()=>{
    let usrename="Snakha"
    console.log(this)
// }
// chai()



// const addtwo = (num1,num2)=>{
//     return num1+num2
// }
// console.log(addtwo(2,4))
// const addtwo = (num1,num2)=> num1+num2


// const addtwo = (num1,num2) => (num1+num2)



// const addtwo = (num1,num2) => ({usrename:"Sankha"})



console.log(addtwo(2,4))
 
