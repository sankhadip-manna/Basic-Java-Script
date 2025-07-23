// ******************** Memory ***************************

// Stack (primitive), Heap (Non-Primitive)

let myYoutubename = "sankhacode"

let anothername = myYoutubename
anothername = 'SankhaWithCode'

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email : "usre@google.com",
    upi : "usre@pay",
}

let userTwo = userOne

userTwo.email = "User@gmail.com"


console.log(userOne);
console.log(userTwo);