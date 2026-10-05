//for of loop
//array specific loops

const arr = [1,2,3,4,5,6]

for (const num of arr) {
    console.log(num);
    
}
console.log("========================");


const greetings = "Hello World!"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
}

// Maps
console.log("========================");

const map = new Map()
map.set("IN","India")
map.set("JA","Japan")
map.set("USA","America")
map.set("CA","Canada")
//Unique value ....no repetition of values
//console.log(map)

for (const [key,value] of map) {
    console.log(key,":-",value);
    
}

const myObj={
    "game1":"NFS",
    "game2":"GTA",
    "game3":"Spider-Man"
}

// for (const [key,value] of myObj) {
//     console.log(key,":-",value);
// }
//objects are not iteratable