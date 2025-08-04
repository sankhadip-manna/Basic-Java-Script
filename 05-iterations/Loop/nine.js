const mynums=[1,3,4]

// const myTotal=mynums.reduce(function(acc,curntvalue) {
//     console.log(`acc ${acc} and curentvalue ${curntvalue}`)
//     return acc+curntvalue
// },0)
const myTotal = mynums.reduce((acc,curntvalue)=>acc+curntvalue,0)
// console.log(myTotal);


const shpoingcart = [
    {
        itemName:"js course",
        price:599
    },
    {
        itemName:"Python course",
        price:99
    },
    {
        itemName:"Phone Dev",
        price:1599
    },
    {
        itemName:"Data scince course",
        price:12599
    },
]
const AddTotal= shpoingcart.reduce((acc,item)=>acc+item.price,0)
console.log(AddTotal)
