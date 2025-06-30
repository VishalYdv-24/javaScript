const accountId = 170904; // const cannot be changed
let accountEmail = "suryanair@gmail.com";
var accountPassword = "12345";
accountCity = "Mumbai";
let accountState;

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]); 