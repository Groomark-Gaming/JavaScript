//singleton

//object.create

//objext literals

const mySym = Symbol("key1")

const jsUser = {
    name:"GROOMARK",
    "Full Name" : "Groomark Gaming",
    age: 19,
    email:"GROOMARK@gmail.com",
    isLoggedin:false,
    lastLoginDay:["Monday","Saturday"],
    
    [mySym]:"MYkey1"//asks in interview remember syntax for symbol
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["Full Name"]);

console.log(jsUser[mySym]);

jsUser.email = "Harshit@gmail.com"//override the value
console.log(jsUser.email);

// Object.freeze(jsUser) to make no further changes in object

console.log(jsUser);

jsUser.greeting = function(){
    console.log("HELLO JS USER");
    
}
jsUser.greetingTwo = function(){
    console.log(`HELLO JS USER,${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());