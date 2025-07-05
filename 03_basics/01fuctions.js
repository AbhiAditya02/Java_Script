// 🔹 Function
// A function is a block of code designed to perform a specific task.
// It is reusable — you define it once, and then you can call (execute) it as many times as needed.

function sayMyName() {
    console.log("Hello! Abhi");
}

// Function Reference
// This doesn't execute it.
sayMyName

// Function Call / Execution
sayMyName()

// Function Defination with parameters 
function addTwoNumber(number1, number2) {
    console.log(number1 + number2);
}

// Function Call with Arguments
addTwoNumber(4, null);  // 4

//returning the result
function addTwoNumber(number1, number2) {
    return (number1 + number2);
}

// storing returning value into a variable
const result = addTwoNumber(3, 8);
console.log("Result: " , result); // Result: 11
 

function loginMessage(username){
    if (!username){
        return `user: ${username}. Please enter a username`
    }
    return `${username} just logged in`
}

console.log(loginMessage("Abhi")); // Abhi just logged in

//if no arguments is passed then it gives undefined
//console.log(loginMessage());

console.log(loginMessage()); // user: undefined. Please enter a username

// rest operator - converts any number of arguments as an array.
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 600)); // [ 200, 400, 500, 600 ]

//Objects in fuction
const user = {
    username: "Abhi",
    id: 2
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and id is ${anyobject.id}`);
}

handleObject(user) // Username is Abhi and id is 2

handleObject({
    username: "sam",
    id: 4
}) // Username is sam and id is 4

//Array in function
const NewArray = [200, 400, 100, 600]

function returnSecondValue(Array){
    return Array[1]
}

console.log(returnSecondValue(NewArray)); // 400
console.log(returnSecondValue([200, 400, 500, 1000])); // 40