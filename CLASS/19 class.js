const days = ['mon','tue','wed','thu','fri','sat']

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


//Optional Chaining (?.) in JavaScript
console.log("Optional Chaining (?.) in JavaScript")

console.log(restaurant.openingHours?.mon?.open);


for(const day of days){
    const open = restaurant.openingHours[day]?.open?? 'closed' ;
    console.log(`on ${day}, we are open at ${open}`)
}


//methods
console.log(restaurant.order(0,1))
console.log(restaurant.ordersoup?.(1))


//Arrays
const users = [{
    name : 'Naveen',
    email : 'gorunaveen1@gmail.com'
}]
console.log(users[0].name ?? "user array empty")

if(users.length>0) console.log(users[0].name)
else console.log("user array empty")



console.log("QUIZ")
const Obj = null;
      let x = 0;
      const sol = Obj?.[x++];
      console.log(x);


console.log("QUIZ")
const hollywood = {
        movie : {
              name: "Pulp Fiction",
              Director: "Quentin Tarantino" 
                }
}
console.log(hollywood.serial?.name ?? "Naveen")
console.log(hollywood.serial?.name || "Naveen")
console.log(hollywood.serial?.name && "Naveen")


//Iterating Over Objects in JavaScript using Object.keys(), Object.values(), and Object.entries()
console.log('Iterating Over Objects in JavaScript using Object.keys(), Object.values(), and Object.entries()')




//keys
const properties = Object.keys(openingHours);
console.log(properties)


let opnStr = `We are open ${properties.length} days: `;
for(const day of Object.keys(openingHours)){
opnStr += ` ${day} `
}
console.log(opnStr);

//values
console.log(Object.values(openingHours));

let user = {
    name: "Odin",
    age: 21
};
for (let value of Object.values(user)) {
    console.log(value);
}


// entries
const entries = Object.entries(openingHours);
console.log(entries);
for(const [day, {open, close}] of entries){
console.log(`1On ${day} we are open at ${open} and close at ${close}`)
}



//Sets in JavaScript --> it  contains unique values not allow duplicate values
//The JavaScript Set object is used to store the elements with unique values.
console.log("Sets in JavaScript")
const orderSet = new Set([
    'Chicken',
    'Dal makhani',
    'Panner',
    'Chicken',
    'Soup',
    'Dal makhani',
    'Panner'
])
console.log(orderSet)
//Size Of the set
console.log(orderSet.size);
console.log(orderSet. has ('Chicken')) 
console.log(orderSet. has ('Momos'));
orderSet.add('Noodles');
orderSet.delete('Panner');
orderSet.clear()
console.log(orderSet);




const nameSet = new Set('Arjit');
console.log(nameSet)



const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// const staffUnique = new Set (staff);
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(typeof(staffUnique));
console.log(new Set('arjitverma').size)


console.log("QUIZ")
let programmingLang = new Set('Javascript');
console.log(programmingLang.has('i'));



//Maps in JavaScript: Fundamentals
console.log('Maps in JavaScript: Fundamentals')

const rest = new Map()
rest.set('name', 'Indian palace')
    rest.set(1, "New Delhi")
    rest.set(2, 'Mumbai')
    rest.set('categories', ["Indian", "Punjabi", "Chinese", "Mexican"])
    .set('open',11)
    .set('close', 23)
    .set(true, "We are Opened")
    .set(false, "Sorry! We are closed")
    console.log(rest.get('name'));
    console.log(rest.get(1));
    console.log(rest.get(true))
    console.log(rest)    

const time = 16;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));


console.log(rest.has('categories'))
console.log(rest.has('menu'))

// rest.clear()
rest.delete(2)
rest.set(document.querySelector('h1'),"heading")
console.log(rest)




console.log("QUIZ")
let map = new Map();
    map.set("skill", "JavaScript");
    let keys = [...map.values()];
    keys.push("Java");
    console.log(keys);    



