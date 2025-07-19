// Innediately Invoked Function Expressions ( IIFE )

//Definition:
    // An IIFE is a JavaScript function that is defined and immediately executed after its creation.

// Use Cases:
    // Avoid polluting the global namespace
    // Encapsulation (create private scope)
    // To immediately executed fuction after its creation.

// named IIFE
(function DB(){
    console.log(`DB connected!!`)
})();

// syntax :
    // (function defineing)(function call);
    // ; : ends the IIFE fuction 

// unamed / Anonymous IIFE
( () => {
    console.log("DB connected 2!!");
})();

// passing parameters in IIFE
( (name) => {
    console.log(`DB connected ${name}!!`);
})(2);

