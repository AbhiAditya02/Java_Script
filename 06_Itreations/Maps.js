
// Maps
/*
A Map in JavaScript is a collection of key-value pairs where:
    Keys can be any type (objects, functions, or primitives).
    Insertion order is preserved.
    It is different from a plain object ({}) which only allows strings and symbols as keys.
*/
const map = new Map()
map.set('IN', "India")
map.set('ENG', "England")
map.set('IN', "India") // duplicate value is not added
map.set('USA', "United States of America")

console.log(map);

// for of loop on maps
for (const [key, value] of map) {
    console.log(key,': ', value);
}

// for in loop 
// forin loop does not work on Maps Because for...in looks for normal properties on the object.
// In a Map, keys are not properties — they’re stored separately.

//