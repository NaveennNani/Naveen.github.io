// Adding Functionality to Fetch Data with JavaScript

// What is the full form of API?
// Application Programming Interface

// Which javascript method is used to connect with any other application through an API?
// fetch()

// Which method is used to get the actual JSON response from the method?
// json()





// DOM Manipulation using JavaScript
// Optimising and Refining DOM Manipulation using JavaScript
// Designing and Creating a Custom Loader with JavaScript
// Custom Loader Continued


const myButton = document.getElementById("btn1")
const myQuote = document.getElementById("myquote") 
const myAuthor = document.getElementById("myauthor")
const copy = document.getElementById("copy")
const volume = document.getElementById("volume")
const myContainer = document.getElementById("container") 
const myLoader = document.getElementById("loader")

function first(){
    // container should be visible --> loader should not be visible 
    myContainer.hidden = false
    myLoader.hidden = true
}

function second(){
    // Loader should be visible --> container should not be visible
    myLoader.hidden = false
    myContainer.hidden = true
} 

first()


myButton.addEventListener("click", async function(){
    second()
    const response = await fetch("https://api.quotable.io/random") 
    let quotes = await response.json()

    myQuote.innerText = quotes.content//<span id="myquote"></span> 
    myAuthor.innerText = quotes.author// <span id="myauthor"></span>
    first()
})


copy.addEventListener("click", function(){
    //Logic to copy the quote
    navigator.clipboard.writeText(myQuote.innerText)
    // Where there is a will, there is way
    // Do not go where the path may lead, go instead where there is no
})

volume.addEventListener("click", function(){
    //Logic to read out that quote
    let speech = new SpeechSynthesisUtterance(myQuote.innerText)
    speechSynthesis.speak (speech)
})





// MODULE 32 DAY

// How can we make a loader to be enabled on the screen?
// loader.hidden = false

// Should we make the function async if use await keyword in it?
// true

// Which of the following Javascript method is used to access an HTML element from the HTML file using the id attribute?
// getElementById(id)





