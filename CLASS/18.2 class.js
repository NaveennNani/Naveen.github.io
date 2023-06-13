

const arr = [7,8,9]
const badNewArray = [1,2,3, arr[0], arr[1], arr[2]]
console.log(badNewArray)
const newArray = [1,2,3,...arr]
console.log(newArray)
console.log(...arr)


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
    }
}

// spread operator
console.log("spread operator")

const newMenu = [...restaurant.mainMenu,'chicken masala']
console.log(newMenu)
const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
console.log(menu)

const str = 'Naveen'
const letters = [...str,' ','V.']
console.log(letters)


// user input
const ingredients = [
    // prompt(" lets make pasta. ingredient 1"),
    // prompt(" ingredient 2"),
    // prompt(" ingredient 3")
]
console.log(ingredients)

restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2])

restaurant.orderPasta(...ingredients)



// object
const newRestaurant = {
    founded: 2020,
    ...restaurant,
    founder: 'Naveen'
}
console.log(newRestaurant)


const restaurantCopy = {...restaurant}
console.log("copy restaurant", restaurantCopy)
restaurantCopy.name = "modern India"
console.log(restaurantCopy.name)






console.log('QUIZ')
let cars = ["Bugatti", 'Jaguar', 'Benz']; 
 let newCars = [...cars]; 
 newCars.push('BMW'); 
 console.log(newCars); 
 console.log(cars);


console.log('QUIZ')
 let arr1 = [0, 1, 2];
 const arr2 = [3, 4, 5];
 arr1 = [...arr2, ...arr1];
 console.log(arr1);