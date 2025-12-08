// let myName = "Sankha       "
// console.log(myName.truelength)



let myHero = ["Akzea","OnePanchMan"]

let heroPower={
    Akzea :"HnadPower",
    OnePanchMan :"Sleep",
    getAkzeaPower: function(){
        console.log(`Akzea power is ${this.Akzea}`)
    }
}

Object.prototype.sankha = function(){
    console.log(`Sankha is present in all  objects`)
}


Array.prototype.heySankha = function(){
    console.log(`Snakha says hello`)
}
// heroPower.sankha()
// myHero.sankha()
// myHero.heySankha()
// heroPower.heySankha()


// inheritance 

let UserName = {
    name:'chai',
    email:'chai@gmail.com'
}

const Teacher = {
    makeVideo: true
}

const TeachSupport = {
    isAvilable: false
}

const TASupport = {
    makeAssigemrnt:'JS Assigment',
    fullTime: true,
    __proto__:TeachSupport
}
// Teacher.__proto__ = User


// modern sysntex //

Object.setPrototypeOf(TeachSupport,Teacher)

let anotherUsername = "ChaiAurCode      "

String.prototype.trueLength = function (){
    console.log(`${this}`)
    
    console.log(`True Length is: ${this.trim().length}`)
}

anotherUsername.trueLength()

"sankha".trueLength()
"MilkChai".trueLength()