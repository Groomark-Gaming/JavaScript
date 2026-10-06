const myNums = [1,2,3]

const myTotal = myNums.reduce(function(acc,curVal){
    console.log(`acc:${acc} and curVal:${curVal}`);
    
    return acc + curVal;
},0)

console.log(myTotal);
console.log("+++++++++++++++++");
const MyTotal = myNums.reduce(  (accc,currVal)=>accc+currVal,0 )
console.log(MyTotal);


const shopCart = [
    {
        itemName:"JS Course",
        price:2999
    },
    {
        itemName:"JAVA Course",
        price:2599
    },
    {
        itemName:"Python Course",
        price:3599
    },
    {
        itemName:"Full Stack Course",
        price:12499
    },
]
console.log("+++++++++++++++++");
const Total = shopCart.reduce(  (acc,item)=> acc+item.price,0 )
console.log(Total);
