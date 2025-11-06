const user = {
    userName: "Sankha",
    loginCount:6,
    singOut:true,
    getUserDetails:function(){
        // console.log("Got User Details DataBase")
        // console.log(`UaserName:${this.userName}`)
        console.log(this)
    }
}

// console.log(user.userName)
// console.log(user.getUserDetails())
// console.log(this)






function User (userName, LoginCount, isLoggedIn) {
        this.userName = userName;
        this.loginCount = LoginCount;
        this.isLoggedIn = isLoggedIn;
        this.geerting = function(){
            console.log(`Welcome ${this.userName}`)
        }

        return this;

    
}

const userOne = new User("Sankha",12,true)
const userTwo = new User("ChaiaurCode", 14, false)
console.log(userOne.constructor)
// console.log(userOne)
// console.log(userTwo)