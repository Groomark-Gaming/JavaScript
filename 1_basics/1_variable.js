const accountId = 619
let accountEmail = "harshitagwade0g@gmail.com"
var accountPassword = "12345678"
accountCity = "Pune"
let accountState

// accountId = 2 not allowed

accountEmail = "GG@gmail.com"
accountCity = "Mumbai"
accountPassword = "123619"

// prefer not to use var because of issue in block scope and functional scope

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity, accountState])
