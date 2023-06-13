// Mapping Array Elements with map()

const movements = [200,-450, 400, 3000, -650,-130, 70, 1300];
const eurToUsd = 1.1

// Normal Function
const movementsUsd = movements.map(function(mov) {
  return mov * eurToUsd
})
console.log(movements)
console.log(movementsUsd)
// Arrow Function
const movementsUsds = movements.map((mov) => {
  return mov * eurToUsd
})
console.log(movementsUsds)
// short hand Function
const movementss =movements.map(mov => mov * eurToUsd)
console.log(movementss)



const movementUsdof = [];
for(const mov of movements) { 
    movementUsdof.push( mov * eurToUsd)
}
console.log(movementUsdof)




const movementDescription = movements.map((mov,i)=> 
`${i+1} Transaction :Money ${mov > 0 ? 'deposited':'Withdrawal'} : ${mov}`
    // 3 ways to write same code
    // if (mov > 0) {
    //   return `${i+1} Transaction: Money deposited: ${mov}`
    // }else{
    //   return `${i+1} Transaction: Money Withdrew ${mov}`
    // }
)
console.log(movementDescription)



console.log("QUIZ")
const arr = [1, 2, 3, 4];
    const mappedArr = arr.map(val => {
      for (let i = 0; i < val; i++) {
        console.log(i);
      }
    });    



console.log("QUIZ")
const arrs = ['cat', 'dog', 'bird'];
const mappedArrs = arrs.map((val, index) => val + index);
console.log(mappedArrs);    



console.log("QUIZ")
const arre = [2, 4, 6, 8];
const mappedArre = arre.map(function(val) {
  return val * 2;
});
console.log(mappedArre)



console.log("QUIZ")
const arry = ['Hello World', 'How are you', 'Doing well'];
const mappedArry = arry.map(str => str.split(' '));
console.log(mappedArry)



// Create Usernames -----> DAY 22
const username = "Ritwik Kumar Singh" //rks
    console.log(username.toLowerCase().split(' ').map((name)=> {
    return name[0]
}).join(''))

function createUsername(username) {
   return username.toLowerCase().split(' ').map(name => name [0]).join('')
}

let shortUsername = createUsername(username)
console.log(shortUsername)



console.log("QUIZ")
const sentences = ['javascript is awesome', 'i love coding', 'coding is my passion'];
const wordCounts = sentences.map(sentence => {
  const words = sentence.split(' ');
  const count = words.length;
  return count;
});
console.log(wordCounts);



console.log("QUIZ")
const words = ['hello', 'world', 'javascript', 'is', 'fun'];
const modifiedWords = words.map(word => {
  const firstChar = word.charAt(0);
  const modifiedWord = firstChar.toUpperCase() + word.slice(1).toLowerCase();
  return modifiedWord;
});
console.log(modifiedWords);



console.log("QUIZ")
const arrx = ['apple', 'banana', 'cherry'];
const mappedArrx = arrx.map(str => str.split('').join('-'));
console.log(mappedArrx);



console.log("QUIZ")
const wordx = ['apple', 'banana', 'cherry', 'date'];
const concatenatedWordx= wordx.reduce((result, word) => result + '-' + word);
console.log(concatenatedWordx)



console.log("DAY 22.3")
const deposits = movements.filter((mov)=>{
  return mov > 0
})
console.log(`deposits:${deposits}`)


const depositsFor = [];
for(const mov of movements) { 
  if(mov > 0) { 
    depositsFor.push(mov) 
  }
}
console.log(depositsFor)


const withdrawals = movements.filter((mov => mov < 0))
console.log(withdrawals)



// What is the main difference between using the filter method and a for...of loop with a conditional check to filter an array in JavaScript?
// The correct answer is :The filter method returns a new array, while the for...of loop modifies the original array
// What is the return value of the filter method in JavaScript?
// The correct answer is: A new array containing only the elements that pass the filter condition
// What is the syntax for using the filter method in JavaScript?
// The correct answer is: array.filter(callbackFunction)



console.log("QUIZ")
const numbers = [1, 2, 3, 4, 5]
const filteredNumbers = numbers.filter(num => num > 3 && num < 5);
console.log(filteredNumbers)


console.log("QUIZ")
const numbero = [1, 2, 3, 4, 5];
const sum = numbero.reduce((total, num) => total + num, 0);
console.log(sum);



// Reducing Arrays to a Single Value with reduce()
const balance = movements.reduce(function(acc, mov, i, array){ 
  console.log(`Iteration no: ${i+1}: Acc value is ${acc}`)
  return acc + mov
},0);// 0 intemates the initial value of balance if 100 then initial value is 100
console.log(balance)

// another method
let balance2 = 0;
for(const mov of movements){ 
    balance2 += mov
}
console.log(balance2)


// reduce method
// Maximum Value from the movements
const max = movements.reduce((acc, mov)=>{
    if (acc > mov) return acc; 
    else return mov
}, movements [0]);
    console.log(`maximum is ${max}`)



// What is the initial value of the accumulator in the reduce() method?
// The correct answer is: An explicitly defined initial value    
// Which of the following statements best describes a reducer in JavaScript?
// The correct answer is: A function that takes an array and reduces it to a single value.



// Chaining Array Methods for Efficient Data Manipulation

const totalDepositsUsd = movements
.filter((mov)=>{
    return mov > 0
})
.map((mov, i, arr)=>{
    // console.log(arr)
    return mov * eurToUsd
})
.reduce((acc, mov)=>{
    return acc + mov
},0)


//shorthand method
const totalDepositsUsds = movements
.filter(mov => mov > 0)
.map(mov => mov * eurToUsd)
.reduce((acc,mov) => acc + mov, 0)

console.log(movements)
console.log(totalDepositsUsd)
console.log(totalDepositsUsds)


// What is the main advantage of method chaining in JavaScript?
// The corect answer is :It allows us to write more concise and readable code.


console.log("QUIZ")
const arrz = [1, 2, 3, 4, 5];
const result = arrz.filter(num => num % 2 === 0)
  .map(num => num * 2)
  .reduce((acc, val) => acc + val, 0)
console.log(result)


// When should we use method chaining in JavaScript?
// The correct answer is :Whenever we need to perform multiple operations on an array or object.



// Which of the following methods cannot be chained with the map() method?
// The correct answer is: join()



console.log("QUIZ")
const prices = [12.5, 18.9, 25.7, 10.2, 8.6]
const foundPrice = prices.find(price => price.toFixed(1) === '18.9')
console.log(foundPrice)


console.log("QUIZ")
const arrc = [2, 4, 6, 8, 10];
const results = arrc.find(num => num > 5);
console.log(results)


// Which of the following is a valid syntax for using the find method?
// arr.find(callbackfn)


// Which of the following is an advantage of using the find method over a for loop to search an array?
// The find method is more efficient for large arrays, The find method is easier to read and write than a for loop and The find method is more flexible than a for loop



//MODULE 
console.log("MODULE 22")
// What is the purpose of the toFixed method in JavaScript?
// To round a number to a specified number of decimal places and return the result as a string


// Which method can be used to concatenate all the elements of an array into a string?
// join


// Which method can be used to extract a section of an array and return a new array?
// The correct answer is: slice


// Which method can be used to split a string into an array of substrings based on a specified separator?
// split: The split method splits a string into an array of substrings based on a specified separator.


// Which method is used to iterate over an array and execute a function on each element of the array?
// forEach :The forEach method executes a provided function once for each array element.


// Which of the following methods returns a new array containing the results of calling a function on every element in the original array?
// map



