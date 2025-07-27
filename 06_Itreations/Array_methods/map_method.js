const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map()
    // map() method is used to transform each element of an array 
    // and return a new array with the results.

//syntax
    //array.map(callback function)

// performs operations on each element of an array


// const newNums = myNums.map( (num) => num + 10)
// console.log(newNums);

// using for each
// myNums.forEach( (nums) => {
//     console.log(nums+10); 
// })

//chaining
const newNums = myNums
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num > 40)
console.log(newNums);
