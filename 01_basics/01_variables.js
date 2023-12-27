const accountID = 144553
let accountEmail = "kritikaa987@gmail.com"
var accountPassword = "12345"
accountCity = "pune"

// accountID = 2  not allowed

accountEmail = "kritika.anand@gmail.com"
accountPassword = "9686767"
accountCity = "Noida"
let accountState; 

/*
var and const both keywords are used to declare variables but perefer not to use var
because of issue in block scope and functional scope.  

Always use (let) 
*/


console.log(accountID);
console.table([accountEmail, accountID, accountPassword, accountCity])