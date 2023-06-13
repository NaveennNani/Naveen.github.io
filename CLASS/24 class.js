// Numbers
console.log("Converting and Checking Numeric Values in JavaScript")
console.log(23 === 23.0);

// Converting and Checking Numeric Values in JavaScript
// Base 10 0 - 9 1/10 = 0.1 3/10 = 3.33333
// Binary Base 2 0 1
console.log(0.1 +0.2) // 0.3
console.log(0.1 + 0.2 === 0.3) //

//Conversion
console.log("This is a string");
console.log(Number(23));
console.log(+'23');


//Parsing
console.log(Number.parseInt('25px',10)); 
console.log(Number.parseInt('e89',10));

// 2.5rem
console.log(Number.parseInt('2.5rem'));
console.log(Number.parseFloat(' 2.5rem'));

// console.log(parseFloat("2.5rem"))

//Check ifvalue is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20x'));
console.log(Number.isNaN(23/0));

console.log(Number.isFinite (20)); 
console.log(Number.isFinite ('20'));
console.log(Number.isFinite (+'20x'));
console.log(Number.isFinite (23/0));

console.log(Number.isInteger (23));
console.log(Number.isInteger (23.0));
console.log(Number.isInteger (23/0));


// Which functions are used to check whether a given value is a valid number in JavaScript?
// The correct answer is: isNaN()

// Which functions are used to parse a string and return an integer value in JavaScript?
// The correct answer is: parseInt()

// Which of the following functions is used to check whether a given number is a finite number or not in JavaScript?
// The correct answer is: isFinite()

// Which of the following functions is used to parse a string and return a floating-point number in JavaScript?
// The correct answer is: parseFloat()


// Math and Rounding
console.log("math and rounding")
console.log(Math.sqrt(25));
console.log(25 ** (1/2));
console.log(8 ** (1/3));

console.log(Math.max(4,12,80,53));
console.log(Math.max(4,12,'80',53));
console.log(Math.max(4,12, '80px',53));

console.log(Math.min(8,19,3,90));
console.log(Math.PI);
console.log(Math.PI * Number.parseFloat('20px') ** 2)


console.log(Math.random());
console.log(Math. trunc (Math.random() * 6)+1);

const randomNum = (min, max) => 
Math.trunc (Math.random() * (max-min)+1)+ min;
console.log(randomNum (10,20));


//Rounding
console.log(Math.round (23.3))
console.log(Math.round(23.9)) 
console.log(Math.round(14.2))

console.log(Math.ceil(23.3))
console.log(Math.ceil(23.9))

console.log(Math.floor(23.3))
console.log(Math.floor(23.9))

console.log(Math. trunc(23.9))
console.log(Math. trunc (45.9231232))

//Rounding Decimals
console.log("Decimal Rounding")
console.log((2.7).toFixed(0))
console.log((2.7).toFixed(3))
console.log((2.3453).toFixed(2))
console.log(+(2.3453).toFixed(2))


// Which of the following functions is used to find the maximum value in a set of numbers in JavaScript?
// Math.max()

// Which of the following functions is used to find the minimum value in a set of numbers in JavaScript?
// Math.min()

// Which of the following functions is used to find the square root of a number in JavaScript?
// Math.sqrt()

// Which of the following operators performs exponentiation in JavaScript?
// **


// Getting Remainders with the Modulo Operator in JavaScript
// Remander Operator
console.log("Getting Remainders with the Modulo Operator in JavaScript")
console.log("remainder operator")
console.log(5/2);
console.log(4/2);
console.log(5%2); // 5 = 2*2 + 1
console.log(8%3) // 8 = 3*2 + 2
console.log(7%2) // 7 = 3*2 + 1
console.log(6%2); // Even console.log(9%2); // ODD
const isEven = n => n%2
console.log(isEven (8))
console.log(isEven (213))
console.log(isEven (578))

console.log("QUIZ")
console.log(-10 % 3)


// Using Numeric Separators for Readability in JavaScript
//Numeric Operator

console.log("Numeric Operator")
const diameter = 246_456_000_000; 
console.log(diameter);
const price = 349_99; 
console.log(price);
const transferFee = 15_99;
const transferFee2 = 1_599;
const PI = 3.1415; 
console.log(PI)
console.log(Number ('23000'))
console.log(parseInt('230_00'))


// Working with Big Numbers using BigInt in JavaScript
// Bigint Numbers
console.log(" Big INt NUmber")
console.log(2**53 -1);
console.log(Number.MAX_SAFE_INTEGER) 
console.log(2**53 +1);
console.log(2**53 +2); console.log(2**53 +3);
console.log(2**53 +4);
console.log(2**53 +5);
console.log(278234876283746827634862834682736487n); 
console.log(BigInt(278234876));
console.log(3000 + 1000);
console.log(234324234234234345345n * 10000n)
const huge = 45678023839720742397n; 
const num = 23;

// console.log(huge num)
console.log(20n > 15);
console.log(20n === 20); 
console.log(typeof 20);
console.log(typeof 20);
console.log(20n == 20);


//division
console.log(11n/3n);
console.log(11/3);


//Creating and Manipulating Dates in JavaScript

console.log("Creating and Manipulating Dates in JavaScript");
const now = new Date();
console.log(now);
console.log(new Date('Aug 02 2020 18:15:40'));
console.log(new Date('December 24, 2015'));
console.log(new Date(2028, 10, 19, 15, 23,5));
console.log(new Date(2028, 10,33));
console.log(new Date(0));
console.log(new Date(3* 24 * 60 *60* 1000))


//Working with dates 
console.log("Working with dates ")
const future = new Date(2028, 10, 19, 15,45); 
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());



// In JavaScript, which month is represented by the number 0?
// The correct answer is: January

// What does new Date(0) represent in JavaScript?
// The correct answer is: january 1, 1970

// What method can be used to get the full year from a Date object in JavaScript?
// The correct answer is: getFullYear()

// Which of the following creates a new Date object in JavaScript?
// The correct answer is: new Date()


console.log("MODULE 24")

// What is the result of BigInt(123) in JavaScript?
// The correct answer is: 123n

// What method can be used to get the day of the week from a Date object in JavaScript?
// The correct answer is: getDay()

// Which functions are used to concatenate two or more strings in JavaScript?
// The correct answer is: concat()

// Which functions are used to round down to the nearest integer in JavaScript?
// The correct answer is: Math.floor()

// Which functions are used to round to the nearest integer in JavaScript?
// The correct answer is: Math.round()

// Which functions are used to round up to the nearest integer in JavaScript?
// The correct answer is: Math.ceil()

// Which of the following functions is used to format a number with a specific number of decimal places in JavaScript?
// The correct answer is: Math.toFixed()

// Which of the following functions is used to generate a random number between 0 and 1 in JavaScript?
// The correct answer is: Math.random()

// Which of the following operators can convert a string to a number in JavaScript?
// The correct answer is: +

// Which of the following operators converts a number to a string in JavaScript?
// The correct answer is: +