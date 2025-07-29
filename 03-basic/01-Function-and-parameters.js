

function myName(){
console.log("S")
console.log("A")
console.log("N")
console.log("K")
console.log("H")
console.log("A")
}

// myName()

function addTwoNumber(Number1,Number2){
// console.log(Number1+Number2)
}
addTwoNumber(2,4)

function addOneNumber(Number3,Number4){
    // let result = Number3+Number4
    // return result
    return Number3+Number4
}
let result = addOneNumber(3,5)

// console.log("Result: ", result)

function logUsreName(UserName="san"){
    if(UserName===undefined){
        console.log("Place Enter Your Name.")
        return
    }
    return`${UserName} just loged in`
}
// console.log(logUsreName("Sankha"))


function calculatorCart(...num1){
    return num1
}
console.log(calculatorCart(200,500,300,500,4000))

const user = {
    UsreName:"Sankha",
    price:299
}
function UsreId(Anyobject){
console.log(`Your Name ${Anyobject.UsreName} Your Price ${Anyobject.price}`)
}
UsreId(user)