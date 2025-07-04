// de-structure

const course = {
    courseName: "Chai aur JS",
    price: "free",
    courseInstructor: "Hitesh"
}

// Destructure and rename `courseInstructor` to `Instructor`
const {courseInstructor: Instructor} = course

console.log(Instructor); //Hitesh

// API -Application Programming Interface
// It is a bridge that allows two software applications to talk to each other.
// Most APIs return data in JSON format.

// JSON stands for JavaScript Object Notation.

//It's a lightweight, human-readable data format used for storing and exchanging data between a server and a client.
// It looks very similar to a JavaScript object, 
// but it's actually just a string representation of data, formatted like a JavaScript object.

/*
json structure :

{
    "courseName": "Chai aur JS",
    "price": "free",
    "courseInstructor": "Hitesh"
}

*/

// API Return as an Object
// API Returns an Array of Objects

/*
[
    {},
    {},
    {}
]
*/