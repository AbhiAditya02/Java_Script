// creating a promise
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task 
    // DB calls, cryptography, network 
    setTimeout(function(){
        console.log("Async Task is compelete");
        resolve()
    }, 1000)
})

//consumption of promise
promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "abhi", email: "abhiaditya0755@gmailcom"}) // we can pass data in resolve generally its object
    },1000)
})

promiseThree.then(function(user){//all values are return to this
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "abhi", password: "abhisv"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})

promiseFour.then((user) =>{
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolve or rejected")
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "javascript", password: "abhisv"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000);
})

// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response);
// }
// async await don't handel error on its own use try catch instead

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    }catch (error){
        console.log(error);
    }
}

consumePromiseFive() // calling function

// async function getAlUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json(); // as this also take time
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAlUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))