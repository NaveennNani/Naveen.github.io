// The call() and apply() Methods in JavaScript
console.log("The call() and apply() Methods in JavaScript")


const vistara = {
    airline : "Tata Vistara",
    airlineCode : "TV",
    bookings: [],
    book(flightNum, name) {
       console.log(`${name} booked a flight on ${this.airline}. 
       Flight is ${this.airlineCode} ${flightNum}`)
       this.bookings.push({flight:`${this.airlineCode}${flightNum}`,name:`${name}`})
    }
}   
    
vistara.book(456,"Arjit Verma")
vistara.book(223,"Rishabh Singh")
console.log(vistara)



const spiceJet = {
    airline : "Spice Jet", 
    airlineCode: "SJ",
    bookings: []
}
const book = vistara.book;
// Doest not works 
// book (23, "Rajesh Singh")
// Call Method
book.call(spiceJet, 78, "Rishabh Singh"); 
console.log(spiceJet)
book.call(vistara,923, "Sanjay Kumar");
console.log(vistara)    
    



const indigo = {
    airline: "Indigo Airlines",
    airlineCode:"IA",
    bookings: []
}
book.call(indigo, 1234, "Shreya Singh");
//Apply Method
const passengerData = [528, "Ketan Kumar"]; 
book.apply(indigo, passengerData); 
console.log(indigo);
book.call(vistara,...passengerData)
console.log(vistara)



console.log("QUIZ")
const person = {
    firstName:"Virendra",
    lastName: "Shehwag",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }


}
const person1 = {
    firstName:"Hardik",
    lastName: "Pandya",
}
console.log(person.fullName.call(person));            



// bind method
// The bind() method allows an object to borrow a method from another object without copying.
console.log("Bind Method")

const bookSJ = book.bind(spiceJet);
const bookIG = book.bind(indigo);

// bookTV (9289, "Rishi Pandey"); 
// bookTV (9232, "Neeraj ");
bookSJ (231, "John");
bookIG (1232, "James");

console.log(indigo)
console.log(spiceJet)

const bookTV741 = book.bind(vistara,741)
bookTV741("Ravi Gupta")
console.log(vistara)




//DOM
vistara.planes = 300;
vistara.buyPlanes = function(){
    console.log(this)
    this.planes++;
    console.log(this.planes)
} 

document.querySelector('.buy')
.addEventListener('click', vistara.buyPlanes.bind(vistara));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(.1,200))


const addGST = addTax.bind(null,.18); 
console.log(addGST (100))



const addTaxRate = (rate) => (value) =>  value + value * rate ;
const addGST2 = addTaxRate(.18)
console.log(addGST2(100))
// Which method returns a copy of the given function with the specified this value, and initial arguments (if provided)



// Immediately Invoked Function Expressions (IIFE) in JavaScript
console.log("Immediately Invoked Function Expressions (IIFE) in JavaScript")

const runOnce = function(){ 
    console.log("I will only run once"); 
}
runOnce()


// (function(){
//     console.log('This will never run again')
// })()

// (()=> console.log('This will never run again'))()

{
    const isPrivate = 34;
    var notPrivate = 12;
}
console.log(notPrivate);



console.log("QUIZ")
function b(x, y, z) { 
    console.log(x); 
    console.log(y); 
    console.log(z); 
}
b(90, 81); 


console.log("QUIZ")
let add = function(a, b) {
    return a + b;
};
console.log(add(7, 2));




// Closures in JavaScript
console.log("Closures in JavaScript")
    

const secureBooking = function(){
    let passengerCount = 0;

    return function(){
    passengerCount ++;
    console.log(`${passengerCount} Passengers`);
    }
}
    

const books = secureBooking();

books();
books();
books();


const greetings = "Good Morning";
const greets = function (){
    const greetings = "Good Afternoon";

    return function(){
        console.log(greetings);
    }
}

const greetFunction = greets();
greetFunction();


function nums(a, b, c = 3) {
    console.log(a);
    console.log(b);
    console.log(c);
}
nums(5);