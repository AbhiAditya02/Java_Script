// for loop
// Syantax
for (let index = 1; index <= 10; index++) {
    console.log(index);
}

// break and continue
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("5 detected!!");
        break;
    }
    console.log(i);
}


for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("5 detected!!");
        continue;
    }
    console.log(i);
}

// While loop
// syantax
let i = 0 // initialisation
while (i <= 10) {
    console.log(`value = ${i}`); // code
    i += 2; // increment or decrement
}

// do while loop
let score = 0
do {
    console.log(`value = ${score}`); // code
    score += 2; // increment or decrement
} while (score <= 10); // condition checking 

// it's executed minimum one time 

