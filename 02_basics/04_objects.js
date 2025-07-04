// Declaration using Object constructor (creates a singleton object)
const user = new Object()

// Adding properties
user.id = "123abc";
user.name = "sam";
user.isLoggedIn = false;

// Output the object
// console.log(user); //{ id: '123abc', name: 'sam', isLoggedIn: false }

// Nested object structure
const regularuser = {
    email: "abhi@gmail.com",
    details: {
        userfullname: {
            firstname: "Abhi",
            lastname: "Aditya"
        },
        age: 19
    }
}

// Accessing nested properties
// console.log(regularuser.details.userfullname.firstname); // Abhi

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// Merge all objects into a new object (obj4)
// const obj4 = Object.assign(obj1, obj2, obj3) // This modifies obj1 directly!
// console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// console.log(obj1); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


const obj5 = Object.assign({}, obj1, obj2, obj3) //This creates a new object and keeps obj1 unchanged
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

console.log(obj1); // { '1': 'a', '2': 'b' }

// Merged using spread
const obj6 = { ...obj1, ...obj2, ...obj3 };
console.log(obj6); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const Users = [
    {id: 1, email: "1@gamil.com" },
    {id: 2, email: "2@gamil.com" },
    {id: 3, email: "3@gamil.com" },
]

// Accessing the second user's email
console.log(Users[1].email);  // Output: 2@gmail.com

const user1 = {id: 1, email: "1@gamil.com", isLoggedIn: false}

console.log(Object.keys(user1)); // [ 'id', 'email' ] // returns an array of keys
console.log(Object.values(user1)); // [ 1, '1@gamil.com' ] // returns an array of values
console.log(Object.entries(user1)); //[ [ 'id', 1 ], [ 'email', '1@gamil.com' ] ] // returns array of [key, value] pairs

console.log(user1.hasOwnProperty('isLoggedIn')); // true 
// .hasownProperty('key') - check whether an object has a specific property as its own 
