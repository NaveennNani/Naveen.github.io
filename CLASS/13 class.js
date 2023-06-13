                     // Data Type Conversion examples

// number (numeric string used with - , / , * , % results number type)
// string (numeric string used with + gives string type)

var a =  10 % '5';
   console.log(a)
   console.log(typeof a);

var b =  10 + '5';
   console.log(typeof b);
   console.log(b)


// In JavaScript programming language, if a variable is not assigned any value then it takes undefined as its value.
//  Statement-2: All the values in JavaScript programming language are primitive and Non-primitive types.


var message
   // console.log("Message: " + message)   //Type Error
   // console.log("wishes: " + hello);

                                 // Truthy Anf Falsy Statements

// falsy -> false, null, undefined 0, -0, On, NaN 
// truthy -> anything that is not mentioned above

if(false){                       //Nothing Happens
   console.log("Hello")
}  
  
//  == --> Check for Condition irrespective to datatype and Coercion[Changing the datatype]
// In JavaScript programming language lose equal to(==) operator compares two values for equality but doesn't compare types of values.

// === --> Check for Condition and also Checks the datatype
// In JavaScript programming language strict equal to(===) operator compares two values for equality including types of values.


if(4==='4'){
   console.log("Print if statement")
} else {
  console.log("Print else statement")
}



var num1 = 1;
var num2 ='1';
var value = num2 == num1;
var value2 = num1 === num2;
   console.log(value);
   console.log(value2);   



let value1 = "22";
if(value1 === 22) {
   console.log(" '22' is not equal to 22")
} else if (parseInt(value1) === 22) {
   console.log("22 is equal to 22")
} else {
   console.log("parseInt converts a string to number")
}   


// Logical Operators [ && AND,   || OR ,  ! NOT EQUAL TO]

// Switch Case statements


var a = 1;
switch (a) {
case 1:
case 2:
case 3:console.log("case 1, 2, 3 executed")
   break;
case 4:console.log("case 4 executed")
   break;
default:
   console.log("default case executed")
}



var paint = "blue";
switch(paint) {
case "blue":
   console.log("blue");
case "green":
   console.log("green");
   break;
case "red":
   console.log("red");     
}


// Statements and Expressions
// What is a block of statement in JavaScript? --> A block statement is used to group zero or more statements
// A group of expressions is results as a statement


console.log(0 == false)


// Ternary Operator --> Which one of the following is the ternary operator? --> ?:
// It is a replacement of if/Else Statements



const num=11;
(num%2==0) ? console.log('even') : console.log("odd")



let x = 25;
   x = 26;
   console.log(x);
   // const y = 15;                    // Type Error
   // y = 16;
   // console.log(y);



var i = 101;
switch (i) {
case 0:
      console.log("i is zero.");
      break;
case 1:
      console.log("i is one.");
      break;
case 2:
      console.log("i is two.");
      break;
default:
      console.log("i is greater than 100.");
}   



var message;
console.log("Hello, Good morning!");



// let messag = "Hello Developer"     //Type Error
// let messag = "Welcome"
// console.log(messag)


let marks = "68";
let totalMarks = parseInt(marks) + 4;
console.log(totalMarks);



// Which of the following is the valid syntax?   -->  condition ? exprIfTrue : exprIfFalse
