const fruits = ['apple', 'banana', 'cherry'];
const str = "Abhi Aditya"

//for of loop 
// Used to iterate over values of iterable objects (like arrays, strings, sets, maps).
for (const fruit of fruits) { // for (const variable of iterable)
    console.log(fruit);
}

for (const char of str) {
    console.log(`char: ${char}`);
}

//for.of Doesn’t Work on Objects : obj is not iterable