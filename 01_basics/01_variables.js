const accountId = 144553
let accountEmail = "abhiaditya@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountstate;

/* 
if we declare a variable and do not assign value to them then js take it as undefined.
*/

// accountId = 2 :- not allowed becuse it's datatype is constant
accountEmail = "abc@gmail.com"
accountPassword = "0229"
accountCity = "Delhi"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountstate])


/*
we should not use var 
because of issue in block scope and functional scope.

Block Scope :- Variables declared inside a block (between {}) are only accessible within that block.
Functional Scope :- Variables declared inside a function are only accessible within that function.
*/
