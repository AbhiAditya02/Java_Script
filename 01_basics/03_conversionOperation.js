  let score = "33aa";

  console.log(typeof score); 
  console.log(typeof(score));

  let valueInNumber = Number(score); // Number(score) : convert every into a number
  console.log(typeof valueInNumber); // this gives number but
  console.log(valueInNumber); // actually valueInNumber stores a value called NaN (Not-a-Number)

  /*
  if we take different values in sore the valueIn Number store different values.
  few examples are listed below.
  "33" - 33
  "33aa" - NaN
  true - 1; false - 0
  null - 0
  undefined - NaN
  */

  let isLoggedIn = "";

  let boleanIsLoggedIn = Boolean(isLoggedIn);
  console.log(boleanIsLoggedIn);

  /*
  convertion to boolean
  1 : true , 0 : false
  "" : false , "abhi" : true
  2 : true , -1 :true
  */

let someThing = 33;

let stringThing = String(someThing)
console.log(stringThing);
console.log(typeof stringThing);