const user = {
    username: "Abhi",
    price: 99,

    welcomeMessage: function(){
        console.log(`Hello, ${this.username}!! Welcome to website`);
        console.log(this); // refers to current context
    }
}

/*
    this is a special keyword in JavaScript that refers to the current context from which a function is called.
    Its value changes depending on how and where the function is invoked.
*/

//user.welcomeMessage()

// user.username = "Aditya"
// user.welcomeMessage()

console.log(this); // {}

/*
    In Node.js: {} — the global scope is an empty object.
    In Browser (Chrome): this refers to the window object.
                         window is the global object.
*/

// function one(){
//     let username = "abhi";
//     console.log(this.username);//undefined // this does not refer to local variables.
// }
// one()

// const one = function(){
//     let username = "abhi";
//     console.log(this.username);//undefined //this does not refer to local variables.
// }
// one()

const one = () => {
    let username = "abhi";
    console.log(this); // {}
    /*
        Arrow functions do not have their own this.
        They inherit this from their lexical (outer) scope.
        In global scope (Node.js), this is {}.
    */
}
one()

// basic / explicit return
    // Uses {} and return explicitly.
/*
const addTwoNumber = (n1, n2) => {
    return n1+n2;
}
*/

//implicit return 
    // No need for {} or return. Automatically returns the expression.

const addTwoNumber = (n1, n2) => n1 + n2; // it can be also written as (n1 + n2)
console.log(addTwoNumber(4, 5));

// return object
// const returnObject = () => {username: "Abhi"}; // undefined 
                                                  // Interpreted as a block{}, not an object. So it returns undefined.

const returnObject = () => ({username: "Abhi"}); // Use () to return an object implicitly in arrow functions.
console.log(returnObject());
