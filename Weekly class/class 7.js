//--------------------------Push-------------------------------
let dailyActivities1 = ['eat', 'sleep'];

// add an element at the end
dailyActivities1.push('exercise');

//add an element at the start
dailyActivities1.unshift('work'); 

console.log(dailyActivities1);

dailyActivities1.shift();
console.log(dailyActivities1);

// this will add the new element 'exercise' at the 2 index
dailyActivities1[2] = 'enjoy';

// this will add the new element 'exercise' at the 3 index
dailyActivities1[3] = 'walking';

console.log(dailyActivities1);

//--------------------------Pop-------------------------------
let dailyActivities2 = ['work', 'eat', 'sleep', 'exercise'];

// remove the last element
dailyActivities2.pop();
console.log(dailyActivities2); 

// remove the last element from ['work', 'eat', 'sleep']
const removedElement = dailyActivities2.pop();

//get removed element
console.log(removedElement); 
console.log(dailyActivities2);

// remove the first element
dailyActivities2.shift();
console.log(dailyActivities2);

// this gives the total number of elements in an array
console.log(dailyActivities2.length);






//-----------------------------Example: JavaScript Array Methods-------------------------------

console.log("JavaScript Array Methods")

let dailyActivities = ['sleep', 'work', 'exercise']
let newRoutine = ['eat'];

// sorting elements in the alphabetical order
dailyActivities.sort();
console.log(dailyActivities); // ['exercise', 'sleep', 'work']

//finding the index position of string
const position = dailyActivities.indexOf('work');
console.log(position); // 2

// slicing the array elements
const newDailyActivities = dailyActivities.slice(1);
console.log(newDailyActivities); // [ 'sleep', 'work']

// concatenating two arrays
const routine = dailyActivities.concat(newRoutine);
console.log(routine); // ["exercise", "sleep", "work", "eat"]

// const y = dailyActivities.findIndex("sleep");
// console.log(y);






// ------------Example 2------------------------//
console.log('prices examples')
const prices = [100, 210, 230, 102, 23]; 

const tt = function (tax) { 
  this.tax = tax; // storing the value of tax

  this.withTax = function (arr){
  let output = []; 
  arr.forEach(function (elem) {         // array iterating using the forEach loop
  
  let withTax = (this.tax/100) * elem + elem;   // formaula for tax calculation
  output.push(withTax);
  }, this); 
  return output; 
  } ; 
}; 

const gst5 = new tt(5); 
const gst18 = new tt(18); 

console.log(gst5.withTax(prices));  //returning the output array after 5% tax added
console.log(gst18.withTax(prices)); //returning the output array after 18% tax added




//------------ Example-2 : array of Objects ---------//

let students = [
  {name: "Tarun", age: 25, city:"Delhi"},
  {name: "Varun", age: 23, city:"Kolkata"},
  {name: "Ramesh", age: 22, city:"Bangore"},
  {name: "Kishen", age: 23, city:"Delhi"}
]

function calc(obj,prop){
  return obj.reduce(function (acc,item){

    let key = item[prop]

     if(!acc[key])
     {
       acc[key] = []
     }
     acc[key].push(item)

     return acc;
  },{})
}

let t = calc(students,'city');
console.log(t)


const numbers = [1, 2, 3, 4, 5, 10, 9, 14];

// using a for loop
let answer1;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10){
    answer1 = numbers[i];
    break;
  }
}

console.log(answer1); // 13

// using find
const answer = numbers.find( number => number > 10);
console.log(answer);

//-----------------------Example 2:----------------------//
var users = [
 { loginName: 'Howard',age:34 },
 { loginName: 'Robin',age:25 },
 { loginName: 'Fred',age:56 },
 { loginName: 'Robin',age:24 }
];

var user = users.find(function(user){
 return user.loginName === 'Robin';
});

console.log(user);















const products = [
    {pname: "perfume", price: 300},
    {pname: "earphone", price: 100},
    {pname: "pen drive", price: 400},
    {pname: "mouse", price: 600},
    {pname: "pen", price: 50},
    {pname: "pencil", price: 20}
];

const result =  products.filter(product => product.price > 100);
console.log(result);

const sale = result.map(p => {
    return `the ${p.pname} is ${p.price/2} Rs`;
});

console.log(sale);


