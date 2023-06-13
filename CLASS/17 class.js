// Programming Languages types
// interpreter |  compiler  | Just in time
// Js: dynamically typed, loosely packed and jit , object based programming


// JS engine and runtime
// JS --> parse it --> Abstract syntax tree --> interpreter (ignitor) --> 
// optimissing compiler (turbo fan) --> machine code --> Bytecode


// What are the two parts of the Global Execution Context(GEC)?
// Environment variable and Thread of Execution


//What are the two types of Execution contexts?
// Global Execution Context(GEC) and Functional Execution Context(FEC)


// Execution contexts and call stack
// 1) Global Execution Context (GEC)  --> memory & Execution
// 2) function Execution (FEC) --> memory & execution



var a = 'javascript'
// Scopes
// Global Scope --> variable or a function availabe throught the code
// access or modified anywhere in the code

// Functional or Local scope --> only defined in the function()
function b(){
  var c = 'python'
  console.log(c)
}
b()

// Block scope --> const and let allows only {}
{
  const c =5667
  console.log(c)
}


// scope chaining
var num = 45
function outer() {
  function inner(){
    console.log(num)
  }
  inner()
}
outer()


// Hoisting: variables and functions in runtime moves to top of the scope
// hositing data declaration : let, const and var

// temporary dezd zone: a block of code where const and let cannot be accessed untill intialised




var employeeId = '1234abe';
(function() {
console.log(employeeId);
var employeeId = '122345';
})()

  

var x = 10;
function test(){
  var x = 20;
}
test();
console.log(x);


// this keyword: always hold reference to a single object : definning current execution
// this keyword also refer to global object | window


const lang = "python"
const obj1 = {
    lang: "javascript",
    next: function(){
      console.log(this.lang)
    }
}
obj1.next()


console.log(this==window)


function d(){
  this.val = 'king'
  // val overher is having functional scope
  // this.val it gets global scope and can be accessed anhywhere
}
d()
console.log(val)


// regular function and arrow function
// functions in js are first class


// regular functions are hosted whereas arrow functions are not
// this.keyword wont be working in fat arrow function
function p(){
  console.log('Regular funjction')
}
p()


const q = function(){
  console.log('variable | Local')
}
q()


const r = () => {
  console.log("Fat arrow function")
}
r()



console.log('QUIZ')
RegularFunc()
// FatArrowFunc()    
function RegularFunc () {
  console.log("inside Regular function")
}
var FatArrowFunc = () =>{
  console.log("inside FatArrowFunc function")
}



let mobile = "Samsung"
let newMobile = mobile;
mobile = "Oneplus"
console.log(mobile);
console.log(newMobile);


//Primitive vs. Reference Types in JavaScript
// primitive: number, string, booleans, null symbol and undefined 
let s=23
let t=s
s=86
console.log(s,t)




// non-primitive/object based reference type: objects, functions, date, array
const obj2 = {
  name: 'java'
}
const obj3 = obj2
obj2.name = 'python'
console.log(obj2,obj3)












      