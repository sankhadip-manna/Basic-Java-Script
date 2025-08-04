//  const coding = ["js","cpp","python","java"]


//   const values = coding.forEach((item) =>{
//     console.log(item)
//     return item
//  })

//  console.log(values)

const MyNums = [ ,2,3,4,5,6,7,8,9,10]

//  const newNums=MyNums.filter((num)=>{
//     return num>4
//  })
//  console.log(newNums)


// const newNums = []
// MyNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)



const book =[
    {
        title:'Book one',
        genre:'Function',
        publish:20045,
        edition:2002

    },
    {
        title:'Book two',
        genre:'Non-Function',
        publish:1963,
        edition:2005

    },
    {
        title:'Book three',
        genre:'History',
        publish:1990,
        edition:2007

    },
    {
        title:'Book foure',
        genre:'Non-Function',
        publish:1999,
        edition:2001

    },
    {
        title:'Book five',
        genre:'Function',
        publish:1930,
        edition:2024

    },
    {
        title:'Book six',
        genre:'Scince',
        publish:1945,
        edition:2090

    },
    {
        title:'Book seven',
        genre:'History',
        publish:1956,
        edition:2067

    },
    
]

let BookStore = book.filter((bk)=>bk.genre ==='History')
 BookStore = book.filter((bk)=> {
     return bk.publish>=1905 && bk.genre==='History'
    })
console.log(BookStore)