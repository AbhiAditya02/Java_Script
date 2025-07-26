const fruits = ['apple', 'banana', 'cherry'];

function print(items){
    console.log(`f`,items);
}

//for each loop  - Used to iterate over each element in an array.
fruits.forEach( function(fruit , number) { // array.forEach( callback function{} )
  console.log(fruit);
});
// call back fuction don't have any name 
// syntax of callback function
// fuction(parameter){block of code}
// parameters are (string , number , array)

//arrow fuction
fruits.forEach( (fruit) => {
    console.log(fruit);
} )

// function in for each
fruits.forEach(print); // giving reference of different fuction in for each

fruits.forEach((items, index, arr) => {
    console.log(items, index,arr);
})
// parameters are (string , number , array)


// for each loop on objects in the array
const coding = [
    {
        language: "js",
        fileExtenstion: ".js"
    },
    {
        language: "java",
        fileExtenstion: ".java"
    },
    {
        language: "c++",
        fileExtenstion: ".cpp"
    }
]

coding.forEach( (items) => {
    console.log(items.language);
    console.log(items.fileExtenstion);
})