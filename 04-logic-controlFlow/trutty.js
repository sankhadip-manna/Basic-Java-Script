const usreEmail = []

if (usreEmail) {
    console.log("Got usre email")
} else{
    console.log("Don't have usre email")
}

// falsy values 

// false, 0,-0,BigInt 0n, null, undefined, Nan, "".

//truthy
//"0",'false'," ",[],{},function(){}.

if(usreEmail.length===0){
    console.log("Array is empty")
}
const Objemty = {}
if (Object.keys(Objemty).length==0) {
    console.log("Object is emty")
}



// Nullish Coalescing Operator (??); null , Undifined

let val1;
// val1 = 3 ?? 4
// val1 = null ?? 5
// val1 = undefined ?? 34
val1 = null ?? 34 ??56




console.log(val1)


// Treniary Operator

// condition ?? True ; false
const iceteaprice = 100
iceteaprice >=80 ? console.log("less than 80"): console.log("more than 80")