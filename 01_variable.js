const accountId = 12333 // To Assign constant variable cant change 
let accountEmail = "linus@gmail.com" 
var accountPassword = "12345"
accountCity = "Delhi"
let accountState; // not setting value
// accountId = 2 // Not able to change constant variable

accountEmail = "linus124@gmail.com"
accountPassword = "123"
accountCity = "Bengalore"


/*
prefer not to use var
because of issue in block scope and function scope
*/

console.log(accountId);
console.table([accountEmail,accountPassword,accountCity,accountState])