// for 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element ==5 ) {
        console.log("5 is beast number.")
    }
    // console.log(element)
    
}
// console.log(element);


for (let i = 0;  i<= 10; i++) {
// console.log(`Outer loop value ${i}`)
    for (let j = 0;  j<= 10; j++) {
    //    console.log(`Inner loop value ${j}  and Inner loop value ${i} `)
    // console.log(i + '*' +j+'='+i*j)
        
    }
    
}

let myArray = ["200","400","600"]
// console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
    
}


// // break and continue
// for (let index = 1; index <=20; index++) {
//     if(index==7){
//         console.log("This 7 beast Number Book")
//         break
//     }
//     // const element = array[index];
//     console.log(`Value of i is ${index}`)
    
// }

// continue
for (let index = 1; index <=20; index++) {
    if(index==7){
        console.log("This 7 beast Number Book")
        continue
    }
    // const element = array[index];
    console.log(`Value of i is ${index}`)
    
}
