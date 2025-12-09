class user {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }


    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}


// const cahi = new user("chai", "chaigmail.com",'123')
// console.log(cahi.encryptPassword())
// console.log(cahi.changeUserName())


// behind the sence

function User(username, email, password){
        this.username = username
        this.email = email
        this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new user("tea","tea@gmail.com","24556")
console.log(tea.encryptPassword())
console.log(tea.changeUserName())