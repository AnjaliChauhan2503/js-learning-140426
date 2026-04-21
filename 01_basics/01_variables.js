const accountId =30291
let accountEmail ="Anjali@gmail.com"
var accountPassword ="12345"
accountCity ="Noida"

//accountId = 3  not allowed because accountId is const that have already assign 30291
console.log(accountId);

accountEmail ="Triotree@gmail.com"
accountPassword ="6789"
accountCity = "Delhi"
let accountState ;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


