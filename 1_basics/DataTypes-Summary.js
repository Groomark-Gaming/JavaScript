// primitive datatypes:
// types: String,number,boolean,null,undefined,symbol,BigInt

// JS is Dynamically Typed Language

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
const userID = undefined;

const id = Symbol('123');
const myID = Symbol('123');
console.log(id === myID);

const bigNum = 51431425543n; //bigINT example

// Referance type / non primitive:
// Array,Objects,Functions

const heros = ["Iron-Man","Spider-Man","Captain-America"];
let myObj = {
    name : "GROOMARK",
    age : 19,
}
const myFunction = function(){
    console.log("Hello World !!");
    
}

console.log(typeof bigNum); //for null it will show object
                            //for object it shows function
console.log(heros);
console.log(myObj);
console.log();

console.log("++++++++++++++MEMORY++++++++++++++++");

console.log();

//memory : Stack (Primitive), Heap(Non-Primitive)

//primitive -> Stack -> Get Copy 
let myYTname = "Groomark Gaming"
let anotherName = myYTname
anotherName = "YT GROOMARK 619"

console.log(myYTname);
console.log(anotherName);

//Non Primitive -> Heap -> Referance : we are making changes in original value

let userOne = {
    Email:"123@gmail.com",
    UPI:"user@ybl"
}

let userTwo = userOne
userTwo.email = "Groomark@gmail.com"
userTwo.UPI = "GROOMARKGG@ybl"

console.log(userOne.email);
console.log(userTwo.email);
console.log(userOne.UPI);
console.log(userTwo.UPI);






