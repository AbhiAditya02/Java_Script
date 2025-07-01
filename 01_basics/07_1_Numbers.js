const score = 400
console.log(score);

const balance = new Number(100);
console.log(balance);

//convert to string
console.log(balance.toString());

//to fix the presion value
console.log(balance.toFixed(2));

const otherNumber = 334.8349;

//previson value give priority befor decimal point
console.log(otherNumber.toPrecision(3))

const hundreds = 10000000
//to convert nubers with numerical places 
//by defaus it is send for the USA standards 
//to convert it to indian we have to use 'en-IN'
console.log(hundreds.toLocaleString('en-IN'))

// to get the min an s max value of Numbers
// Min value = Number.MIN_VALUE
// Max value = Number.MAx_VALUE
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
 

