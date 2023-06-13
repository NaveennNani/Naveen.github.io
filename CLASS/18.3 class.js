

const restaurant ={
    name: 'Classic Indian',
    location: 'CP, New Delhi, India',
    categories: ['Indian','Chinese','Punjabi','Mexican'],
    starterMenu: ["soup","Fries","Burger","Garlic Bread"],
    mainMenu: ['Dal Makhani','Paneer','Soya Chaap'],
    order:function(starterIndex,mainIndex){
        return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
    },
    deliverOrder:function({time,address,mainIndex,starterIndex}){
        console.log(`Order Placed! For ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}. To be delivered to ${address} at ${time} `)
    },
    openingHours:{
        thur:{
            open:'10AM',
            close:'12AM'
        },
        fri:{
            open:'10AM',
            close:'12AM' 
        },
        sat:{
            open:'10AM',
            close:'4PM' 
        }
    },
    orderPasta:function(ing1,ing2,ing3){
        console.log(`here is your pasta ${ing1},${ing2} and ${ing3}`)
    },
    orderpizza:function(mainingredient,...otheringredients){
    console.log(mainingredient)
    console.log(otheringredients)
}
}

// rest operartor
console.log("REST OPERATOR")
const [a,b,...others] = [1,2,3,4,5,6]
console.log(a, b, others)



const [dal, ,chaap, ...otherItems] = [...restaurant.mainMenu,...restaurant.starterMenu,];
console.log(dal,chaap,otherItems)


const {sat,...weekdays} = restaurant.openingHours;
console.log(weekdays)
console.log(sat)


//Functions
function addNums(...numbers){
    console.log(numbers)
    let sum = 0;
    for(let i=0;i<numbers.length;i++) sum+=numbers[i]
    console.log(sum)
}

addNums(2,5)
addNums(2,4,6,8,9)
addNums(2,4,9,3,2,5,3,6,4)
const x =[4,5,8];
addNums(...x);

restaurant.orderpizza("mushroom", "onion", "banana", "fish")

//The spread operator in JavaScript expands values in arrays and strings into individual elements whereas,the rest operator puts the values of user-specified data into a JavaScript array.
//Both spread and rest operators have the same syntax in JavaScript but they perform different functionalities.


console.log("QUIZ")
let days = ["Satu", "Sund", "Mon", "Tue", "Wed", "Thu", "Fri"];
const [satu,sund, ,...holidays] = days;
console.log([...holidays]);



// && and || OPERATOR
// || operator --> it returns first truthy value
console.log("|| operator")
console.log(4 || 'naveen');
console.log('' || 'naveen');
console.log(true || 'naveen');
console.log(undefined || 'naveen');
console.log(undefined || 0 || null || 5 || 'naveen' );

restaurant.numGuests = 0;
const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests)


const guests1 = restaurant.numGuests || 10;
console.log(guests1)



// && --> it returns first falsy value
console.log('&& operator')
console.log(4 && 'naveen');
console.log('' && 'naveen');
console.log(true && 'naveen');
console.log(undefined && 'naveen');
console.log(undefined && 0 && null && 5 && 'naveen' );


if(restaurant.orderpizza){
    restaurant.orderpizza('mushrooms','onions')
}

restaurant.orderpizza && restaurant.orderpizza("mushrooms","onions")


// The Nullish Coalescing Operator (??) in JavaScript  
console.log('The Nullish Coalescing Operator (??) in JavaScript')

//null or undefined
const Guests3 = restaurant.numGuests ?? 10;
console.log(Guests3)


//Logical Assignment Operators in JavaScript
console.log('Logical Assignment Operators in JavaScript')
//or Assingnment operator

const rest1 ={
    name:'Truly Indian',
    numGuests:20
}

const rest2 = {
    name: "Indian Palace",
    owner: "Vikas Khanna"
}

console.log('or Assingnment operator')
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ??=10;
rest2.numGuests ??=10;


// AND Assingnment operator
console.log('and Assingnment operator')
rest1.owner &&= 'ANON';
rest2.owner &&= 'ANON';

console.log(rest1);
console.log(rest2);



console.log("QUIZ")
const gest1 = {
        name:"Truly Indian",
        numGuests: 0
    }
    const gest2 = {
        name: "Indian Palace",
        owner: "Vikas Khanna"
    }
    gest1.numGuests ??= 4;
    console.log(gest1);
    gest1.numGuests ||= 1;
    console.log(gest1);


//Looping Arrays: The for-of Loop
console.log("Looping Arrays: The for-of Loop")    

const menu = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(menu)

for(const item of menu){
    console.log(item)
}



console.log([...menu.entries()]);

for(const item of menu.entries()){
    console.log(item)
}

for(const item of menu.entries()){
    console.log(`${item[0]} : ${item[1]}`)
}

console.log('another method')
for(const [i,el] of menu.entries()){
    console.log(`${i + 1} : ${el}`)
}


console.log("QUIZ")
let alphabets = ["a", "e", "b", "i", "c", "o", "d", "u"];
let vowels = [];
let consonants = [];

for(let i of alphabets) {
   if(i === "a") {
       vowels.push(i);
     } else if (i === "e") {
         vowels.push(i);
     } else if(i === "i") {
         vowels.push(i);
     } else if(i === "o") {
         vowels.push(i);
     } else if(i === "u") {
         vowels.push(i);
     } else {
        consonants.push(i);
     }
 }
console.log(vowels);
console.log(consonants);


//The for...in loop is used to iterate through the keys of an object.

//Iterating Over Arrays Using the for-of Loop in JavaScript

console.log("QUIZ")
const obj1 = { a: 1, j: 10, o: 15 },
obj2 = { ...obj1, t: 20 };
console.log(obj2);


console.log("QUIZ")
var person = {
    name: 'Jack',
    age: 34
}
let key = "name";
console.log(person.key || 'Jack');



console.log("QUIZ")
const myArray = ["good morning", "good afternoon", "good evening", "good night"];
   const [morning,,,,afternoon] = myArray;
   console.log(morning,afternoon);
