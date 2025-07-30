

let a = 300
//Global Scope is a OUTSIDE Scope 
if(true){
    let a = 10
    const b =20    // Block Scope is INNER SCOPE 
     c= 30
    // console.log("INEER :", a)
}



// console.log(a)
// console.log(b)
// console.log(c)



function one (){
    const Usrename = "Sankha"

    function two (){
        const website = "Youtube"
        // console.log(Usrename)
    }
    // console.log(website)

    two()
}
one()
 if (true) {
    const usrename = "Sankha "

    if (usrename === "Sankha ") {
        const Webste = " youtube"
        // console.log(usrename + Webste)
    }
    // console.log(    website)
 }
//  console.log(usrename)

//************** interesting *******************//


console.log(addone(5))  

function addone (num){
    return num +1
}

const addtwo = function(num){
    
    return num +2
}
console.log(addtwo(4))

