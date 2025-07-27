// reduce()
    // reduce() method is used to reduce an array to a single value 
    // by applying a function to each element and accumulating the result.

// Syntax:
    // array.reduce( callbackFunction (accumulator, currentValue), initialValue)

const number = [1, 2, 3, 4]
/*
// normal function
const total = number.reduce( function(acc, curVal) {
    console.log(`acc: ${acc} curval: ${curVal}`);
    return acc + curVal
}, 0)
console.log(total);
*/

// arrow function
const total = number.reduce( (acc, currVal) => acc + currVal , 0)
console.log(total);

// eamples
const shoppingCart = [
    {
        itemsName: "js course",
        price: 1999
    },
    {
        itemsName: "py course",
        price: 999
    },
    {
        itemsName: "anroid dev course",
        price: 5999
    },
    {
        itemsName: "D.S. course",
        price: 9999
    },
    {
        itemsName: "java course",
        price: 7999
    },
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(totalPrice);
