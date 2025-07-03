const marvelHeros = ["Thor", "Dr. Strange", "Hawkeye"]
const dcHeros = ["Batman", "Flash"]
/*
marvelHeros.push(dcHeros)
console.log(marvelHeros); //[ 'Thor', 'Dr. Strange', 'Hawkeye', [ 'Batman', 'Flash' ] ]
push just push the dcHeros array into the marvelHeros i.e. array inside array
*/

const allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros); // [ 'Thor', 'Dr. Strange', 'Hawkeye', 'Batman', 'Flash' ]
// it Combines / merges two or more arrays. 
// it returns a new array without modifying any existing arrays.

const allNewHeros = [...marvelHeros, ...dcHeros]
console.log(allNewHeros);
// spread operator (...) 
// it used to spread elements from arrays or objects into individual elements.
// it can take more then two arrays as an input.

const arr = [1, 2, 3, [4, 5, 6], 7, [8, [9, 0]]]
const usableArr = arr.flat(2); // depth may pe infinite
console.log(usableArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

console.log(Array.isArray("Abhi")); // false
// check is it an array or not

console.log(Array.from("Abhi")); // [ 'A', 'b', 'h', 'i' ]
// converts it into array

console.log(Array.from({name : "abhi"})); // [] - empty array
// gives empty array as we have to specify that we have to make an array of keys or values

let score1 = 100, score2 = 200, score3 = 300;
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
// converts array from different element(constant, variables, etc).