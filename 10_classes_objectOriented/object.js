function multiply(num){
    return num*5
}
multiply.power = 2
console.log(multiply(5))
console.log(multiply.power)
console.log(multiply.prototype)

function createUser(username,socre){
    this.username = username
    this.socre = socre
}
createUser.prototype.increment = function(){
    this.socre++ 
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.socre}`)
}
const chai = new createUser("chai",16)
const tea = createUser("Tea",240)


chai.printMe()