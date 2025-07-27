const { use } = require("react")

const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((items) => {
//     console.log(items);
//     return items;
// });

// console.log(values); // return undifined

//Why filters are used ???
   // Does not return anything 
   // It is used to perform side-effects like printing, updating, or modifying elements.
   // cannot use it to build a new array based on conditions.

// use of filters 
   // filter() is an array method used to create a new array 
   // containing only the elements that pass a given test

//syantax
   // array.filter(callback function)

// checks conditions is true ar not

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (nums) => nums > 4 )

//explicit return 
   const newNums = myNums.filter( (nums) => {
      return nums > 4
   })

console.log(newNums);