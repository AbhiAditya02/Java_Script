// **************************************Interesting Concept**************************************

// Intro to fuction hosting

//Function Hoisting:
    // function addone() is hoisted completely with its definition.
    // So, you can call it before its declaration.

    // Completely with function definition means : 
        //the function name
        //the entire function body (its code/logic)
console.log(addone(5));

function addone(num){
  return num++;
}

console.log(addone(5));

//Function Expressions (with const):
    // const addTwo = function() is not hoisted with the function body.
    // Only the variable addTwo is hoisted, but remains in a temporal dead zone until the actual line where it's initialized.
    // Hence, calling addTwo() before its definition throws an error.

//console.log(addTwo(5));// Cannot access 'addTwo' before initialization

const addTwo = function(num){
  return num+=2;
}

console.log(addTwo(5));


//notes:
/*
    1. Function Declarations are hoisted completely (name + body) — no TDZ(Temporal dead zone).
    2. Function Expressions are hoisted partially (variable only) — in TDZ if declared with let or const.

    what is TDZ:
        The Temporal Dead Zone is the time between:
        1. When a let or const variable is hoisted (reserved in memory), and
        2. When it is actually assigned a value in your code.    
*/