// if 

const isUsreLogIn = true
const temPeature = 45
// if (temPeature == 50) {
//  console.log("This teampeature is not  hot") //=>This Condition is True and Print this condition.
// } else {
//     console.log("This TeamPeature is  Hot ") // => This Condition is False and Print This condition.

// }
// console.log("Exeacute")
// condition : <,>,<=,>=,==,===,!=,!==

// const score = 100
// if (score < 200) {
//     let power = "Fly"
//     console.log(`User power : ${power}`)
// }
// console.log(`User power : ${power}`)



// const balance = 1000
// if(balance>500) console.log("Your Blance is a Under 1000  Up 500") // => This is a Implesitive Scope 
// if(balance>500) console.log("Your Blance is a Under 1000  Up 500") ,
// console("This is not Unreadablity code becouse is not good code it's complex code. ");

// if (balance < 500) {
//     console.log("Less than 500")
// } else if(balance < 750){
//     console.log("Less than 750")
// }else if (balance < 850) {
//     console.log("Less than 850")
// }else{
//     console.log("Less than 1200")
// }

const UsreAddGoogle = true
const UsreAddEmail = true
const CareditDebit = false
// const UsreAddEmail = false


if(UsreAddEmail && UsreAddGoogle){
    console.log("Usre is Loged In.")
} else if (UsreAddEmail != true && UsreAddGoogle != true){   ///=> && -> This "and" symbol
    console.log("You are not Enteed")
} else {
    console.log("You are not entered2")
}
if(CareditDebit || UsreAddEmail){      //=> || -> This "or" symboll
 console.log("Usre Logged in")
}

