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
console.log();

function one(){
    const userName = "GROOMARK"

    function two(){
        const website = "YOUTUBE"
        console.log(userName);
        
    }
    // console.log(website);    shows error
    two()
}
one()


if (true) {
    const username = "GROOMARK"
    if (username==="GROOMARK") {
        const web = " YOUTUBE"
        console.log(username + web);
        
    }
    // console.log(web);    error because out of scope 
    
}
// console.log(username);   error because out of scope 

console.log();
console.log("++++++++++++++ INTRESTING ++++++++++++++++");
console.log();

// addOne(4)    we can write this here also

function addOne(num) {
    return num +1
}
console.log(addOne(4));

//but we cant write addTwo(5) at begining because of declaration of variable

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));
