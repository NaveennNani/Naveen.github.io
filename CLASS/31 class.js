// Understanding the Event Loop Mechanism


// What is the order of execution in the event loop?
// The correct answer is: Call Stack -> Callback Queue -> Microtask Queue

// What is the purpose of the event loop in JavaScript?
// To manage asynchronous code execution

// Which of the following is NOT a component of the event loop in JavaScript?
// Scheduling Queue





// Implementing the Event Loop

// code executes individually
console.log('Implementing the Event Loop')
console.log("Test Start"); 

setTimeout(()=>{ // callback tasks
    console.log("0 second timer")
},0)

Promise.resolve("Resolved Promise 1").then(res => // microtasks
    console.log(res)); 

Promise.resolve("Resolved Promise 2").then(res =>{ // microtasks
for (let i=0;i<10000000000;i++){}
console.log(res);
}) 

console.log("Test End");


// What is the priority of microtasks in the event loop?
// Higher than callback tasks

// What is the purpose of the setTimeout() function in JavaScript?
// To execute a function after a specified amount of time

// Which of the following methods can be used to add a task to the Microtask Queue in JavaScript?
// Promise.resolve()





// Creating a Simple Promise Object

// executes individually
// console.log('Creating a Simple Promise Object')
// const lotteryPromise = new Promise(function(resolve,reject){
//     console.log("Lottery Draw is taking place")
//     setTimeout(()=>{
//     if (Math.random() > 0.5){
//     resolve('You Won')
//     }else{
//     reject(new Error('You lost your money'))
//     }
// },2000)
// })

// lotteryPromise.then(res => console.log(res)).catch(err=> console.error(err));
    
// //promisify setTimeout
// const wait = function (seconds) {
//     return new Promise(function(resolve) {
//     setTimeout(resolve, seconds * 1000)
//     })
// }

// wait(1).then(() => {
//     console.log('1 seconds passed');
//     return wait(1)
// }).then(()=>{
//     console.log('2 second passed')
//     return wait(1)
// }).then(()=>{
//     console.log('3 second passed')
//     return wait(1)
// }).then(()=>{
//     console.log('4 second passed')
//     return wait(1)
// }).then(()=>{
//     console.log('5 second passed')
//     return wait(1) 
// }).then(()=>{
//     console.log('6 second passed')
//     return wait(1)  
// })


// Which method is used to chain multiple asynchronous operations in JavaScript?
// Promise.then()

// Which method is used to create a new Promise object in JavaScript?
// Promise.resolve()

// Which of the following is not a state of a Promise in JavaScript?
// Fulfilled





// Using Promises to Work with Geolocation API

// new code
// navigator.geolocation.
// getCurrentPosition(pos=> console.log(pos),
// err => console.log(err))

// new code
// const getPosition = function(){
//     return new Promise(function(resolve,reject) {
//     // navigator.geolocation.getCurrentPosition(
//     // position => resolve(position),
//     // err => reject(err)
//     // )
//     navigator.geolocation.getCurrentPosition(resolve,reject)
//     })
// }
    
// getPosition().then(pos=> console.log(pos))


// Which method is used to handle errors in a Promise chain in JavaScript?
// .catch()

// Which of the following is not a valid method that can be called on a Promise object in JavaScript?
// .await()

// Which of the following statements about Promise chaining in JavaScript is true?
// The .then() method returns a new Promise object.





// Working with Promises through Async/Await Syntax

// new code
// const whereAmI = async function(){
// // console.log("This is from async function") 
// // const res = await fetch('https://restcountries.eu/rest/v')

// const res = await fetch(`http://api.github.com/users`);
//     const data = await res.json();
//     console.log(data);
// }
    
// whereAmI()
// console.log("First Log")


// Which keyword is used to declare a function as asynchronous in JavaScript?
// async

// Which of the following is a valid syntax for using async/await in JavaScript?
// async function myFunction() { await }

// Which of the following statements about async/await in JavaScript is true?
// Async/await is a syntax for consuming Promises
// Async/await can only be used with native Promise objects in JavaScript
// Async/await makes asynchronous code look synchronous





// Handling Errors with try...catch Block

// new code
// const whereAmI = async function(){
// try{
//     const res = await fetch(`https://api.github.com/users`);
//     const data = await res.json();
//     console.log(data);
// }catch(err) {
//     console.error(err.message)
//     console.log("~file: script.js:320 whereAmI error:", error)
// }
// }

// whereAmI();
// whereAmI();
// whereAmI();
// whereAmI();
// whereAmI();


// What is the purpose of using try-catch in JavaScript?
// To handle unexpected errors that may occur during code execution

// What is the syntax for using try-catch in JavaScript?
// try{ } catch(error) { }

// Which statement is true about the finally block in JavaScript try-catch?
// The finally block is always executed. regardless of whether an error occurs or not





// Using Async Functions to Return Values

// new code
// const getGithubUsers = async function(){
//     try{
//         const res = await fetch(`https://api.github.com/users`);
//         const data = await res.json();
//     // console.log("Data", data)
//     return data
//     }catch(err){
//         console.error(err.message)
//     }
// };
    
// (async function(){
//     // Then
//     try{
//         const users = await getGithubUsers(); 
//         console.log(users)
//     }catch(error){
//         console.error(error.message)
//     }
//     // Finally
//     console.log("Finished getting users")
// })()


// new code
// const users = getGithubUsers();
// console.log(users);

// users.then((data)=>{
    // console.log(data)
    // }).catch((err)=>{
    //console.error(err.message)
    // }).finally (() => {
    //console.log("Finished getting data from the function")
    
    // (function(){
    // console.log("This is IEF")
    // })()


// What is an immediately invoked function in JavaScript?
// A function that is executed immediately after it is defined

// What is the syntax for creating an immediately invoked function in JavaScript?
// (function() {})()

// Which of the following is an example of an immediately invoked function in JavaScript?
// (function() {console.log('Hello, world!');})()





// Running Promises Concurrently

// new code
// const getJSON = function (url, errorMsg = 'Something went wrong') {
//     return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`$(errorMsg) (${response.status}) `)
//         return response.json();
//     });
// };

// const get3Users = async function (u1,u2,u3){
//     try {
//     // const user1 = await getJSON('https://api.github.com/users/${u1}
//     // const user2 = await getJSON('https://api.github.com/users/${u2}
//     // const user3 = await getJSON('https://api.github.com/users/${u3}
//     // console.log(userl.location, user2. location, user3. location)
//     const data = await Promise.all([
//     getJSON(`https://api.github.com/users/${u1}`),
//     getJSON(`https://api.github.com/users/${u2}`),
//     getJSON(`https://api.github.com/users/${u3}`)
//     ])
//     data.map((d)=>{
//         console.log(d.location)
//     })
//     } catch (error) {
//     console.error(error)
//     }
// }
    

// get3Users('mojombo','wycats','pjhyett')


// How does Promise.all() behave when one of the promises in the array is rejected?
// The resulting promise is rejected immediately.

// What is parallel execution in JavaScript promises?
// Running promises concurrently without any limitations.

// Which method can be used to run promises in parallel in JavaScript?
// Promise.all()





// Exploring Promise Combinators: race, allSettled and any

// const timeout = function (sec){
// return new Promise(function(_, reject){
// setTimeout(() =>{
//     reject(new Error ('request took too long'))
// }, sec * 1000)
// })
// }


// Promise.race([
// getJSON(`https://api.github.com/users/mojombo`), 
// timeout(1)
// ]).then(res => console.log(res))
// .catch(err=> console.log(err))


// Promise.allSettled ([
//     Promise.resolve("Success"),
//     Promise. reject('Error'),
//     Promise.resolve('Another success')
// ])
// .then(res=>console.log(res));

// Promise.all([
//     Promise.resolve("Success"),
//     Promise.reject('Error'),
//     Promise.resolve('Another success')
// ]).then(res =>console.log(res)).catch(err => console.log(err))

// Promise.any([ // only scccess will execute
//     Promise.reject('Error'),
//     Promise.resolve('Another success'),
//     Promise.resolve("Success")
// ]).then(res =>console.log(res)).catch(err => console.log(err))


// What happens if one of the promises passed to Promise.all() or Promise.allSettled() is rejected in JavaScript?
// The resulting promise is rejected immediately with the reason for the first rejected promise.

// What is the difference between Promise.all() and Promise.allSettled() in JavaScript?
// The correct answer is: Promise.all() returns a promise that resolves with an array of resolved values, while Promise.allSettled() returns a promise that resolves with an array of objects representing the state of each promise.

// What is the difference between Promise.any() and Promise.race() in JavaScript?
// Promise.any() returns a promise with the same value as the first resolved promise, while Promise.race() returns a promise that resolves with the value or reason of the first settled promise.





// MODULE 31 DAY

// What happens if an async function does not contain a return statement in JavaScript?
// The function will return undefined.

// What is the primary benefit of using immediately invoked functions in JavaScript?
// They help to avoid naming collisions with other variables in the global scope.

// What is the purpose of the throw statement in JavaScript?
// To explicitly throw an error or exception

// Which method is used to race multiple asynchronous operations in JavaScript?
// Promise.race()

// Which of the following is an example of a microtask in JavaScript?
// Promise.resolve()

// Which of the following statements about async/await error handling with try/catch in JavaScript is true?
// The try/catch block can catch both synchronous and asynchronous errors inside the async function

// Which of the following statements about JavaScript's setTimeout() function is false?
// The specified time interval is guaranteed to be precise

// Which of the following statements about the Call Stack in JavaScript is true?
// It can cause a stack overflow if it grows too large

// Which statement is true about nested try-catch blocks in JavaScript?
// All catch blocks are executed in sequence from the innermost to the outermost

// Which statements about JavaScript's async/await syntax are valid?
// The async/await syntax is only supported in modern browsers
// The async/await syntax is supported in all versions of Node.js
// The async/await syntax is a feature of the ECMAScript 6 specification























































































