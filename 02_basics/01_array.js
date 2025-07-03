// Array
/*
- Array stores a collection of multiple items under a single variable name.
- Array is an objects
- In JS arrays are resizable(means can add more element after declaration)
- In JS array can contain a mix of different data types
- Array start from zero index
- In JS coping array create shallow copies(means copies share same reference i.e. any change in copy change original element).
*/
//declaration of the array
const arr = [1, 2, 3, 4, 5]
const arr1 = new Array(1, 2, 3, 4, 5)

//acessing the value from array
console.log(arr[0]); // 1

//Methods of Array

arr.push(6) //add element in the array at the end
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]

arr.pop() // removes the last element of the array
console.log(arr); // [ 1, 2, 3, 4, 5 ]

arr.unshift(6) //add element in the array at the begining
console.log(arr);// [ 6, 1, 2, 3, 4, 5 ]

arr.shift() // removes the 1st(0 index) element of the array
console.log(arr);// [ 1, 2, 3, 4, 5 ]

console.log(arr.includes(9)); // false 
// .includes(element) : checks whether 9 is present in the array
// type of : boolean (true / false)

console.log(arr.indexOf(9)); //-1 (-1 means not present in the array)
// checks where the element is present in the aarray and then return the indexof the elment 

const newArr = arr.join() //combine all elements of an array into a single string
console.log(newArr); // 1,2,3,4,5 
// return type = string

const newArr1 = arr.slice(0,3) //(start index, end endex) //end index is excuslive
console.log(newArr1); // [ 1, 2, 3 ]
// Returns a portion of an array
// Don't modify the original array.

const newArr2 = arr.splice(0,3) //(start index, number of element)
console.log(newArr2); // [ 1, 2, 3 ]
// it removes elements from place and make a new array
// it modifies the original array 
console.log(arr);
// original array becomes [4, 5]