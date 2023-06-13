class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    static displayName = "Point";
  
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.hypot(dx, dy); 
    }
  }
  
  const p1 = new Point(5, 5);
  const p2 = new Point(10, 10);
  
  console.log(p1.displayName); // undefined
  console.log(p1.distance);    // undefined
  console.log(p2.displayName); // undefined
  console.log(p2.distance);    // undefined
  
  console.log(Point.displayName);      // "Point"
  console.log(Point.distance(p1,p2));







class Animals {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sing() {
        return `${this.name} can sing and the age is ${this.age}`;
    }
    
    dance() {
        return `${this.name} can dance`;
    }
} 

class Cats extends Animals {
    constructor(name, age, whiskerColor) {
        super(name, age);
        this.whiskerColor = whiskerColor;
    }
    whiskers() {
        return `I have ${this.whiskerColor} whiskers`;
    }
}
let clara = new Cats("Clara", 33, "indigo");

console.log(clara.sing());
console.log(clara.whiskers());
console.log(clara.dance());






//---------------Example 2: try...catch...finally Example--------------
const numerator= 100, denominator = 'a';
try {
     console.log(numerator/denominator);
     console.log(numerator);
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}
finally {
     console.log('Finally will execute every time');
}





//-------------------Example 3: try...catch...throw Example-------------------
const number1 = 40;
try {
    if(number1 > 50) {
        console.log('Success');
    }
    else {

        // user-defined throw statement
        throw new Error('The number is low');
    }

    // if throw executes, the below code does not execute
    console.log('hello');
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}
finally{
    console.log('we are into finally block');
}







//--------------------Example 4: Rethrow an Exception -------------------
const number = 1;
try {
     // user-defined throw statement
     throw new Error('This is the throw');

}
catch(error) {
    console.log('An error caught');
    if( number + 8 > 10) {

        // statements to handle exceptions
        console.log('Error message: ' + error); 
        console.log('Error resolved');
    }
    else {
        // cannot handle the exception
        // rethrow the exception
        throw new Error('The value is low');
    }
}











//------------------Example 2---------------//
//------------chaining of promises----------//
let countValue1 = new Promise(function (resolve, reject) {
    resolve("Promise resolved");
  });
  
  // executes when promise is resolved successfully
  countValue1
    .then(function successValue(result) {
      console.log(result);
    })
  
    .then(function successValue1() {
      console.log("You can call multiple functions this way.");
    });
    








  
  //--------------------Example 3:-------------//
  //---------------------catch-----------------//
  // returns a promise
  let countValue2 = new Promise(function (resolve, reject) {
     reject('Promise rejected'); 
  });
  
  // executes when promise is resolved successfully
  countValue2.then(
      function successValue(result) {
          console.log(result);
      }
   )
  
  // executes if there is an error
  .catch(
      function errorValue(result) {
          console.log('this is catch block');
          console.log(result);
      }
  );
  


  
  //--------------------Example 4:------------------//
  //---------------------finally--------------------//
  // returns a promise
  let countValue3 = new Promise(function (resolve, reject) {
      // could be resolved or rejected   
      reject('Promise resolved'); 
  });
  
  // add other blocks of code
  countValue3.finally(
      function greet() {
          console.log('This code is executed.');
      }
  );









  const age = 12;
  let countValue4 = new Promise(function (resolve, reject) {
      if(age>18)
      {
        resolve('you can vote');
      }
      else
      {
        reject('you are less than 18 years !!');
      }
   });
   
   // executes when promise is resolved successfully
   countValue4.then(
       function successValue(result) {
           console.log(result);
       }
    )
   
   // executes if there is an error
   .catch(
       function errorValue(result) {
           console.log('this is catch block');
           console.log(result);
       }
   )
  
   .finally(
       function print(){
          console.log('See you again')
       });












       const p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('The first promise has resolved');
            resolve(10);
        }, 1 * 1000);
    });
    
    const p4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('The second promise has resolved');
            reject(20);
        }, 2 * 1000);
    });
    
    const p5 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('The third promise has resolved');
            resolve(30);
        }, 3 * 1000);
    });
    
    Promise.all([p3, p4, p5])
        .then(results => {
            const total = results.reduce((p, c) => p + c);
    
            console.log(`Results: ${results}`);
            console.log(`Total: ${total}`);
        })
        .catch((err) =>{
            console.log('the err is' + err);
        });








const p6 = new Promise((resolve, reject) => {
    setTimeout(() => {
console.log('The first promise has resolved');
resolve(10);
    }, 3 * 1000);
});

const p7 = new Promise((resolve, reject) => {
    setTimeout(() => {
console.log('The second promise has resolved');
reject(20);
    }, 2 * 1000);
});

const p8 = new Promise((resolve, reject) => {
    setTimeout(() => {
console.log('The third promise has rejected');
reject(20);
    }, 4 * 1000);
});

Promise.race([p6, p7, p8])
    .then(value => console.log(`Resolved: ${value}`))
    .catch(reason => console.log(`Rejected: ${reason}`));





//------------------ Example 2:------------------------//

const pErr = new Promise((resolve, reject) => {
    reject("Always fails");
  });
  
  const pSlow = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Done eventually");
  });
  
  const pFast = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Done quick");
  });
  
  Promise.any([pErr, pSlow, pFast]).then((value) => {
    console.log(value);
  });
  
  //------------------ Example 3:-----------------------//
  
  const promise1 = Promise.reject(0);
  const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
  const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));
  
  const promises1 = [promise1, promise2, promise3];
  
  Promise.any(promises1).then((value) => console.log(value));






  const doSomethingAsync = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 3000)
    })
  }
  
  /* When you want to call this function you prepend await, and the calling code will 
  stop until the promise is resolved or rejected*/
  
  const doSomething = async () => {
    console.log('we are inside doSomething() function.....')
    console.log(await doSomethingAsync())
  }

console.log('Before')
doSomething()
console.log('After')
console.log('After>>>>>>')








//-----------Await()------- Example 2-------------------------

let promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved example 2')}, 4000); 
});

// async function
async function asyncFunc1() {

    // wait until the promise resolves 
    let result = await promise1; // it will wait till the promise1 value is either reoslved or rejected

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc1();





// a promise
let promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
    reject('Promise resolved example 3')}, 4000); 
});

// async function
async function asyncFunc() {
    try {
        // wait until the promise resolves 
        let result = await promise2; 

        console.log(">>" + result);
    }   
    catch(error) {
        console.log(">>>>" +error);
    }
    finally{  // always execute if pass or fail
      console.log("we are into finally block");
    }
}

// calling the async function
asyncFunc(); // Promise resolved








// a promise
let promise5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
    reject('Promise resolved example 3')}, 4000); 
});

// async function
async function asyncFunc() {
    try {
        // wait until the promise resolves 
        let result = await promise2; 

        console.log(">>" + result);
    }   
    catch(error) {
        console.log(">>>>" +error);
    }
    finally{  // always execute if pass or fail
      console.log("we are into finally block");
    }
}

// calling the async function
asyncFunc(); // Promise resolved

