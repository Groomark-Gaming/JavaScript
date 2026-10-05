const codin = ["java" ,"python" ,"C++","Ruby","PHP"]
codin.forEach( function (val){
    console.log(val);
    
} )
console.log("=================");
codin.forEach( (item)=>{
    console.log(item);
    
} )
console.log("=================");

function printMe(item){
    console.log(item); //we need to give referance
    
}
codin.forEach(printMe)

console.log("=================");

codin.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
})
console.log("=================");

const myCoding = [
    {
        languageName:"JavaScript",
        languageFile:"JS"
    },
    {
        languageName:"Java",
        languageFile:"java"
    },
    {
        languageName:"Python",
        languageFile:"py"
    }
    
]
myCoding.forEach((item)=>{
    console.log(item.languageName+" -> "+item.languageFile);
    
})