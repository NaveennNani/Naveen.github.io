// Web events are specified as part of the browser's APIs rather than the core JavaScript language.
// True :Web events are specified as part of the browser's API's than core JavaScript language

// Which of the following is a popup box in JavaScript?
// Prompt Box, Confirm Box, Alert Box

// Which of the following statements is correct?
// Statement-1: In JavaScript, the event.preventDefault() method is used to prevent the default behavior of an element.
// Statement-2: the event.stopPropagation() method is used to stop the propagation of an event or stop the event from occurring in the bubbling or capturing phase.  




// Understanding the Inner Workings of the DOM

// What is 1vw ________ ?
// 1% of viewport width

// A vw unit can be used to specify the text size;"vw" unit means _______?
// viewport width

// Events are the actions by which the user or browser interacts with HTML elements.?
// True :Events are the actions which are used to interact with HTML elements by user or browser.




// Selecting, Creating, and Removing Elements
// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)





// Managing Styles, Attributes, and Classes

// Which method is used to access custom attribute in JS ?
// console.log(website.getAttribute('owner'));

// Which method is used to create a custom attribute in JS?
// createAttribute()

// Which of the following statements are correct ?
// Statement-2: The remove() method is used for removing one or more classes from the number of classes present in the element.




// Creating Smooth Scrolling functionality

const btnScrollTo = document.querySelector('.btn--scroll-to'); 
const section1 = document.querySelector('#section--1');

// btn scroll

btnScrollTo.addEventListener('click', function (e){ 
    const slcoords = section1.getBoundingClientRect(); 
    console.log(slcoords)

    console.log(e.target.getBoundingClientRect())

    console.log("current X-Y scroll",window.pageXoffset,window.pageYoffset);

//     window.scrollTo({
//         left:slcoords.left + window.pageXOffset,
//         top:slcoords.top + window.pageYOffset,
//         behavior: 'smooth'
//         })

section1.scrollIntoView({behavior:'smooth'})        
})

// The scrollIntoView() method default value of behavior property makes the scroll?
// instantly jump to its destination

// The target property returns the element where the event occured.
// True




// Different Types of Events and Event Handlers

// Event and Event Listners 
// const h1 = document.querySelector('h1');
// const alterh1 = function(){
//     alert("Great! you are reading the heading now!")
//     }
    
//     h1.addEventListener('mouseenter', alterh1)

//     setTimeout(()=>{
//         h1.removeEventListener('mouseenter', alterh1) },4000)

    // h1.onmouseenter = function(){
    //     alert('onmouseenter: you are seeing this heading.'); 
    //     }

// Which of the following events occurs when the user presses a key (on a keyboard)?
// keydown :event occurs when the user presses a key (on a keyboard).    

// Which of the following is a valid addEventListener() syntax for a click event?.
// element.addEventListener("click", function).

// Which of the following is a way to attach event listener to an HTML element?
// addEventListener(), onevent listener, Inline event listener




// Event Propagation: Bubbling and Capturing

// In the bubbling phase, events propagate from the target element to Window up through the DOM tree by visiting all the ancestors of the target element one by one.
// True

// let buttonElement = document.createElement("button");
// let headingElement = document.getElementById("headingElement");
// buttonElement.textContent = "Learn";
// buttonElement.onclick = function() {
//        buttonElement.textContent = "Enroll";
// };
// headingElement.appendChild(buttonElement);
// onevent listener

// Which of the following is an Event Propagation?
// Capturing Phase, Target Phase, Bubbling Phase




// Practical Applications of Event Propagation
// const randomInt = (min, max) =>Math.floor(Math.random() *(max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0,255)}, ${randomInt(0,255)}, ${randomInt(0,255)}`
// console.log(randomColor())

// document.querySelector('.nav__link')
// .addEventListener('click', function(){ 
// console.log('LINK');
// this.style.backgroundColor = randomColor()
// });

// document.querySelector('.nav__links')
// .addEventListener('click', function(){ 
// console.log('LINK'); 
// this.style.backgroundColor = randomColor()
// });

// document.querySelector('.nav')
// .addEventListener('click', function(){ 
//     console.log('LINK'); 
//     this.style.backgroundColor = randomColor()
// });

// The event.stopPropagation () method stops the move upwards bubbling (on one event only), but all other handlers continue to execute on the current element.
// True

// When will the browser invoke the handler?
// Specified event occurs

// Which method is used to stop the bubbling phase?
// event.stopPropagation()




// Event Delegation: Navigation Implementation

// page navigation

// document.querySelectorAll('.nav__link').forEach(function(el){
// el.addEventListener('click', function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href')
//     document.querySelector(id).scrollIntoView({behavior:'smooth'})
//     })
// })
//1. Add event listners to common parent el 
// 2. Determine what el originated the event.
    
document.querySelector('.nav__links').addEventListener('click', function(e){
    e.preventDefault();
    if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href'); 
    document.querySelector(id).scrollIntoView({ behavior:'smooth' })
    }
})

// The event propagation handling the registered container elements is called __?
// Event Capturing

// The type that specifies what kind of event occurred is_____?
// event target

// Which of the following is a scheduler method?
// clearInterval(), setInterval(), setTimeout()




// Navigating the DOM Tree

// const h1 = document.querySelector('h1')

//Child Selection
//console.log(h1.childNodes); 
// console.log(h1.children);
// console.log(h1.firstElementChild);
// console.log(h1.lastElementChild); 
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orange';

// Going Upwards Parent
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// hl.closest('.header').style.background = 'orange'; 
// h1.closest('h1').style.backgroundColor = "green";

//Siblings
// console.log(h1.previousElementSibling); 
// console.log(h1.nextElementSibling);

// console.log(h1.previousElementSibling); 
// console.log(h1.nextElementSibling);
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach((el)=>{
// if (el !== h1) el.style.transform = 'scale (0.5)'
// })

// We can select the next element with the ____ method.
// nextElementSibling

// What are the two methods of traversing downwards?
// querySelector or querySelectorAll, children

// You use the closest method to find an element that can be multiple levels above the current element.
// Correct



// MODULE =26

// let ImageElement = document.querySelector('.image');
// console.log(imageElement.alt);

// Responsive Web Design is about using HTML and CSS to automatically____?
// Enlarge, Shrink, Resize

// The delegate() method attaches one or more event handlers to specified elements that are children of selected elements and specifies a function to run when the events occur.
// True

// The process by which the browser decides which objects to trigger event handlers on is _______?
// Event propagation

// The Window.scroll() method scrolls the window to a particular place in the document.
// True

// We can pass attributes to any HTML element.
// True

// Which method is used to select a specific method?
// Combine parentElement, children, and index

// Which of the following event properties is used to get the event type that occurred?
// type

// Which of the following events occurs when the user releases a key (on a keyboard)?
// keyup

// Which property is used to specify the key type when pressed?
// The correct answer is: keyCode










// 27 class.js

// Creating a Tab Component Part-1

//Tabs component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')

tabsContainer.addEventListener('click', function(e) {
    // const clicked = e.target.parentElement; 
    const clicked = e.target.closest('.operations__tab');
    // console.log(clicked)
   
    if(!clicked) return

    //Remove Active Class
    tabs.forEach(t => t.classList.remove('operations__tab--active'))
    tabsContent.forEach(c => c.classList.remove('operations__content--active'))

    //Activate the active tab
    clicked.classList.add('operations__tab--active');
    document.querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active')
})
// tabs.forEach((t)=>{
//     t.addEventListener('click', function(){ 
//         console.log("Tab")
//     })
// })        

// Tabs are for _____?
// Tabs are perfect for single-page web applications, for web pages capable of displaying different subjects

// The closest() method searches the DOM tree for elements that match a specified CSS selector.
// True

// We can separate content into panes using tabs where you can view each pane one at a time.
// True :You can view each pane one at a time.





// Creating a Tab Component Part-2

// We can modify the classList associated DOMTokenList using the ______?
// add(), remove(), replace()

// Which of the following is correct?
// We can put data into a variable using an assignment operator(=), Document is the entry point to the DOM, The onclick event occurs when the user clicks on an HTML element





// How to Pass Arguments to Event Handlers

//Menu fade animation
const nav = document.querySelector('.nav');

const handleHower = function(e){
    if (e.target.classList.contains('nav__link')){
        const link = e.target
        const siblings = link.closest('.nav').querySelectorAll('.nav__link')
        const logo = link.closest('.nav').querySelector('img');

        siblings.forEach(el =>{
            if(el !== link) {
                el.style.opacity = this
            }
        })
        logo.style.opacity = this
    }
}

nav.addEventListener('mouseover',handleHower.bind(0.5))

nav.addEventListener('mouseout',handleHower.bind(1))

// nav.addEventListener('mouseover', function(e) { 
//     handleHower(e,0.5)
// })

// nav.addEventListener('mouseout', function(e) { 
//     handleHower(e,1)
// })

// nav.addEventListener('mouseover', function(e) { 
//     if (e.target.classList.contains('nav__link')){
//         const link = e.target
//         const siblings = link.closest('.nav').querySelectorAll('.nav__link')
//         const logo = link.closest('.nav').querySelector('img');
        
//         siblings.forEach(el =>{
//             if(el !== link) {
//                 el.style.opacity = 0.5
//             }
//         })
//         logo.style.opacity = 0.5
//     }
// })

// nav.addEventListener('mouseout', function(e){
//     if (e.target.classList.contains('nav__link')){
//         const link = e.target
//         const siblings = link.closest('.nav').querySelectorAll('.nav__link')
//         const logo = link.closest('.nav').querySelector('img');
        
//         siblings.forEach(el =>{
//             if(el !== link) {
//                 el.style.opacity = 1
//             }
//         })
//         logo.style.opacity = 1
//     }
// })

// What is the default value of opacity?
// 1

// Which of the following is a schedular method?
// clearInterval(), setInterval(), setTimeout()





// Creating a Sticky Navigation with Scroll Event

//Sticky navigation
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords)
// window.addEventListener('scroll', function(e){
//     // console.log(e);
//     if(window.scrollY > initialCoords.top){ 
//         nav.classList.add('sticky') 
//     }else{
//         nav.classList.remove('sticky')
//     }
// })

// A sticky element is always relatively positioned to its parent.
// True

// Element with position: sticky property doesn't affect the other element's flow on the page.
// False

// Which of the following statement is correct?
// Statement-1: Element with position: the fixed property is fixed to the viewport and doesn't move, irrespective of scrolling.
// Statement-2: Element with position: sticky property can scroll to an offset value provided by the user.





// Better Alternative: Intersection Observer API

// const obsCallBack = function (entries, observer){ 
//     entries.forEach (entry => console.log(entry)); 
// }

// const obsOptions = {
//     root:null,
//     threshold: 0.1
// }

// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');

const stickNav = function(entries){
    const [entry] = entries;
    entries.forEach(entry => console.log(entry))
    
    if(!entry.isIntersecting) nav.classList.add('sticky'); 
    else nav.classList.remove('sticky')
}

const headerObserver = new IntersectionObserver(stickNav,{
    root:null,
    threshold: 0
})

// headerObserver.observe(header)

// Do some use cases of Intersection Observer API?
// Lazy-loading of images on a page when scrolled, Implementing infinite scrolling

// What is Intersection Observer API?
// New way to asynchronously observe changes in the intersection of a target element.

// Which is not a filter property value?
// url(), opacity()





// Revealing Elements on Scroll

//Reveal Sections Animation
const allSections = document.querySelectorAll('.section');

const revealSection = function(entries, observer) { 
    // entries.forEach(entry => console.log(entry)) 
    const [entry] = entries;

    if(!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden') 
    observer.unobserve(entry.target)
}
    
const sectionObserver = new IntersectionObserver(revealSection,{
    root:null,
    threshold: 0.15
})

allSections.forEach(function(section) { 
    section.classList.add('section--hidden'); 
    sectionObserver.observe(section)
})

// What is the code to start observing the target element?
// observer.observe(target)

// What is a threshold in Intersection Observer API?
// Percentage of overlap until the callback is fired





// Lazy Loading Images for Improved Performance

//Lazy Loading Images
const imgTargets = document.querySelectorAll('img[data-src]')

const loadImg = function(entries,observer){
    const [entry] = entries;

    if(!entry.isIntersecting) return;

    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load',function(){
        entry.target.classList.remove('lazy-img')
    })
    observer.unobserve(entry.target)
}

const imgObserver = new IntersectionObserver(loadImg,{
    root:null,
    threshold:0
})

imgTargets.forEach(img => imgObserver.observe(img))

// What does a threshold of 1 specifies in Intersection Observer API?
// The target in the root should be 100% visible.

// What does the root of null specifies in Intersection Observer API?
// The intersection related to the device's viewport.

// What is the Lazy loading of images?
// Technique to load images when they are required





// Creating a Slider Component

const slider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slide')
const btnRight = document.querySelector('.slider__btn--right')
const btnLeft = document.querySelector('.slider__btn--left')
let curSlide = 0;

const maxSlide = slides.lenght;

slides.forEach((s, i) => {
    console.log(s)
    s.style.transform =`translateX(${100 * (i)}%)`
})

function goToSlide(slide){
    slides.forEach((s, i) => {
        console.log(s)
        s.style.transform =`translateX(${100 * (i - slide)}%)`
    })
}

btnRight.addEventListener('click',function(){
    console.log(curSlide, maxSlide)
    if(curSlide === 2){
        curSlide = 0
    }else{
        curSlide++;
    }

    goToSlide(curSlide)
})

btnLeft.addEventListener('click',function(){
    console.log(curSlide, maxSlide)
    if(curSlide === 0){
        curSlide = maxSlide -1;
    }else{
        curSlide--;
    }

    goToSlide(curSlide)
})

// What is the property of translateX in transform?
// Moves the element along the x-axis from its current position.





// Efficient Script Loading using "defer" and "async"

// What are the two places in which you can put JavaScript?
// head and body end

// What is the best method to load JavaScript?
// <script defer src="main.js"></script>

// What is the issue with putting the <script src="main.js"></script> in the <head> part?
// The program will wait for main.js to execute before DOM gets loaded.





// MODULE 27

// A Callback is a method that is passed as an argument to another method.
// Callback is a method that is passed as an argument to another method

// Choose the correct snippet from the following to check if the variable "x" is not equal the "NULL"?
// if(x!==null)

// filter property is mostly used in image content for adjusting the image rendering, background, border, etc.
// Filter property is mostly used in image content to adjust the image 

// How many types of Scroll Bars exist?
// 2

// What is the code to stop observing the target element?
// observer.unobserve(target);

// What are the events by which the user or browser interacts with the HTML elements?
// Clicking button, Scrolling the page, Pressing keyboard keys

// What are the three ways to load a JavaScript file?
// <script src="main.js"></script>, <script async src="main.js"></script>, <script defer src="main.js"></script>


















































































