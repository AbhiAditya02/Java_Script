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
    Call by value.

Non-Primitive Datatypes :-
    Stored by reference (memory address stored).
    Can be changed.
    Call by reference.

*/

/*

Premetive datatypes :
    number :-
        Represents both integers and floating-point numbers.
        Range : 2^53 - 1
        Return type : number
    bigint :-
        For integers larger than 2^53 - 1
        Return type : bigint
    string :-
        repersent text
        format: "text" or 'text'
        Return type : string
    boolean :-
        repersent true and false
        Return type : boolean
    null :-
        it is a stand alone value .
        it represents the intentional absence of any object value.
        repersentation of an empty value.
        Return type : object
    undefined :-
        A variable that has been declared but not assigned a value is an undefined datatype.
        Return type : undefined
    Symbol :-
        Represents a unique and immutable identifier.
        Return type : Symbol

*/

// bigint :
const  bigNumber = 123456789n
console.log(typeof bigNumber);


//usages of symbol:
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid);


// Non-Primitive Datatypes :

//objects : 
    // Return type : object
        let object = {
            name: "Abhi",
            myage: 19 ,
        }
//Array :
    // Return type : object
        const heros = ["Abhi","Aditya"]
//Functions : 
    // Return type : fuction
        const myfuction = function(){
            console.log("hello World");
        }

console.log(typeof null); //ans: Object (means it's an object)
console.log(typeof undefined); // ans: Undefined (means it's a datatype)