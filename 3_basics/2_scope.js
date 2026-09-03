// var c = 300
let a = 200
if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER : ",a);
    
}

console.log(a);    //gives error
// console.log(b);    gives error
console.log(c);       //works perfectly if we dont add var then still it works
