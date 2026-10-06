const coding = ["java" ,"python" ,"C++","Ruby","PHP"]

const values = coding.forEach((item)=>{
console.log(item);

})
console.log(values);
//forEach()  doesnt return a value

console.log("=======================");

const myNums =[10,20,30,40,50,60,70,80,90,100]
const newNum = myNums.filter((num)=>{
    return num>50// always Return inside function here
})
console.log(newNum);

console.log("=======================");

const newNums = []

myNums.forEach( (nums)=>{
    if(nums>60){
        newNums.push(nums)
    }
} )
console.log(newNums)

console.log("=======================");