const accountId = 12344
let accountEmail = "sanjeshkumar@gmail.com"
var accountPassword = "951950"  
accountCity = "Mainpuri"

let accountState   // it will return undefined values

/*
prefer  not to use var 
because of issue in block scope and fucntional scope.
*/

// accountId =23  // This is not allowed
console.log(accountId);

accountEmail = "abhishekpal@gmail.com"
accountPassword = "9876543"
accountCity = "Jaipur"

console.table([accountId , accountEmail,accountPassword,accountCity ,accountState]);