const fruits = ['apple', 'banana', 'cherry'];

const str = "Abhi Aditya"

const Myobject = {
    'game1' : "COC",
    'game2' : "PUBG"
}

const obj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby"
}

// for in loop 
// Used to iterate over keys (indexes) of an object or array.
// returns keys

// for in on objects
for (const key in obj) {
    console.log(`${key} : ${obj[key]}`)
}

for (const key in Myobject) {
    console.log(`${key} : ${Myobject[key]}`)
}

//for in  on string
for (const key in str) {
    console.log(`${key} : ${str[key]}`)
}

// for in on arrays
for (const index in fruits) {
  console.log(index + ': ' + fruits[index]);
}