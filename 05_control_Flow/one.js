// if
/*
if (condition) {
    //condition may be multiple 
    // && : all condition should be true
    // || : min one condition is true
    //condition == true the if block of code will run
    // operators: >, >=, <, <=, ==, !=, ===
    // == : checks value only 
    // === : checks value and type of datatype
} else if {
    //checking multiple condition
} else {
    //condition == false the else block of code will not run
}
*/

// switch
/* 
switch (key) {
    case value:
        // code runs if value matches with key
        break;

    default:
        break;
}
*/

/*
key : value to check
comprises of different case like locks when key matches thst block of code will run
break : if case is matches it dont checks the next case 
if break is not used it run all codes present for all cases next to it after except default
*/

// truthy and falsy
/*
 Truthy means:
The value behaves like true
These values are considered "not empty" or "existing"
"0", 'false', " ", [], {}, function(){}
false == 0, false == '', 0 == ''


Falsy means:
The value behaves like false
These are empty or false-like values
false, 0, -0, BigInt 0n, "", null, undefined, NaN
*/

userEmail = ""
if (userEmail) {
    console.log("got user email");   
} else {
    console.log("email not found");   
}

// checking empty array
const arr = [];
if (arr.length === 0) {
    console.log("Array is empty");
}

// checking empty object
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Array is empty");
}

// Nullish Coalescing Operator (??) : null undefined
// removes the null or undefined
let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 10 // 10
val1 = undefined ?? null ?? 15 ?? 10
console.log(val1);

// Terniary Operator

// condition ? true : false

const price  = 10
price > 50 ? console.log("GREATER THAN 50") : console.log("LESS THAN 50")
