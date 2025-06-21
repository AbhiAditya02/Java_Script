
/*
 A string in JavaScript is a sequence of characters enclosed in:
    Single quotes 'Hello'
    Double quotes "Hello"
    Backticks `Hello`
*/

const name = 'Abhi Aditya';
const age = "19";
let str1 = `Hello World`;

// concatenating of string
/*
Manual concatenation :
        It means joining strings together using " + " operator.
*/
console.log("My name is " + name + " and I am " + age + " years old.");

/*
String Interpolation :
        It is a way of insert variables or expressions directly within a string.
        uses backticks( ` )
        expresion is written inside ${} 
*/
console.log(`My name is ${name} and I am ${age} years old.`);

// String as an Object
// Syntax :
        let str2 = new String('Abhi Aditya');
console.log(typeof str2); // object

// Prototype
/*
Every JavaScript object has a hidden property called Prototype.
*/
console.log(str2.__proto__);

/*
 Why Use Prototypes?
        Saves memory – methods aren’t duplicated for every instance.
        Enables inheritance (objects can inherit from other objects).
*/
console.log(str2.__proto__.length);

// some String Methods

// length of string
console.log(str2.length);

// covert to upper case
console.log(str2.toUpperCase());

// covert to lower case
console.log(str2.toLowerCase());

//Character at given index
console.log(str2.charAt(2));

//Index(position) of a character
console.log(str2.indexOf('A'));

// substring : Extract a secton of string
console.log(str2.substring(0,4)); //Abhi

// slice : it is just like substring but also accepts negative index
console.log(str2.slice(0,10)); //Abhi Adity

// trim : removes white spaces from both the sides
const newString = new String("    Abhi Aditya   ")
console.log(newString.trim()); //Abhi Aditya

// replace : replaces the first match of the string
console.log(str2.replace("Abhi","Abhinav")); //Abhinav Aditya

// includes : checks if a string contains a certain substring
console.log(str2.includes('Abhi'));

// split : split string into array based on given character.
console.log(str2.split(" ")); //[ 'Abhi', 'Aditya' ]

/*
Notes :
    - Slice and Substring extracts string from start but do not include end index
    
*/