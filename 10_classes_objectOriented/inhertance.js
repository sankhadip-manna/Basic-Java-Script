class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UsreName is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email, password){

        super(username)
        this.email = email
        this.password = password
    }

    addCoures(){
        console.log(`A New Course wae add by ${this.username}`)
    }
}

const chai = new Teacher("chai", "chaiUsre@gmail.com","adsf231")
console.log(chai.addCoures())

const coldTea = new User("coldTea")

coldTea.logMe()


console.log(chai instanceof Teacher)