console.log("19.1 Class")
//Maps in JavaScript: Iteration
console.log("Maps in JavaScript: Iteration")


const days = ['mon','tue','wed','thu','fri','sat'];
const openingHours={
    [days[3]]:{
        open:'10AM',
        close:'12AM'
    },
    [days[4]]:{
        open:'10AM',
        close:'12AM' 
    },
    [days[5]]:{
        open:'10AM',
        close:'4PM' 
    }
};



const restaurant ={
    name: 'Classic Indian',
    location: 'CP, New Delhi, India',
    categories: ['Indian','Chinese','Punjabi','Mexican'],
    starterMenu: ["soup","Fries","Burger","Garlic Bread"],
    mainMenu: ['Dal Makhani','Paneer','Soya Chaap'],
    order:function(starterIndex,mainIndex){
        return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
    },
    deliverOrder:function(time,address,mainIndex,starterIndex){
        console.log(`Order Placed! For ${this.starterMenu[starterIndex]} 
        and ${this.mainMenu[mainIndex]}. To be delivered to ${address} at ${time} `)
    },
    openingHours,
} 






const question = new Map([
    ['question', 'What is the best programming language in the world'],
    [1,"C"],
    [2,"java"],
    [3,"Javascript"],
    ["correct", 3],
    [true, "Correct answer"],
    [false,"Try Again"]
])



//Covert an object to a map
console.log('Covert an object to a map')
console.log(Object.entries (openingHours)); 
const hoursMap = new Map (Object.entries (openingHours)); 
console.log(hoursMap);


console.log(question.get('question'))
for (const [key, value] of question){
    if(typeof key==='number') console.log(` Answer ${key}: ${value}`)
}



const answer = 3;
console.log(answer)
console.log(question.get(question.get('correct') === answer))



//Convert map to array;
console.log("Convert map to array")
console.log([...question])
console.log([...question. entries ()]);
console.log([...question.keys()]);
console.log([...question.values()])


console.log("QUIZ")
var set = new Set(["oranges", "apples", "bananas"]);
for (let value of set) {
    console.log(value)
    break
}

// A map object cannot contain duplicate keys.
// A map object can contain duplicate values.



console.log("QUIZ")
var set = new Set([1,2,3]); 
var arr = Array.from(set);
console.log(set[0]); 
console.log(arr[0]);


console.log("QUIZ")
var obj = {
 id: 1, 
 name: "It's JavaScript!", 
 print: function(){ 
 return `Object Id: ${this.id}, with Name: ${this.name}`;
 }
}
console.log(obj.print());



//Working with Strings in JavaScript - Part 1
console.log("Working with Strings in JavaScript - Part 1")



const airlines = "Tata Vistara India";
const plane = "A380";
console.log(plane [0])
console.log(plane [1]) 
console.log(plane [2])
console.log('B737' [2]);
console.log(airlines.indexOf('s')); 
console.log(airlines.indexOf('a')); 
console.log(airlines.lastIndexOf('a')); 
console.log(airlines.lastIndexOf('i'));
console.log(airlines.indexOf('India'));
console.log(airlines.slice(5));
console.log(airlines.slice(5,12));
console.log(airlines.slice(0, airlines.indexOf(' '))); 
console.log(airlines.slice(0, airlines.lastIndexOf(' ')));
console.log(airlines.slice(-2));

// // // 12B A B C D E F
function checkMiddleSeat(seat){
const s = seat.slice(-1);
if(s === "B" || s=== "E") console.log("You Got the Middle Seat") 
else console.log("You just got lucky")
}
checkMiddleSeat("11B");
checkMiddleSeat("19A");
checkMiddleSeat("14E");
checkMiddleSeat("1F");



console.log(new String('Arjit')); 
console.log(typeof new String("Arjit"));
console.log(typeof new String("Arjit").slice(1))



console.log("QUIZ")
let string = 'hello there';
console.log(string.includes('o'));



console.log(airlines.toLowerCase());
console.log(airlines.toUpperCase());


const passesnger = "aRjIt" //Arjit
const passesngerLower = passesnger.toLowerCase();
const passesngerCorrect =
passesngerLower [0].toUpperCase() + passesngerLower.slice(1);
console.log(passesngerCorrect)
const email = "arjit@gmail.com"
const loginEmail = "     Arjit@Gmail.com \n";
// const lowerEmail = loginEmail.toLowerCase();
// const trimmed Email = lowerEmail.trim();
const correctEmail = loginEmail.toLowerCase().trim()
console.log(correctEmail)
console.log(email === correctEmail);




//Replace in Strings
const price = '$4,000'
const priceIn = price.replace('$', 'Rs ').replace(',','.')
console.log(priceIn)

const announcement =
"All passengers come to boarding door 23. Boarding door 23."
console.log(announcement.replace("door","gate"))
console.log(announcement.replaceAll("door", "gate"))
console.log(announcement.replace(/door/g, "gate"))


//Booleans
console.log("BOOLEANS")
const planes = "Airbus A320neo";
console.log(planes.includes ('A320'));
console.log(planes.includes('Boeing'));
console.log(planes.startsWith('Airsd'));



console.log("QUIZ")
// (Here str1 and str2 are the objects so In the JavaScript, 
//  the comparison of two objects returns false)
let str1 = new String("HelloWorld!");
let str2 = new String("HelloWorld!");
    console.log(str1 === str2);