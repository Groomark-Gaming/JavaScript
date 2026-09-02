

function sayMyName(){
console.log("G");
console.log("R");
console.log("O");
console.log("O");
console.log("M");
console.log("A");
console.log("R");
console.log("K");

}

sayMyName()
//  () for Execution

console.log();

// function addTwoNumbers(num1,num2){
// console.log(num1 + num2);

// }

function addTwoNumbers(num1,num2){
    // let result = num1 +num2
    // return result;
    return num1 + num2
}
const result = addTwoNumbers(5,10)
console.log("RESULT : ",result);
console.log();
function loginUserMessage(userName){
    if(userName === undefined){
        console.log("PLEASE ENTER USER NAME");
        return 
        
    }
    return`${userName} Just Logged In`
}
console.log(loginUserMessage("GROOMARK"));
console.log(loginUserMessage());


console.log();

function calculatecartPrice(...num1){
    return num1
}
function calculatecartPriceOtherThanFirstTwo(val1,val2,...num1){
    return num1
}
console.log(calculatecartPrice(200 ,400,500,600,800,900));
console.log(calculatecartPriceOtherThanFirstTwo(200 ,400,500,600,800,900));

// ... = is called as spread operator and also rest operator both are different

const user = {
    name : "GROOMARK",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and Price is ${anyobject.price}`);
    
}
// handleObject(user)

handleObject({
    name : "Sam",
    price : 399
})

console.log();

const myNewArray = [200,400,600,800]

function returnSecondValue(getarray){
    return getarray[0]
}
console.log(returnSecondValue([200,400,600,800]));
