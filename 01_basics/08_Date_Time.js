let myDate = new Date()
console.log(myDate); // 2025-06-29T15:16:33.507Z

console.log(myDate.toString());  // Sun Jun 29 2025 20:46:33 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); // Sun Jun 29 2025

console.log(myDate.toTimeString());  // 20:48:36 GMT+0530 (India Standard Time)

console.log(myDate.toLocaleDateString());  // 29/6/2025

console.log(myDate.toLocaleString()); // 29/6/2025, 8:50:42 pm

console.log(myDate.toJSON()); // 2025-06-29T15:18:36.935Z

console.log(myDate.toISOString()); // 2025-06-29T15:18:36.935Z

console.log(typeof myDate); //object

let createDate = new Date(2025, 0, 23, 14, 4)//Date(year, monthIndex(0-11), date, hours(24hrs), minutes, seconds, ms)
console.log(createDate.toLocaleString()); //23/1/2025, 2:04:00 pm

let createDate1 = new Date("06-30-2025")
console.log(createDate1.toLocaleString());

//comparing time
let timeStamp = Date.now()
console.log(timeStamp);
console.log(createDate1.getTime());//get the value of date in milisecond

 //converting inot seconds
 console.log(Math.floor(Date.now()/1000)); //convert to second
 
//
let newDate = new Date()
console.log(newDate);
console.log(newDate.getHours());

console.log(`${newDate.getDay()} ${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`);

console.log(newDate.toLocaleString('default', { weekday: "long" }));
    