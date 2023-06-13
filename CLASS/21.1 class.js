
// Creating Dummy Data and Selecting DOM Elements with JavaScript

const account1 = {
    owner: "Arjit Verma", 
    movements: [200,-450,400,3000,-650,-130,70,1300],
    interestRate : 1.2,
    pin: 1111,

    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-05-27T17:01:17.194Z',
        '2020-07-11T23:36:17.929Z',
        '2020-07-12T10:51:36.790Z',
      ],
      currency: 'EUR',
      locale: 'pt-PT', // de-DE


};
    
const account2 = {
    owner: "Ravi Gupta", 
    movements: [-200,450,500,3300,-350,-530,700,300], 
    interestRate : 1.5,
    pin: 2222,

    movementsDates: [
        '2019-11-01T13:15:33.035Z',
        '2019-11-30T09:48:16.867Z',
        '2019-12-25T06:04:23.907Z',
        '2020-01-25T14:18:46.235Z',
        '2020-02-05T16:33:06.386Z',
        '2020-04-10T14:43:26.374Z',
        '2020-06-25T18:49:59.371Z',
        '2020-07-26T12:01:20.894Z',
      ],
      currency: 'USD',
      locale: 'en-US',

}  

const account3 = {
    owner: "Aditya Pandey",
    movements: [5000,-450,340,890,-650,-300,-460,300],
    interestRate: 1.5,
    pin: 3333
}

const account4 = {
    owner: "Stuti Singh",
    movements: [430,-450,400,1200,-250,-800,460,300], 
    interestRate: 1,
    pin: 4444
}
    

const accounts = [account1,account2,account3,account4]
    

//Elements Selectors
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movement');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan--amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');



// What is the correct way to create a new <p> element and add it to the end of the <body> element using JavaScript?
// The correct answer is: document.createElement("p"); document.body.appendChild(p); p.innerHTML = "This is a new paragraph."
// Which of the following code snippets correctly selects a DOM element with the id of "myDiv" and adds the text "Hello World" to it using the innerHTML property?
// The correct answer is: document.getElementById("myDiv").innerHTML = "Hello World";
// correct way to add a new class "active" to an existing HTML element with the id "myElement" using JavaScript?
// The correct answer is: document.querySelector(".myElement").classList.add("active");



const formatMovementDate = function (date) {
    const calcDaysPassed = (date1, date2) => 
    Math.round(Math.abs (date2 - date1) / (1000 * 60 * 60 * 24));

    const daysPassed = calcDaysPassed (new Date(), date);
    if (daysPassed === 0) return 'Today';
    if (daysPassed === 1) return 'Yesterday';
    if (daysPassed <= 7) return `${daysPassed} days ago`;
    else {
    // const day =`${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    return `${day}/ ${month}/ ${year}`;
    }
};







//Creating and Inserting DOM Elements Dynamically
const displayMovements = function(acc, ) { 
    containerMovements.innerHTML=''

    const movs = acc.movements;

    movs.forEach(function(mov,i){ 
    const type = mov > 0 ? 'deposit': 'withdrawal';

    const date = new Date(acc.movementsDates[i]); 

    const day = `${date.getDate()}`.padStart(2,0); 
    const month = `${date.getMonth() +1}`.padStart(2,0);
    const year = date.getFullYear();

    const dateLabel = `${day}/${month}/${year}`;

    const html = `<div class="movement__row">
    <div class="movement__type movement__type--${type}">${i+1} ${type}</div>
    <div class="movement__date">${dateLabel}</div>
    <div class="movement__value">$ ${mov} EUR</div></div>`   

   containerMovements.insertAdjacentHTML('afterbegin',html)
   });
};



// What does the after begin parameter do in the insertAdjacentHTML method?
// The correct answer is : Inserts the new HTML as the first child of the target element.
// What is the purpose of the insertAdjacentHTML method in JavaScript?
// The correct answer is: To insert HTML content into an existing element in the DOM.
// Which methods are used to create a new DOM element in JavaScript?
// The correct answer is: createElement
// Which of the following is the correct syntax for creating a new element in JavaScript?
// The correct answer is: document.createElement(tagName);



// CREATE USERNAME DAY 22  
console.log("DAY @@ 22")

const createUsername = function(accs) {
    accs.forEach(function(acc) {
        acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('')
    })
}
createUsername(accounts)
// console.log(accounts)



const startLogoutTimer = function(){
    //Update the time On UI after every second
    //Stop the time on 0 seconds and logout user
    //descrease 1s
    //call the timer after every 1 s.
    let time = 300;
    setInterval(function(){
    const min = String (Math.trunc(time/60)).padStart(2,0); const seconds = String(time %60). padStart(2,0);
    labelTimer.textContent = `${min}:${seconds}`;
    time--
    if(time === 0) { 
    labelWelcome.textContent = "Login to get started";
    containerApp.style.opacity= 0;
    }
    }, 1000)
    }






// Reducing Arrays to a Single Value with reduce()
// const movements = [200,-450, 400, 3000, -650,-130, 70, 1300]

const calcDisplayBalance = function(acc){ 
    acc.balance = acc.movements.reduce((ac, mov)=>{
        return ac + mov
    },0)

    // console.log("The final balance is : ", acc.balance)
    labelBalance.textContent = `${acc.balance} EUR`
}




// Chaining Array Methods for Efficient Data Manipulation
const calcDisplaySummary = function (acc){

    const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
    // console.log(incomes)
    labelSumIn.textContent = `${income} EUR`


    const out = acc.movements
    .filter(mov => mov < 0) 
    .reduce((acc, mov) => acc + mov, 0)
    labelSumOut.textContent = `${Math.abs(out)} EUR`



    const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate)/100)
    .filter((int,i , arr) =>{
        return  int >= 1
    })
    .reduce((acc, int) => acc + int,0)
    labelSumInterest.textContent = `${interest.toFixed(2)} EUR`

}




// Finding the First Matching Element with find()
// const firstWithdrawal = movements.find((mov)=>{ 
//     return mov < 0
// });
// console.log(firstWithdrawal);
// console.log(accounts);

// const account = accounts.find((acc)=>{
// return acc.owner === "Arjit Verma"
// })
// console.log(account)




console.log("DAY @@ 23")
// Implementing User Login Functionality with Arrays

const updateUI =function(acc){
    displayMovements(acc)
    calcDisplayBalance(acc)
    calcDisplaySummary(acc)
}
// console.log(accounts)


let currentAccount;

// //Fake Login for development
currentAccount = account1;
// containerApp.style.opacity = 100; 
updateUI(currentAccount);

const dates = new Date();
    const days = `${dates.getDate()}`.padStart(2,0); 
    const months = `${dates.getMonth() +1}`.padStart(2,0);
    const years = dates.getFullYear();


labelDate.textContent = `${days} / ${months} / ${years}`;




btnLogin.addEventListener('click', function(e){
    e.preventDefault()
    // console.log("Login BTN Clicked")

    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
    console.log(currentAccount)

    if(currentAccount?.pin === Number(inputLoginPin.value)){
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`}

    const dateNow =new Date()

    containerApp.style.opacity =100

    // Clear Login Input Value
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();


    startLogoutTimer()

    // updateUI
    updateUI(currentAccount)
})




// Transfer Funds Functionality with Arrays
btnTransfer.addEventListener('click', function(e){
    e.preventDefault();
    // console.log("Transfer BTN Clicked");
    const amount = Number(inputTransferAmount.value);
    const recieverAccount = accounts.find(acc => acc.username === inputTransferTo.value)

    console.log(recieverAccount); 
    inputTransferTo.value = inputTransferAmount.value = "";

    if (amount > 0 &&
    recieverAccount &&
    currentAccount.balance >= amount &&
    recieverAccount?.username !== currentAccount.username){

    // console.log("Transfer is valid")
    currentAccount.movements.push(-amount);
    recieverAccount.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    // recieverAccount.movementsDates.push(new Date().toISOString());


    console.log("Current Ac", currentAccount); 
    console.log("Reciever Acc", recieverAccount);

    updateUI(currentAccount)
    }
})




// Closing User Accounts Functionality with Arrays
btnClose.addEventListener("click", function (e){ 
    e.preventDefault();
    // console.log("Account Close Requested");

    if (
        inputCloseUsername.value === currentAccount.username &&
        Number(inputClosePin.value) === currentAccount.pin
    ){

    const index = accounts.findIndex(
        acc => acc.username === currentAccount.username
        )
        console.log(index);
    
    accounts.splice(index,1); 
    containerApp.style.opacity= 0;
    labelWelcome.textContent = 'Log in to get started'
    }

    inputCloseUsername.value = inputClosePin.value = "";
});




//  Checking if Some or Every Element Meets a Condition with some() and every()
btnLoan.addEventListener("click",function (e){
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);
    if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
        currentAccount.movements.push(amount)
        currentAccount.movementsDates.push(new Date().toISOString());
        updateUI(currentAccount)
    }
        inputLoanAmount.value = "";
})














// 'use strict';

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // MY BANK APP

// /////////////////////////////////////////////////
// // Data

// // DIFFERENT DATA! Contains movement dates, currency and locale

// const account1 = {
//   owner: 'Arjit Verma',
//   movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,

//   movementsDates: [
//     '2019-11-18T21:31:17.178Z',
//     '2019-12-23T07:42:02.383Z',
//     '2020-01-28T09:15:04.904Z',
//     '2020-04-01T10:17:24.185Z',
//     '2020-05-08T14:11:59.604Z',
//     '2020-05-27T17:01:17.194Z',
//     '2020-07-11T23:36:17.929Z',
//     '2020-07-12T10:51:36.790Z',
//   ],
//   currency: 'EUR',
//   locale: 'pt-PT', // de-DE
// };

// const account2 = {
//   owner: 'Ravi Gupta',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,

//   movementsDates: [
//     '2019-11-01T13:15:33.035Z',
//     '2019-11-30T09:48:16.867Z',
//     '2019-12-25T06:04:23.907Z',
//     '2020-01-25T14:18:46.235Z',
//     '2020-02-05T16:33:06.386Z',
//     '2020-04-10T14:43:26.374Z',
//     '2020-06-25T18:49:59.371Z',
//     '2020-07-26T12:01:20.894Z',
//   ],
//   currency: 'USD',
//   locale: 'en-US',
// };

// const accounts = [account1, account2];

// /////////////////////////////////////////////////
// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// /////////////////////////////////////////////////
// // Functions

// const displayMovements = function (movements, sort = false) {
//   containerMovements.innerHTML = '';

//   const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

//   movs.forEach(function (mov, i) {
//     const type = mov > 0 ? 'deposit' : 'withdrawal';

//     const html = `
//       <div class="movements__row">
//         <div class="movements__type movements__type--${type}">${
//       i + 1
//     } ${type}</div>
//         <div class="movements__value">${mov}€</div>
//       </div>
//     `;

//     containerMovements.insertAdjacentHTML('afterbegin', html);
//   });
// };

// const calcDisplayBalance = function (acc) {
//   acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
//   labelBalance.textContent = `${acc.balance}€`;
// };

// const calcDisplaySummary = function (acc) {
//   const incomes = acc.movements
//     .filter(mov => mov > 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumIn.textContent = `${incomes}€`;

//   const out = acc.movements
//     .filter(mov => mov < 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumOut.textContent = `${Math.abs(out)}€`;

//   const interest = acc.movements
//     .filter(mov => mov > 0)
//     .map(deposit => (deposit * acc.interestRate) / 100)
//     .filter((int, i, arr) => {
//       // console.log(arr);
//       return int >= 1;
//     })
//     .reduce((acc, int) => acc + int, 0);
//   labelSumInterest.textContent = `${interest}€`;
// };

// const createUsernames = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// };
// createUsernames(accounts);

// const updateUI = function (acc) {
//   // Display movements
//   displayMovements(acc.movements);

//   // Display balance
//   calcDisplayBalance(acc);

//   // Display summary
//   calcDisplaySummary(acc);
// };

// ///////////////////////////////////////
// // Event handlers
// let currentAccount;

// currentAccount = account1;
// containerApp.style.opacity = 100; 
// updateUI(currentAccount);









// btnLogin.addEventListener('click', function (e) {
//   // Prevent form from submitting
//   e.preventDefault();

//   currentAccount = accounts.find(
//     acc => acc.username === inputLoginUsername.value
//   );
//   console.log(currentAccount);

//   if (currentAccount?.pin === Number(inputLoginPin.value)) {
//     // Display UI and message
//     labelWelcome.textContent = `Welcome back, ${
//       currentAccount.owner.split(' ')[0]
//     }`;
//     containerApp.style.opacity = 100;

//     // Clear input fields
//     inputLoginUsername.value = inputLoginPin.value = '';
//     inputLoginPin.blur();

//     // Update UI
//     updateUI(currentAccount);
//   }
// });

// btnTransfer.addEventListener('click', function (e) {
//   e.preventDefault();
//   const amount = Number(inputTransferAmount.value);
//   const receiverAcc = accounts.find(
//     acc => acc.username === inputTransferTo.value
//   );
//   inputTransferAmount.value = inputTransferTo.value = '';

//   if (
//     amount > 0 &&
//     receiverAcc &&
//     currentAccount.balance >= amount &&
//     receiverAcc?.username !== currentAccount.username
//   ) {
//     // Doing the transfer
//     currentAccount.movements.push(-amount);
//     receiverAcc.movements.push(amount);

//     // Update UI
//     updateUI(currentAccount);
//   }
// });

// btnLoan.addEventListener('click', function (e) {
//   e.preventDefault();

//   const amount = Number(inputLoanAmount.value);

//   if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
//     // Add movement
//     currentAccount.movements.push(amount);

//     // Update UI
//     updateUI(currentAccount);
//   }
//   inputLoanAmount.value = '';
// });

// btnClose.addEventListener('click', function (e) {
//   e.preventDefault();

//   if (
//     inputCloseUsername.value === currentAccount.username &&
//     Number(inputClosePin.value) === currentAccount.pin
//   ) {
//     const index = accounts.findIndex(
//       acc => acc.username === currentAccount.username
//     );
//     console.log(index);
//     // .indexOf(23)

//     // Delete account
//     accounts.splice(index, 1);

//     // Hide UI
//     containerApp.style.opacity = 0;
//   }

//   inputCloseUsername.value = inputClosePin.value = '';
// });

// let sorted = false;
// btnSort.addEventListener('click', function (e) {
//   e.preventDefault();
//   displayMovements(currentAccount.movements, !sorted);
//   sorted = !sorted;
// });

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES