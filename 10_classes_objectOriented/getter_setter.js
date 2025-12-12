class Usre {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toLowerCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}sankha`
    }

    set password(value){
        this._password = value
    }
}

const sankha = new Usre("Sankha@gmail.com", "abc")
console.log(sankha.email)
console.log(sankha.password)