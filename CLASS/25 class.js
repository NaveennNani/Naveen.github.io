// Adding Dates to your JavaScript App

console.log("QUIZ")
// How can you use padStart() to format a date string with leading zeros in JavaScript?
// The correct answer is: date.toString().padStart(2, "0");

// What does the padStart() method do when used on a string?
// The correct answer is: It adds leading spaces or zeros to the string.

// What method can be used to convert a Date object to a string in ISO format in JavaScript?
// The correct answer is: toISOString()

// Which of the following will correctly format the month of a date with two digits using padStart() in JavaScript?
// The correct answer is: date.getMonth().toString().padStart(2, "0");



// Internationalizing Dates with the Intl Object in JavaScript
console.log("QUIZ")
const date =new Intl.DateTimeFormat().format(new Date(2022, 1, 14))
console.log(date)



console.log("QUIZ")
const dates = new Date("2022-05-01");
const formattedDate = new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric" }).format(dates);
console.log(formattedDate);



const datex = new Date("2022-05-01");
const formattedDates = new Intl.DateTimeFormat("en-US").format(datex);
console.log(formattedDates);



// Which of the following will correctly format the month of a date with the full month name using Intl in JavaScript?
// The correct answer is: new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);

// Performing Operations with Dates in JavaScript
console.log("Performing Operations with Dates in JavaScript")
// //Operations on dates
const future = new Date(2028, 10, 19, 15,45);
console.log(+future)
const calcDaysPassed = (date1, date2) =>
Math.abs(date2 - date1) / (1000* 60 * 60 *24)
const daysPassed = calcDaysPassed (new Date(2028, 10, 19), new Date(2028, 10, 29));
console.log(daysPassed)



console.log("QUIZ")
const fix =new Intl.DateTimeFormat('en-GB').format(new Date(2022, 1, 14))
console.log(fix)


const fixs = new Intl.DateTimeFormat('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
}).format(new Date(2022, 1, 14))
console.log(fixs)


// Internationalizing Numbers with the Intl Object in JavaScript

const num = 33543434.23;
const options = {
style: "currency",
currency: 'INR'
}
console.log(num)
console.log("US",new Intl.NumberFormat('en-US', options).format(num))
console.log("Germany", new Intl.NumberFormat('de-DE', options).format(num))
console.log("Syria", new Intl.NumberFormat('ar-SY', options).format(num))



console.log("QUIZ")

// What does the following code do for new Intl.NumberFormat().format(12345)?
// The correct answer is :Formats the number 12345 to a localized string with comma separators

// What is the purpose of the maximumFractionDigits option in Intl.NumberFormat?
// The correct answer is :Specifies the maximum number of fraction digits to be displayed

// What is the purpose of the minimumFractionDigits option in Intl.NumberFormat?
// The correct answer is :Specifies the minimum number of fraction digits to be displayed

// Which of the following is an example of using Intl.NumberFormat to format a number as a currency string in US dollars?
// The correct answer is :new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(12345)

// Using Timers for Delayed Function Execution with setTimeout() and setInterval()
console.log('Using Timers for Delayed Function Execution with setTimeout() and setInterval()')


console.log("I am ordering a pizza")
const ing = ['tomato', 'mushrooms']

const pizzaTimer = setTimeout((ing1, ing2)=>{
console.log(`Here is your pizza ◄ with ${ing1} and ${ing2}`)
},3000,...ing)

if(ing.includes ('olives')) { clearTimeout(pizzaTimer)}


console.log("QUIZ")
// How many arguments can be passed to the callback function in the setTimeout function?
// The correct answer is :0

// What does the setTimeout function return?
// The correct answer is :a timeout ID

// What is the purpose of the "clearTimeout" function?
// The correct answer is :to clear a timeout previously set with setTimeout

// What is the syntax of the setTimeout function in JavaScript?
// The correct answer is :setTimeout(callbackFunction, delay)



// Implementing a Countdown Timer for Your JavaScript App
console.log("Implementing a Countdown Timer for Your JavaScript App")


console.log("QUIZ")
// How many arguments can be passed to the callback function of the setInterval() method?
// The correct answer is :0

// What does the clearInterval() method do in JavaScript?
// The correct answer is :Stops the timer set by setInterval()

// What is the syntax for setInterval in JavaScript?
// The correct answer is :setInterval(callback, delay)

// Which of the following is the correct syntax to clear an interval in JavaScript?
// The correct answer is :clearInterval(timerID)



console.log("MODULE 25")

// Can multiple timeouts be set with the same callback function?
// Yes, multiple timeouts can be set with the same callback function

// How can you stop an interval after a certain number of JavaScript iterations?
// The correct answer is: Use a counter variable and conditionally call clearInterval()

// What happens if clearTimeout is called with an invalid timeout ID?
// The correct answer is: The clearTimeout function does nothing

// What happens if the callback function in setInterval() takes longer than the delay to execute?
// The callback function is terminated, and the next iteration is started immediately

// What happens if the delay parameter in the setTimeout function is negative?
// The callback function is not executed

// What happens if the delay parameter in the setTimeout function is set to 0?
// The callback function is executed immediately

// What is the return value of the setInterval() method?
// The correct answer is: An ID that can be used to clear the interval using clearInterval(

// What is the syntax for setting an interval in JavaScript to execute every 500 milliseconds?
// setInterval(callback, 500)

// What minimum delay can be specified in the setTimeout function?
// 1 millisecond

// Which of the following is the correct way to pass arguments to a callback function in setInterval() method?
// setInterval(callback.bind(this, arg1, arg2), delay), setInterval(callback, delay, arg1, arg2)