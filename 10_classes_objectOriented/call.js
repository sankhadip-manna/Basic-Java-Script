function SetUeserName(username){
    //complex DB calls
    this.username = username
    console.log("Called")
}


function CreateUser(username, email, password){
    SetUeserName.call(this,username)
    this.email = email
    this.password = password
}

const chai = new CreateUser("chai", "chaifb@.com", "1223")
console.log(chai)