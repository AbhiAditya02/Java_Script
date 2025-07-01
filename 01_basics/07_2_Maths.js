console.log(Math.PI);

//.abs - absolute value - it give only posivitve valueof every number
console.log(Math.abs(-4));

//.round - used to round of the number
console.log(Math.round(4.47));

//.ceil - give upper value / ceiling value
console.log(Math.ceil(4.47));

//.floor - gives lover value / floor value
console.log(Math.floor(4.47));

//min value of array 
console.log(Math.min(4, 3, 5, 6, 7));

//max value of array 
console.log(Math.max(4, 3, 5, 6, 7));

//random - give value between(0,1)
console.log(Math.random());
console.log((Math.random()*10)+1);

//give the random value between min and max value
const min =1
const max = 6

console.log(Math.floor((Math.random() * (max - min + 1)) + min));
