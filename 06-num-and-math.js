//************** Number**************** */

const num = 400
// console.log(num)
const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length)

// console.log(balance.toFixed(2))

const otherNumber = 123.56463

// console.log(otherNumber.toPrecision(3))


const hundered = 10000000

// console.log(hundered.toLocaleString('en-IN'))



//+++++++++++++++++++++ Math ++++++++++++++++++++++++\\

// console.log(Math)
// console.log(Math.abs(-4));
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))
// console.log(Math.min(4,6,7,8))
// console.log(Math.max(4,3,6,8))

console.log(Math.random());
console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()*10) +1);


 const min = 10
 const max = 20

 console.log(Math.floor(Math.random()*(max-min+1))+min)