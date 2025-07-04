// Ojects 
// An object in JS is a collection of key-value pairs.
// It is one of the most important data types and is used to store and organize data.

// declatation of symbol
const sym = Symbol("key1")

// Object Literal Syntax (Declaration by literals)
const user = {
  name: "Abhi",
  "fullName": "Abhi Aditya",
  [sym]: "valueKey1",//using symbol as a key - here [] use this
  age: 19,
  location: "Bgs",
  email: "abhi@gmail.com",
  isLoggesIn: false,
  lastLodinDays: ["Mon", "Sat"]
}

//accesing values from object
console.log(user.email); // abhi@gmail.com
console.log(user["email"]); // abhi@gmail.com
console.log(user["fullName"]); // Abhi Aditya
console.log(user[sym]); // valueKey1

//change the value
user.email = "Abhi@some.com"

// freeze the value so it cant be changed
// Object.freeze(user)

//print whole object
console.log(user);

// applying fuction to object
user.greeting = function(){  //greeting is the property of user object 
    console.log(`Hello, ${this.name}`); // this refers to the user object // this.name is the same as user.name
}

console.log(user.greeting); // return the reference of the function

console.log(user.greeting()); // executes the fuction