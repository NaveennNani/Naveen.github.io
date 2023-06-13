// Basic Array Manipulation Methods
console.log("Basic Array Manipulation Methods")
let arr = ['a','b','c','d','e','f','g']

// slice method in array --> does not modifies the original array
// last index is not included
// Does the slice() method modify the original array in JavaScript?
// No, the slice() method only returns a new array with selected elements, leaving the original array unchanged.

console.log(arr.slice(2))
console.log(arr.slice(2,6))
console.log(arr.slice(-4))
console.log(arr.slice(2,-2))
console.log(arr.slice())
console.log([...arr])
console.log(arr)


//splice method in arr --> modifies the original array
// What is the result of the splice() method when called on an array in JavaScript?
// The splice() method adds or removes elements from the middle of the array.
let arr1 = ['a','b','c','d','e','f','g']
console.log(arr1.splice(1,2))
console.log(arr1)

//Reverse method in arr --> modifies the original array
let arr2 = [1,2,3,4,5,6,7,8,9,0]
console.log(arr2.reverse())
console.log(arr2)


//Concat
// What is the result of the concat() method when called on an array in JavaScript?
// The concat() method combines two or more arrays into a new array.
const letters = arr.concat(arr2)
console.log(letters)
console.log([...arr,...arr2])


//Join
// What is the result of the join() method when called on an array in JavaScript
// The join() method returns a string containing all the array elements separated by a specified separator.
console.log(letters.join(' '))
console.log(letters.join('-'))
console.log(letters.join('+'))
console.log(letters.join('='))
console.log(letters.toString())


//At method in array
// The at() Method for Indexing Arrays
// What happens when a negative index is passed to the at() method in JavaScript?
// The method retrieves the element at the index relative to the end of the array.
// What is the purpose of the at() method in JavaScript?
// To retrieve the element at a specified index in an array.
// What is the return value of the at() method when called on an array in JavaScript?
// The element at the specified index in the array.
// What is the time complexity of the at() method in JavaScript?
// O(1)

console.log("The at() Method for Indexing Arrays")
let arr3 =[23,14,98]

console.log(arr3[1])
console.log(arr3.at(1))

console.log(arr3[arr3.length-1])
console.log(arr3.slice(-1)[0])
console.log(arr3.at(-1))
console.log(arr3.at(-2))

console.log('ARJIT'.at(0))
console.log("ARJIT".at(-1))


// Looping through Arrays using forEach()
console.log("Looping through Arrays using forEach()")

// What is the difference between for...of and forEach in JavaScript?
// forEach can only be used with arrays, while for...of can be used with any iterable object

console.log("For of method")
const movements = [200,450,-400, 3000, -650,-130,70,1300];
for(let [i,movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Transaction ${i+1} :You deposited ${movement}`)
    }else{
        console.log(`Transaction ${i+1} :You withdrew ${Math.abs(movement)}`)
    }
}


console.log("---ForEach---")
movements.forEach(function(movement,index,array){
    if(movement > 0) {
        console.log(`Transaction ${index+1}: You deposited ${movement}`)
    }else{
        console.log(`Transaction ${index+1}: You withdrew ${Math.abs(movement)}`)
    }
})


// What is the purpose of the Math.abs() function in JavaScript?
// To calculate the absolute value of a number.

console.log("QUIZ")
const arr4 = [2, -4, 6, -8];
let sum = 0;
for (let num of arr4) {
  sum += Math.abs(num);
}
console.log(sum);


console.log("QUIZ")
let arr5 = [1, 2, 3, 4, 5];
arr5.forEach(function(value, index, array) {
  console.log(`Value: ${value}, Index: ${index}, Array: ${array}`)
})



// Iterating through Maps and Sets using forEach()
console.log("Iterating through Maps and Sets using forEach()")

const currencies = new Map([
    ['USD', 'United States Dollar'],
    ['INR', 'Indian Rupee'],
    ['EUR', 'Euro']
])
console.log(currencies);

currencies.forEach(function(value, key, map){ 
        console.log(`${key}: ${value}`)
})

let currenciesUnique = new Set (['USD', 'INR', 'USD', 'EUR', 'INR']) 
console.log(currenciesUnique);
// in the sets key is not required but introduced to not disturb the sequence
currenciesUnique.forEach(function(value, key, set){ 
    console.log(`${key}: ${value}`)
})    



console.log("QUIZ")
let myMap = new Map([
  [1, "one"], 
  [2, "two"], 
  [3, "three"]
])
myMap.forEach((value, key) => {
  console.log(key + ": " + value);
});



console.log("QUIZ")
let mySet = new Set([1, 2, 3]);
mySet.forEach(value => {
  console.log(value * 2);
});



console.log("QUIZ")
let map = new Map()
map.set(1, "one");
map.set(2, "two");
map.forEach(function(value, key, map) {
   console.log(key + " : " + value);
})




console.log("QUIZ")
let set = new Set(["a", "b", "c"]);
set.forEach(function(value, valueAgain, set) {
   console.log(value)
})