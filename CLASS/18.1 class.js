
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
            close:'4AM' 
        }
    }
}
 
restaurant.deliverOrder(20,"123 Alpha Lane",2,1)


// Object Destructuring
const {name,starterMenu,openingHours} = restaurant
    console.log(name,starterMenu,openingHours)
        


// unchanging object names to wanted     
const {
    name: restaurantName,
    starterMenu: Menu,
    openingHours: hours   
} = restaurant

console.log(restaurantName,Menu,hours)



let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({a,b} = obj);
console.log(a,b);


const {fri:{open:o,close:c}}= openingHours;
console.log('Friday Opening Hours',o,c)