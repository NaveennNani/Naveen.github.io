console.log('connected')

const restaurant ={
    name: 'Classic Indian',
    location: 'CP, New Delhi, India',
    categories: ['Indian','Chinese','Punjabi','Mexican'],
    starterMenu: ['soup','fries','Burger','Garlic bread'],
    mainMenu: ['Dal Makhani','Paneer','Soya Chaap'],
    order:function(staterIndex,mainIndex){
        return[this.starterMenu[staterIndex],this.mainMenu[mainIndex]]
    }
}


const [first,second,third] = restaurant.categories;
console.log(first,second,third);

let [firstItem,,,fourthItem] = restaurant.starterMenu;
[firstItem,fourthItem] = [fourthItem,firstItem]
console.log(firstItem,fourthItem)


console.log(restaurant.order(1,2))



const arr = [1,2,3];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a,b,c);

const [x,y,z] = arr;

console.log(x,y,z)
console.log(arr)