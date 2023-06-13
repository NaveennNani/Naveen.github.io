'use strict'
//Default Parameters
//What are default parameters? -->Parameters for function giving with =, introduced in ES6.
// They are given with = in the parameter and take the value if no arguments are passed.
console.log("Lets learn functions in detail")


const booking = []
const createBooking =
function (flightNum, numPassengers = 1, price = 199*numPassengers){

const bookings = {
    flightNum,
    numPassengers,
    price
}
booking.push(bookings)
console.log(booking)
}


createBooking('PY647');
createBooking('Py647',4);
createBooking('LH123',6)


console.log("QUIZ")
const isEqual = (num1, num2) => {
    console.log(num1)
    console.log(num2)
    return num1 === num2;
}
console.log(isEqual(10));


console.log("QUIZ")
const complexFn = (num1, num2=2, num3=22*num2) => {
    console.log(num1)
    console.log(num2)
    console.log(num3)
}
complexFn(10, 12);




//Passing Arguments to JavaScript Functions: Value vs. Reference
// value vs reference
console.log("Passing Arguments to JavaScript Functions: Value vs. Reference")

const flight = "LH732";
const arjit = {
    name: "Arjit Verma", 
    passportNo: 28972348924
}
const checkIn = function (flightNum, passenger){ 
    flightNum = "LJ999"; 
    passenger.name = "Mr. " + passenger.name;
// if(passenger.passportNo === 28972348924){ 
//     alert("Checked In") 
// }else{
//     alert("Wrong passport ✖️")
//     }
}

checkIn(flight, arjit);
console.log(flight);
console.log(arjit);   





const newPassport = function (person) { 
// The Math.trunc() static method returns the integer part of a number by removing any fractional digits.
// The Math.round() static method returns the value of a number rounded to the nearest integer.
    person.passportNo = Math.trunc(Math.random() * 100000000000)
}
newPassport (arjit);
console.log("user is ", arjit)
checkIn(flight,arjit);



console.log("QUIZ")
const myArray = [ 'Odin', 'School' ]
    myArray[0] = 'ODIN';
    console.log(myArray);


// function calling function
console.log("function calling function")


const oneWord = function(str){
    return str.replace(/ /g,'').toLowerCase();
}
console.log(oneWord("My name is arjit verma"))


const upperFirstWord = function(str){
const [first,...other] = str.split(' '); 
return [first.toUpperCase(),...other].join(' ');
}
console.log(upperFirstWord("my name is arjit verma"))

//Higher Order Function
console.log("Higher Order Function")
const transformer = function(str, fn) {
console.log(`Original String is : ${str}`)
console.log(`Transformed String : ${fn(str)}`);
console.log(`Transformed by the function: ${fn.name}`)
}
transformer("Javscript is the best!", upperFirstWord);
transformer("Javascript is the best", oneWord)

    

const high5 = function(){
    console.log("high5")
}

document.body.addEventListener('click',high5)




console.log("QUIZ")
function displayGreeting(displayName){
    console.log("Hello");
    displayName();
    console.log("Happy Holi!!");
}
      
displayGreeting(function(){
    console.log("Amitabh")
})


console.log("QUIZ")
function pass() {
    console.log("I passed");
}
function fail() {
    console.log("I failed");
}
function marksResult(passMarks, passResult, failResult) {
    let marks = passMarks;
    if( marks > 35) {
        passResult();
    } else if(marks < 35) {
        failResult();
    }
}
marksResult(36, pass, fail);



console.log("QUIZ")
function driveCar() {
    console.log("Car driving");
}
function driveCarSlowly(drive){
    driveCar();
    drive();
}
driveCarSlowly(driveCar);



// function returning functions
console.log("function returning functions")
const greet = function (greeting) { 
    return function (name){ 
        console.log(`${greeting} ${name}`)
}
}
const greetHey = greet("Hey")
greetHey("Arjit")
greetHey("Rohit")
greet("Hello")("Arjit")


console.log("BY ARROW FUNCTON")
const greetArr = greeting => name => console.log(`${greeting} ${name}`)

greetArr("Howdy!") ("Aman")



console.log("QUIZ")
function outer() {
    return function inner(x) {
     return x ** 5;
  };
} 
 const output = outer();
 console.log(output(2));




console.log("QUIZ")
function func(num1){
	return function(num2) {
		return num1 - num2;
	}
}
console.log( func(1)(2) );



console.log("QUIZ")
function mainfunction() {
    return function() {
   return "I go to the console!";
  };
}
console.log(mainfunction());