// Object Literal

/*
const user = {
    userName: "Abhi",
    age: 20,
    getUserDetail: function(){
        // console.log("Got user detail.")
        // console.log(`userName: ${this.userName}`);
        console.log(this);
    }
}

console.log(user.userName);
console.log(user.getUserDetail());
// console.log(this);

const user2 = {
    userName: "Abhi",
    age: 20,
    getUserDetail: function(){
        // console.log("Got user detail.")
        // console.log(`userName: ${this.userName}`);
        console.log(this);
    }
}
// In object literals is the direct way to create an object using; {}. 
// we have to create a object every time 

*/

// Constructor Function
// It's a regular function used to create multiple objects of the same structure.
// It acts like a blueprint. You call it with new to create an object.
// 1st creates an empty object 
// 2nd constructor fuction is called
// 3rd this gets added
// 4th returns this
function user(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username} !!`)
    }
    // return this; no need as it Implicitly returns this
}

const userOne = new user("hitesh", 12, true);
const userTwo = new user("abhi", 11, false);
console.log(userOne.constructor); // .constructor gives back the function that built the object

// console.log(userOne);

// instanceof : it's an operator, which whether an object’s prototype chain contains the prototype of a constructor.
console.log(userOne instanceof user);
console.log(userOne instanceof Object); //// true (because user.prototype → Object.prototype)
