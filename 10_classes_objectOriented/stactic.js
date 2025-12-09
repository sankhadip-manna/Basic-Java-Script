class Usre{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const sankha = new Usre("sankha")
// console.log (sankha.createId())

class Teacher extends Usre{
    constructor(username, email){
        super(username)

        this.email = email
    }
}

const iphone =  new Teacher("Iphone","Inphone@gmail.com")
console.log(iphone.createId())