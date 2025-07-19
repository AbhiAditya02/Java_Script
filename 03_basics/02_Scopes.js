//scope refers to the context of code and accessibility of variables.

// Types of Scopes

//Global Scope
/*
Variables declared outside of any function or block.
Accessible anywhere in the code.
*/
let globalVar = "I'm global";

console.log(globalVar); // Accessible

function check() {
  console.log(globalVar); // Accessible
}

// Function Scope
/*
Variables declared inside a function using var, let, or const 
are only accessible inside that function.
*/

function checkFunctionalScope() {
  let localVariable = "I'm local";
  console.log(localVariable); //  Accessible inside
}

// console.log(local); //ReferenceError: localVariable is not defined

// Block Scope
/*
Variables declared inside curly braces {} (like in if, for, while) using let or const.
They are only accessible within that block.
*/

{
  let blockVariable = "Inside block";
  console.log(blockVariable); // Accessible inside
}
//console.log(blockVar);  //blockVar is not defined

{
  var varVariable = "Var example"; 
  console.log(varVariable); // Accessible
}

console.log(varVariable); // Accessible
// so var is not used as it can be used any where even if it is declared inside {}.

function one(){
  const  username = "Abhi"
  function two(){
    const social = "linkedin";
    console.log(username);
  }
  //console.log(social); //ReferenceError: social is not defined
  two() //if not called will not work
}

one()
