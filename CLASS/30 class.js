'use strict';

// Understanding Asynchronous JavaScript, AJAX, and APIs

// Can we build our web APIs?
// Yes

// Which of the following is a scheduler method?
// clearInterval(), setInterval(), setTimeout()

// Which of the following statements is correct?
// The Asynchronous code is something in which actions can happen and is not dependent on other actions.
// The synchronous code should be finished before anything else can happen.





// Understanding AJAX Call: XMLHttpRequest Part- 1

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries')

////////////////////////////////////////////////

const renderCountry = function(data,className=''){
    const html =`
    <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data"> 
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👨‍👩‍👧‍👦</span>${(+data.population/100000).toFixed(1)} Mill people</p>
    </div>
    </article>`

    countriesContainer.insertAdjacentHTML('beforeend',html);
    countriesContainer.style.opacity = 1;

}

const renderError = function(msg){
    countriesContainer.insertAdjacentText['beforeend',msg];
    countriesContainer.style.opacity = 1;
}

// getCountryData('usa')
// getCountryData('germany')


// responseText returns response data as a ___.
// string

// The message the server sends as an answer to the client's HTTP request is called ____.
// HTTP response

// Which of the following is used to access the web resources stored on the server?
// URL





// Understanding AJAX Call: XMLHttpRequest Part- 2


// Considering the given code snippet, which of the following is the Domain Name in the URL?
// request.open('GET','https://restcountries.com/v3.1/name');
// restcountries.com

// The message the client sends to initiate an action on the server using HTTP is called ___.
// HTTP request

// What action does the HTTP request method GET indicate for a given resource?
// Read





// Understanding Callback Hell

// const getCountryAndNeighbour = function(country){
//     const request = new XMLHttpRequest();
//     request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
//     request.send();
//     request.addEventListener('load', function(){
        
//     // console.log(JSON.parse(this.responseText))
    // const [data] = JSON.parse(this.responseText); 
    // console.log(data);
//     renderCountry(data)

//     //Get neighbour data
//     const [neighbour] = data.borders; 
//     console.log(neighbour);

//     //AJAX call for neighbour
//     const request2 = new XMLHttpRequest();
//     request2.open('GET',`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener('load', function(){
//         console.log(JSON.parse(this.responseText)); 
//         const [data2] = JSON.parse(this.responseText)
//         renderCountry(data2,'neighbour')
//         })
//     })
// }
    
// getCountryAndNeighbour('usa')


// Which of the following is the first argument passed to setTimeout() and setInterval()?
// Callback function





// Understanding Promises and the Fetch API


// Which of the following methods captures the response if a promise is rejected?
// catch





// How to Consume Promises?

const getJSON = function(url,errorMsg = 'something went wrong'){

    return fetch(url).then(response =>{
        if(!response.ok) throw new error (`${errorMsg} ${response.status}`)
    })
}






// const getCountryData = function(country) { 
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//         // console.log(response)
//         if(!response.ok)
//         throw new Error(`contry not Found (${response.status})`)

//         return response.json()
//     })
//     .then((data)=>{
//         console.log(data)
//         renderCountry(data[0]);
//         const neighbour = data[0].borders[0]
//         if(!neighbour) return;
//         return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//     })
//     .then(response => {
//         console.log(response)
//         if(!response.ok)
//         throw new Error (`country not found (${response.status})`)
//         return response.json()
//     })
//     .then(data => renderCountry(data[0],'neighbour'))
//     .catch(err => {
//         console.log(`${err} `)
//         renderError(`somthing went wrong ${err.message}. Try Again!`)
//     })
//     .finally(() =>{
//         countriesContainer.style.opacity = 1;
//     })
// }


// Which of the following statements is correct?
// Promise is a way to handle asynchronous operations.
// A promise is an object that represents a result of an operation that will be returned at some point in the future.

// Which of the following can be a reason for a failure of fetching a resource?
// URL is spelled incorrectly, Network failure error, Server is taking too long to respond





// How to Chain Promises?


// const problem = new Promise(function(resolve, reject) {
// throw "solve";
// }).then((data)=> console.log(data)., (data)=> data);
// State:fulfilled, value: "solve"

//  const problem = new Promise(function(resolve, reject){
//  resolve("Problem resolved");
// });
// problem.then(function solution1(result){
//      console.log(result);
//  }).then(function solution2(){
//      console.log("We can call multiple functions this way")
//  });
// problem solved
// We can call multiple functions this way





// How to Handle Promise Reject?





btn.addEventListener('click', function(){
    getCountryData('india')
})

// getCountryData('australia')


//  const url = "https://restcountries.com/v3.1/name";
// fetch(url)
// .then((response) => {
//     return response.json();
//  })
// .then((jsonDatA. => {
//     console.log("data retrieved");
// });
// console.log("fetching done");
// fetching done, data retrieved

//  const url = "hps://restcountries.com/v3.1/name";
// const responsePromise = fetch(url);
// responsePromise.then((response) => {
//        return response;
//     })
//    .catch((error) => {
//        console.log("rejected");
//    });
// rejected

// In JavaScript, a promise can be in which of the following states?
// Pending, Rejected, Fulfilled





// Implementation of Throwing Errors Manually


// const num = 10;
//       try {
//          if(num>30){
//              console.log('Success');
//          }else{
//              throw new Error('The num is low');
//          }
//         console.log('hi');
//       }
//       catch(error) {
//             console.log('error');
//             console.log('Error message: ' + error);
//       }

// const url = "htps://restcoun.com/v3.1/name";
//      fetch(url)
//         .then((response) => {
//              console.log("received response");
//         })
//         .catch((error) => {
//              console.log("request rejected");
//         });
//       console.log("fetching done");

// Which statement below defines a custom error?
// throw





// MODULE 30

// A URL is a text string that specifies where a resource can be found on the Internet.
// True

// API stands for ______?
// Application Programming Interface

// In asynchronous execution in JavaScript, the second statement won't wait until the execution of the first statement.
// True

// Which is not a server-side object?
// XMLHttpReques

// Which is the subdomain in the given url?
// http://www.google.co/hakawati/
// www

// Which of the below functions runs the code synchronously in JavaScript?
// setTimeout, fetch

// Which of the following is a protocol?
// Hypertext Transfer Protocol Secure, Hypertext Transfer Protocol, Web Sockets

// Which of the following methods captures the response if a promise is fulfilled?
// then

// Which of the following status code series indicates an HTTP request has been successfully completed?
// 2XX






























































