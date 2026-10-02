//if Statement
const temperature = 41

if(temperature<50){
    console.log("Less than 50")
}else{
    console.log("Temperature Greater than 50")
}

if(2 == "2"){
    console.log("Executed!")
}

//<,>,<=,>=

const score = 200;
if(score>100){
    const power = "fly"
    console.log("User Power: "+power)
}

const bal = 900;
if(bal<500){
    console.log("less than 500")
}else if(bal<750){
    console.log("less than 750")
}else if(bal<950){
    console.log("less than 950")
}else{
    console.log("less than 2000")
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromYahoo = true

if(userLoggedIn && debitCard){
    console.log("User can Shop")
}
if(loggedInFromGoogle || loggedInFromYahoo){
    console.log("The User is Loggedin")
}else{
    console.log("User is not Loggedin")
}