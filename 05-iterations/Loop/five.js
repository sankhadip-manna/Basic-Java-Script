const coding = ["js","ruby","java","cpp","python"]

// coding.forEach( function (item){
//     console.log(item)
// })

coding.forEach( (val) => {
    // console.log(val);
})
// function printMe(val){
//     console.log(val)
// }
// coding.forEach(printMe)

// 
const Mycoding = [
    {
        LanguageName:"JavaScript",
        LanguageFlieName :"js"
    },
    {
        LanguageName:"Python",
        LanguageFlieName :"py"
    },
    {
        LanguageName:"Java",
        LanguageFlieName :"java"
    },
]
Mycoding.forEach((item)=>{
    console.log(item.LanguageName)
})