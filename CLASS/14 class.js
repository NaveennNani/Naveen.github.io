// use strict does not allow any Unofficial codes and it converts the javascript lossely
// packed programming language to moderate programming language 
"use strict"


// How to Call a Function?

function a() {
    console.log("i have called function")
}
a()  // Call a function | invocation


//Function Declarations

adds(12,23)   // function Declarations already have name can be invacted anytime anywhere 
adds(23,67)   // it is not possible with function expressions
function adds(a,b) {  // Parameters
    console.log(a+b)
}
adds(2,4);  // Arguments



function b(){
    return 1+4
}
var res = b()  //invocate
console.log(res)


// Understanding Function Declarations vs Expressions in JavaScript
// Function Expressions

const c = function(){
    console.log("I am Function C")
}    // c() cannot be called before function because it is function expression only called after declare
c()  // but can be called before for function declaration 
 


// Arrow Functions

const d = () =>{
    console.log("i am function d")
}
d()


//Functions Calling Other Functions in JavaScript


function e(a,b,c){
    return a+b+c
}

function f(){
    const val = e(1,2,3)
    console.log(val)
}
f()


function g(){
    return function(){
        console.log("inner Function")
    }
}
const inner = g();
inner();
console.log(typeof(g))



function outer() {
    const a = 10;
    const b = 15;
    const result = inner();
    function inner() {
      return a + b;
    }
   return result;
 }
 console.log(outer());


// Introduction to Arrays in JavaScript {Arrays --> [LISTS]}
// Arrays = collection of data and different types of data types also
// An Array is an object dataype
// Array : dynamic lenght, object, mutable


// 1.
const arr = [12,56,43, 'javascript', 'python', true]; 
console.log(arr);
console.log(typeof(arr))

// 2.
const ar1=[];
ar1[0]=113;
ar1[1]="java"
console.log(ar1)

// 3. using constructor 
const ar2 = new Array(45,90);
console.log(ar2)



// Basic Array Operations (Methods) Part- 1 in JavaScript

//join : Array to string
//The Array method join creates and returns a new string by concatenating all of the items in the array, separated by commas or a specified separator string.
//The Array method join returns an item without using the specified separator if the array has only one item.
const arrstr = ['I','Love','India']
console.log(arrstr.join(' '))

//tostring : array to string
console.log(arrstr.toString(' '))

//pop: it deletes last element in array
arrstr.pop()
console.log(arrstr)

//push: it adds last element in array
arrstr.push('python')
console.log(arrstr)

//shift : removes first element in array
arrstr.shift()
console.log(arrstr)

//unshift : adds first element in array
arrstr.unshift('We')
console.log(arrstr)
console.log(arrstr.join(' '))

//concat : to join two different arrays
const h = [10,43,6,64,90,2]
const i = [3,64,28,76]
console.log(h.concat(i))

//slice : to removes indexes before specified (work with removed elements)
console.log(h.slice(1))
console.log(h.slice(3))
console.log(h.slice(1,5)) // last number is excluded

//splice : (index,delete,add those elements) we can also add and delete elements
// it also changes the array
h.splice(1,3,34,54,56,77,54);
console.log(h)

//sort : it arranged in a incremental order of alphabets
const j = ['a','d','z','x','q']
console.log(j.sort())

//reverse : it reverse the array
const k = ['s',1,4,'r','d']
console.log(k.reverse())

//lenght : it shows lenght number
console.log(k.length)



//MODULE
//Data Structures allow us to store and organize data efficiently.
//The array holds an ordered sequence of items.


function myFunction(x, y = 10) {
    return x + y;
}
myFunction(5);



let colors = ['Red', 'Green', 'Blue', 'Yellow'];
console.log(colors[3]);
colors[3] = 'Black';
console.log(colors[3]);


let myArray = [1, 2, 3, 4];
myArray.splice(0, 4, "a", "b", "c", "d");
console.log(myArray);