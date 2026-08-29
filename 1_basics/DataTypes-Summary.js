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


