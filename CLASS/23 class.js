// How can we prevent a form from refreshing the page upon submission?
// The correct answer is :By using the event.preventDefault() method on the form submit event

// What is the purpose of the find() method in JavaScript?
// The correct answer is: To search for a specific value in an array and return the value itself

// Which CSS property can be used to adjust the opacity of an element?
// The correct answer is: opacity --> This property can take a value between 0 and 1, where 0 is completely transparent and 1 is completely opaque.

// What does the addEventListener method do in JavaScript?
// The correct answer is :Listens for a specific event on an element and executes a callback function

// Which method is used to convert a string into a number in JavaScript?
// The correct answer is :parseInt(), parseFloat()

// Which of the following is NOT an argument you can pass to the addEventListener method?
// The correct answer is :Element ID

// What does the findIndex method return?
// The correct answer is: The index of the first element that satisfies the condition

// Which of the following is a correct usage of the findIndex method?
// The correct answer is :[1, 2, 3].findIndex((x, index) => index === 2)

// Which of the following will return the index of the first negative number in the array [1, 2, -3, 4, -5] using the findIndex method?
// The correct answer is :[1, 2, -3, 4, -5].findIndex((x) => x < 0)



//  Checking if Some or Every Element Meets a Condition with some() and every()
const movements = [200,-450, 400, 3000, -650,-130, 70, 1300]
console.log(movements)
console.log(movements.includes (4000))


//SOME
console.log("some")
console.log(movements.some ((mov)=>{
    return mov <-1000
}))
    

//Every
console.log("Every")
console.log(movements.every ((mov)=>{
    return mov > -1000
}))


//Seperate Callback
console.log("Seperate")
const deposit = mov => mov > 0;
console.log(movements.some (deposit))
console.log(movements.every (deposit))
console.log(movements.filter(deposit))


// What is the return value of the every method in JavaScript?
// The correct answer is :True if all elements satisfy the condition, otherwise false

// What is the return value of the includes() method when the searched element is found in the array?
// true

// What is the return value of the some method in JavaScript?
// The correct answer is :True if at least one element satisfies the condition, otherwise false


console.log("MODULE QUIZ 23")
const ages = [20, 25, 30, 35, 40];
const isOlderThan40 = (age) => age > 40;
const index = ages.findIndex(isOlderThan40);
console.log(index)



console.log("QUIZ")
const numbers = [10, 20, 30, 40, 50];
const isGreaterThan30 = (number) => number > 30;
const someNumberGreaterThan30 = numbers.some(isGreaterThan30);
console.log(someNumberGreaterThan30);



console.log("QUIZ")
const number = [2, 4, 6, 8, 10];
const result3 = number.findIndex(n => n === 8);
console.log(result3)



// Which of the following methods checks if all elements in the array are truthy?
// The correct answer is :every



// Which of the following methods returns a new array with elements that satisfy the provided condition?
// The correct answer is: filter



// Which of the following methods returns a single value after iterating through all elements in the array?
// The correct answer is: reduce



// Which of the following statements about the includes() method is true?
// The correct answer is: It can search for multiple elements at once.
