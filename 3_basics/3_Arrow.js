const user = {
    username : "GROOMARK GAMING",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , Welcome To Website`);
        console.log(this);
        
    }
}
user.welcomeMessage()
user.username = "SAM"
user.welcomeMessage()
user.username = "GAMING"
user.welcomeMessage()

// console.log(this);

console.log();

function chai() {
    let username = "Groomark"
    console.log(this.username);
        
}
chai()

//same for

const chai1 = function(){
    let username1 = "Groomark"
    console.log(this.username1);
}
chai()

const chai2 = () =>{
    let username2 = "Groomark"
    console.log(this.username2);
}
chai()

console.log();

const addThree =  (num1,num2,num3) => {
    return num1+num2+num3
}
console.log(addThree(10,20,30))

const addTwo =  (num1,num2) =>  (num1+num2)
console.log(addTwo(10,20))

const add =  (num1,num2) =>  ({userNAME: "GROOMARK"})

console.log(add(10,20))

console.log();

