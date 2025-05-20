"use strict"; // treat all JS code as newer version

// alert("Hello") // this alert syntax in not used in node.js , only works in browser

//console.log("Abhi"), console.log(3+4)

// not a good practice 
// code readfability should be high

console.log("Abhi")

console.log(3+4)

// there are two documentation : MDN and tc39 (ECMAScript)

let name = "Abhi" // string
let age = 18 // number
let isLoggedIn = false // bolean 

/*

Primitive datatypes :-
    Stored directly in memory (value is stored).
    Cannot be changed.
    Compared by value.

Non-Primitive Datatypes :-
    Stored by reference (memory address stored).
    Can be changed.
    Compared by reference.

*/

/*

Some Premetive datatypes :
    number :-
        Represents both integers and floating-point numbers.
        Range : 2^53 - 1
    bigint :-
        For integers larger than 2^53 - 1
    string :-
        repersent text
        format: "text" or 'text'
    boolean :-
        repersent true and false
    null :-
        it is a stand alone value .
        it represents the intentional absence of any object value.
        repersentation of an empty value.
    undefined :-
        A variable that has been declared but not assigned a value is an undefined datatype.
    symbol :-
        Represents a unique and immutable identifier.

*/

// Non-Primitive Datatypes :

//objects :

console.log(typeof null); //ans: Object (means its a object)
console.log(typeof undefined); // ans: Undefined (means its a datatype)