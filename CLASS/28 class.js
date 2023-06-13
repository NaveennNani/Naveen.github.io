// Object Oriented Programming with JS Part- 1 [DAY 28]

// What is a class?
// Blueprint to create new objects.

// What is OOP?
// They are a group of programming languages based on Objects, Objects will contain data as well as methods, Objects are building blocks for the application.





// OOPS Concepts in JavaScript

// The three ways to implement prototypal inheritance in JavaScript?
// Constructor functions, ES6 Classes, Object.create()

// What is prototypal inheritance?
// Prototype has behavior accessible by all objects of that prototype.

// Which of the below option contains all OOP principles?
// Abstraction, Encapsulation, Inheritance, Polymorphism





// Constructor Functions and the "new" Operator

// const Person = function (firstname, lastname, birthYear){
     // console.log(this)
    //Instance Properties
    // this.firstname = firstname;
    // this.lastname = lastname;
    // this.birthYear = birthYear;

    // // not do this
    // this.calcAge = function() {
    // console.log(2023 - this.birthYear)
    // }
// }


// const arjit = new Person('Arjit', 'verma', 1991) 
// console.log(arjit);

    // 1: new {} is created
    //2: function is called and 'this' = {}
    //3: {} linked to its prototype
    // 4: function will automatically return {}

// const ryan = new Person('Ryan', 'James', 2003); 
// console.log(ryan);

// const riya = new Person('Riya', 'Singh', 1996)
// console.log(riya);
    
// const sam = "Sam";

// riya.calcAge()
    
// console.log(ryan instanceof Person);  
// console.log(sam instanceof Person);

// Can we use arrow functions to create Constructor functions?
// No arrow function cannot be used

// What is a constructor function?
// A JavaScript function that we initiate using the new keyword.

// const Person = function(name, age) { _____.name = name; ____.age = age; }
// const person1 = ____ Person('Nabendu', 40);
// this, this, new





// Understanding Prototypes

// console.log(Person.prototype)

// Person.prototype.calcAge = function(){
//     console.log(2023 - this.birthYear)
// }

// ryan.calcAge();
// riya.calcAge();

// console.log(ryan.__proto__);
// console.log(ryan.__proto__ === Person.prototype)
// console.log(riya.__proto__ === Person.prototype);

// Person.prototype.species = "Homo Sapiens"; 
// console.log(ryan)
// console.log(ryan.species);

// console.log(ryan.hasOwnProperty('firstname')) 
// console.log(ryan.hasOwnProperty('species'))

// const Person = function(name, birthYear) { this.name = name; this.age = age; }
// const person1 = new Person('Nabendu', 1982); 
// this.calcAge = function(){ console.log(2023 - birthYear) }

// What is the drawback to create a function like calcAge inside a constructor function, as in the previous example?
// Multiple copies of the function will be created when instances are created.

// const Person = function(name, birthYear) { this.name = name; this.age = age; }
// const person1 = new Person('Nabendu', 1982); 
// Person.prototype.calcAge = function(){ console.log(2023 - this.birthYear) }





// Prototypal Inheritance and the Prototype Chain

// What does the new operator do?
// It creates an empty object, The This keyword is set to the new object.

// What is a Prototype chain?
// All the objects from the Constructor function will have access to the prototype property of the constructor function

// const Person = function(name, age) { this.name = name; this.age = age; }
// const person1 = new Person('Nabendu', 40);
// Person.prototype.calcAge = function(){ console.log(2023 - birthYear) }
// console.log(person1.______ === Person.______)
// __proto__, prototype





// Prototypal Inheritance with Built-In Objects

// console.log(ryan)
// console.log(ryan.__Proto__)
// console.log(ryan.__Proto__,__proto__)

// const arr = [1,2,3,4,5,6,7,7,7]

// console.log(arr.__proto__)
// console.log(arr.__proto__ === Array.prototype)

// console.log(arr.__proto__.__proto__)
// console.log(arr.__proto__.__proto__.__proto__)

// Array.prototype.unique = function(){
//     return [...new Set(this)]
// }

// console.log(arr.unique())

// console.dir(x => x+1)

// const h1 = document.querySelector('h1')
// console.dir(h1)


// const arr = [3, 6, 6, 5, 6, 9, 13, 12, 13];
// console.log(arr.___ === ___.____);
// __proto__, Array, prototype

//  const arr = [3, 6, 6, 5, 6, 9, 13, 12, 13];
// console.log(arr__proto__.__proto__.__proto__);
// null

// const arr = [3, 6, 6, 5, 6, 9, 13, 12, 13];
// Array._proto_.unique = function(){ return [...new Set(this)] }





// Introduction to ES6 Classes

//Class Expression
// const PersonCl = class{
// }

//Class Declaration
// class PersonCl {
//     constructor(fullName,birthYear){
//     this.fullName = fullName;
//     this.birthYear = birthYear
//     }

//     calcAge(){
//         console.log(2023 - this.birthYear)
//     }

//     greet(){
//         console.log("hey naveen")
//     }

//     get age(){
//         return 2023 - this.birthYear
//     }

//     set fullName(name){
//         if(name.includes(' ')) this._fullName = name
//         else alert(`${name} is not a fullname`)
//     }

//     get fullName(){
//         return this._fullName
//     }

//     static sayHello(){
//         console.log('Hey There!🤚')
//     }
// }

// PersonCl.sayHello()
    
// const rohit = new PersonCl('Rohit singh', 1999) 
// console.log(rohit); 
// console.log(rohit.fullName)
    
// console.log(rohit.__proto__)
// console.log(rohit.__proto__ === PersonCl.prototype)

// rohit.calcAge()
// console.log(rohit.age)

// PersonCl.prototype.greet = function(){
//     console.log("hey naveen")
// }

// rohit.greet()
// classes are not hoisted
// classes are also first class citizen in js





// Working with Setters and Getters

//Getter and Setters
// const account = {
//     owner: "Arjit",
//     movements: [200,560,800, 20],
    
//     get latest(){ 
//         return(this.movements.slice(-1).pop())
//     },

//     set latest(mov){
//     this.movements.push(mov); 
//     console.log(this.movements)
//     }
// }
    
// console.log(account)
// console.log(account.latest)
// account.latest = 1200;

// Are Setters and Getters only available in ES6 classes?
// No

// const student = {
//     marks: [67, 77, 88, 99],
//     ____ latest(){
//        return this.marks.slice(-1).pop()
//     }
//    }
//    console.log(student.latest);
// get

// Convert the below code to use getter and setter. Use the getter to return the name.
//   Code -
//   class Person{ constructor(name){ this.name = name; } }
//   const person1 = new Person('Nabendu');
//   console.log(person1.name)
// ANSWER
// class Person{ set name(name){ this._name = name; } get name(){ return this._name }}
// const person1 = new Person();
// person1.name = 'Nabendu'
// console.log(person1.name)





// Understanding Static Methods

// Are static methods allowed only in ES6 classes?
// No





// MODULE 28

// ES6 classes are ____ sugar over ______ functions.
// syntactic, new

// OOP was developed to get rid of _____ code.
// Spaghetti

// What are static methods in JavaScript?
// Methods that belong to the class or constructor function and not to their instances.

// What are the two ways to create a class?
// Class Declaration and Class Expression

// What is the benefit of creating a function from its prototype in the constructor function?
// Single copy of the function will be created when instances are created.

//  const arr = [3, 6, 6, 5, 6, 9, 13, 12, 13];
// console.log(arr.__proto__.___ === ___.prototype);
// __proto__, Object

// const Person = function(name, age) { this.name = name; this.age = age; }
//   const person1 = new Person('Nabendu', 40);
//   const person2 = 'Hari';
//   console.log(person1 ____ Person);
//   console.log(person2 ____ Person);
// instanceof, instanceof, true, false










// DAY 29

// Understanding Object.create()

// const PersonProto = {
//     calcAge() {
//     console.log(2023 - this.birthYear)
//     },

//     init(firstName, birthYear){
//     this.firstName = firstName; 
//     this.birthYear = birthYear;
//     }
// }
    
// const shivam = Object.create(PersonProto);
// console.log(shivam);
    
// shivam.firstName = "Shivam";
// shivam.birthYear = 2000;

// shivam.calcAge();

// console.log(shivam.__proto__ === PersonProto)

// const rohit = Object.create(PersonProto);
// rohit.init("Rohit", 1995);
// console.log(rohit);
// rohit.calcAge()


// What happens if the prototype argument passed to Object.create() is null?
// The new object inherits from the null prototype

// What is the purpose of the Object.create() method in JavaScript?
// To create a new object with the specified prototype object

// Which of the following is the correct syntax for using the Object.create() method to create a new object?
// Object.create(proto, props)





// Inherit "Classes" using: Constructor Functions

//Inheritance in constructor functions
// const Person = function (firstName,birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// }
    

// Person.prototype.calcAge = function(){
// console.log(2023 - this.birthYear)
// }
    
// const ketan = new Person( 'Ketan', 1993);
// console.log(ketan);
// ketan.calcAge()
    
// const Student = function (firstName,birthYear, course) {
//     Person.call(this,firstName,birthYear)
//     this.course = course;
// }

// Student.prototype = Object.create(Person.prototype)

// Student.prototype. introduce = function(){ 
//     console.log(`Hey! I am ${this.firstName} and I study ${this.course}`)
// }
    
// const mohan = new Student ('Mohan', 1998, "BTech In CS");

// mohan.calcAge()
// mohan.introduce()
// console.log(mohan)

// Student.prototype.Constructor = Student
// console.log(mohan instanceof Student)
// console.log(mohan instanceof Person)
// console.log(mohan instanceof Object)


// How do you create an inheritance relationship between two constructor functions in JavaScript?
// By setting the prototype of one constructor function to the other

// What is the purpose of the call() method in JavaScript constructor functions?
// To invoke a constructor function with a specified this value and arguments

// What is the relationship between the prototype property of a constructor function and the instances created from that constructor function?
// The prototype property is a reference to the prototype object of the constructor function





// Inherit "Classes" using: ES Classes

// class StudentCl extends PersonCl {
//     constructor(firstName, birthYear, course) {
//     super (firstName, birthYear)
//     this.course = course;
// }
//     introduce() {
//     console.log(`Hey my name is ${this._fullName} and i study ${this.course}`)
//     }

//     calcAge() {
//     console.log(`I am ${2023 - this.birthYear} years old`)
//     }
// }
    
// const ankit = new StudentCl("Ankit Sharma", 1996, "Computer Science")
// console.log(ankit)
    
// ankit.introduce()
// ankit.calcAge()
// ankit.greet();
    
// const ankit = new StudentCl ("Ankit Sharma", 1996)
//console.log(ankit)


// What is the purpose of the constructor method in an ES6 class?
// To initialize the state of a new instance of the class

// Which keyword is used in ES6 to create a subclass that inherits from a superclass?
// extend

// Which keyword is used to call a method on a superclass from a subclass in ES6?
// super





// Inherit "Classes" using: Object.create()

// const rishi = Object.create(PersonProto);
// rishi.init('Rishi', 1990);
// console.log(rishi) 
// rishi.calcAge()

// const StudentProto= Object.create(PersonProto);
// StudentProto.init = function (firstName,birthYear, course) { 
//     PersonProto.init.call(this, firstName,birthYear); 
//     this.course = course
// }

// StudentProto. introduce = function(){ 
//     console.log(`My name is ${this.firstName} and I study. ${this.course}`)
// }

// const jay = Object.create(StudentProto); 
// jay.init('Jay', 2010, 'Information Technology'); 
// console.log(jay); 
// jay.introduce();


// How does the Object.create() method differ from using the new keyword to create an object from a constructor function?
// Object.create() creates an object with a specified prototype, while new creates an object with a constructor function

// What is the prototype chain in JavaScript?
// A chain of objects that inherit properties and methods from each other

// Which of the following is true about the JavaScript Object.create() method?
// It creates a new object with the specified prototype object and properties





// Another Example of Class Implementation

class Account{
    // public fields
    locale = navigator.language

    // private fields
    #pin;
    #movements = []; 

    constructor(owner, currency, pin){ 
        this.owner = owner;
        this.currency = currency;
        // this. pin = pin;
        this.#pin = pin;
    }
    // Public Interfaces
    
    getPin(){
        console.log(this.#pin)
    }

    deposit(val){
    this.#movements.push(val)
    return this
    } 

    withdraw(val){
    this.deposit (-val)
    return this
    }

    #approveLoan(){
        return true
    }

    requestLoan(val){
        if(this.#approveLoan){
            this.deposit(val)
            return this
        }
    }
}
    
const acc1 = new Account('Arjit', 'INR', 1111);
acc1.deposit(450);
acc1.withdraw(200);
acc1.requestLoan(500);

acc1.getPin()

console.log(acc1);


// How do you define a class attribute in JavaScript?
// By using the "this keyword" inside the class definition

// Which keyword is used in JavaScript to create a new instance of a class?
// new

// Which keyword is used to define a class in JavaScript?
// class





// Encapsulation: Protected Properties and Methods

// Can a protected property or method be accessed from outside the class in JavaScript?
// Yes, they can be accessed directly

// How do you define a protected property in JavaScript?
// By declaring it inside the constructor function

// What is the purpose of using protected properties and methods in JavaScript?
// To make them accessible from outside the class but with restrictions





// Encapsulation: Private Class Fields and Methods

// public Fields
// private fields
// public methods
// private methods


// In JavaScript, how do you access private fields and methods?
// Private fields and methods cannot be accessed from outside the class

// In JavaScript, how do you define a private field?
// By using the # symbol followed by the field name

// In JavaScript, how do you define a private method?
// By using the # symbol followed by the method name





// Method Chaining

// chaining

acc1.deposit(1000).withdraw(200).deposit(250).requestLoan(500)


// What is method chaining in JavaScript?
// It is a technique used to call multiple functions in a single statement.

// Which of the following is a potential disadvantage of method chaining in JavaScript?
// It can make the code harder to read and understand.

// Which of the following is an example of method chaining in JavaScript?
// let result = obj.method1().method2().method3();





// Summary of ES6 Classes

// MODULE DAT 29

// Can the Object.create() method be used to create objects with properties and methods?
// Yes, by passing an object containing the properties and methods as the second argument

// Can you add properties and methods to a prototype object after creating instances inherited from it in JavaScript?
// Yes, changes to the prototype object are reflected in all instances that inherit from it

// Can you use the "extends keyword" to create a subclass that inherits from multiple superclasses in ES6?
// No, ES6 does not support multiple inheritance

// How can you check if an object is an instance of a particular prototype object in JavaScript?
// Using the Object.prototype.isPrototypeOf() method

// In JavaScript, how do you define a public field?
// By using the "this keyword" inside the class definition

// What happens if you define a method with the same name in both a superclass and a subclass in ES6?
// The method in the subclass overrides the method in the superclass

// What happens when you try to access the __proto__ property of an object that has no prototype?
// The __proto__ property is set to undefined

// What is the purpose of the __proto__ property in JavaScript?
// To set the prototype of an object to another object

// Which of the following statements about the __proto__ property is true?
// It is a property of every object in JavaScript except null

// Which of the following statements about the Object.create() method is true?
// It creates a new object with a new prototype objec


