const myNums = [1,2,3,4,5,6,7,8,9,10];

const myNumbers = myNums.map((nums)=>{
    return nums+10
})
console.log(myNumbers);

console.log("====================");

const result = []
myNums.forEach((item)=>{
   
    result.push(item+10);
    
})
console.log(result.join(", "));

console.log("====================");

const newNums = myNums
.map((num)=>{
    return num*10
})
.map((num)=>{
    return num+1
})
.filter((num)=>num>=41)

console.log(newNums);
