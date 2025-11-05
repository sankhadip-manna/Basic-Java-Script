const promiseOne = new Promise(function( resolve, reject){
    // Do an async task
    //DB calls , caryptography , network
    setTimeout(function(){
        console.log("Async calling task is complete")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('Promise consumed')
})

new Promise(function(resolve, reject){
    setTimeout(function(){

        console.log("Async 2 task")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName:"Sankha", email:"Sankha@12gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})


const promiseFoure = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({UserName:"Sankhadip Manna", email:"sankhadip@gmail.com"})
            
        }
        else{
            reject("ERROR's Not Defined Place Chack Agin")
        }
    },1000)
})

promiseFoure.then((user)=>{
    console.log(user);
    return user.UserName
}).then((UserName)=>{
    console.log(UserName)
}).catch(function(error){
    console.log(error)
}).finally(()=>console.log("The Promice is ethir resolved or rejected "))


const promiseFive= new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"JavaScript",Password:"123"})
        } else{
            reject("Error is in Your JS")
        }
    },1000)
})

async function consumeMe(){
    try {
        const ComesPromis=await promiseFive
    console.log(ComesPromis)
    } catch (error) {
        console.log(error)
    }
}

consumeMe()


async function getAllUser (){
    try {
        const respone =await fetch('https://jsonplaceholder.typicode.com/users')
    const data=respone.json()
    console.log(data)
    } catch (error) {
        console.log("E: ", error)
    }
}

getAllUser()