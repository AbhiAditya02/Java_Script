// Memory :
    // Memory is the temporary storage space to store data like variables, functions, and objects while the program is running.

// Types of Memory :
    // 1. Stack Memory
        // Stack memory is a fast and limited storage space that stores primitive values.
        // Function call information in a last-in, first-out (LIFO) order.
        
    // 2. Heap Memory
        // Heap memory is a larger, slower memory area used to store objects, arrays, and functions.
        // It is a dynamic memory as grow or shrink accordingly.

// Primitive Datatypes :
    // Primitive datatypes stored directly in the stack memory.
    // Copied by Value.

let a = 10;
let b = a; // b is a copy 
b = 20;

console.log(a); // 10
console.log(b); // 20

//Reference 
    // They are stored in the heap, with a reference in the stack.
    // Copied by reference.

let user1 = {
    name: "Abhi",
    email: "abhi@gmail.com" };
let user2 = user1;

user2.email = "aditya@gmail.com";
console.log(user1.email); //aditya@gamil.com
console.log(user2.email); //aditya@gamil.com

// Garbage Collection :
    // JavaScript uses automatic garbage collection, to reclaim memory occupied by objects that are no longer in use.

    // Mark-and-Sweep Algorithm :
        // The engine keeps track of reachable objects (objects still in use).
        // If a value is not reachable (objects not in use), it's considered garbage and is cleaned up.