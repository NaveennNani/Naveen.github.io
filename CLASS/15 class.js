// Everything in javascript is an object
// object : An object is nothing but a pair of key and value


const val = 'name'
const obj = {
   'name': "Nandu",
   design: "JavaScript Trainer",
   details: {
      company: "Odin School",
      tech: ["JavaScript", "Java", "Python"]
   }
}

//Understanding Dot vs. Bracket Notation in JavaScript
//.dot notation
console.log('Understanding Dot Notation')
console.log(obj.val)
console.log(obj.name)
console.log(obj.design)
console.log(obj.details.tech[1])



// bracket notation
console.log('Understanding Bracket Notation')
console.log(obj[val])
console.log(obj['name'])
console.log(obj['design'])
console.log(obj['details']['tech'][1])


// Working with Object Methods in JavaScript [Functions,]
// methods Functions in javascript

const obj1 ={
   name: 'javascript',
   //this keyword
   adds: function(){
      console.log('I am an object method in ' + this.name)
   }
}
obj1.adds()



//Iteration: The for Loop in JavaScript

console.log('The for Loop in JavaScript')
for(var x=0;x<10;x++){
   console.log(x)
}



for(var b=11;b>6;b=b-1){
   console.log(b)
}


//Looping arrays, Breaking & Continuing

const arr = [24,74,86,29,76,45,90]
for(var c=0;c<arr.length;c++){
   console.log(arr[c])
}


//for in --> for index
console.log('Index')
for(var c in arr){
   console.log(c)
}


// for of --> for Value
console.log('Value')
for(var c of arr){
   console.log(c)
}


//Break Statement
console.log('Break')
const arr1 = [242,764,886,239,760,453,901]
for(var d=0;d<arr1.length;d++){
   if(arr1[d]==453){
      break
   }
   console.log(arr1[d])
}


//Continuing Statement
console.log('continue')
const arr2 = [242,764,886,239,760,453,901]
for(var e=0;e<arr2.length;e++){
   if(arr2[e]==453){
      continue
   }
   console.log(arr2[e])
}



let myArray = ['Audi','Benz','Jaguar','Bugatti','Ferrari','laborgini'];
let sortedArray = myArray.sort();
for(let car of myArray){ 
console.log(car[0])
}


// Looping Backwards
console.log('Looping Backwards')
const arr3 = [23,34,45,56]
for(var f=3;f>=0;f--){
   console.log(f)
}



// 5!
console.log("factorial 5!")
var res=1
for(var k=5;k>0;k--){
   res=res*k;
}
console.log(res)


var rep=1
console.log("Factorial 6")
for(var l=6; l>0; l--){
   rep=rep*l;
}
console.log(rep)



//Nested for loop --> a loop inside a another loop

var arr4 = [[1,2],[3,4],[5,6]]
for(var p=0;p<arr4.length;p++){
   for(var r=0;r<2;r++){
      console.log(arr4[p][r])
   }
}



const courses = ["Javascript"];
for(let x = 0; x < courses.length; x++) {
   console.log(` I am the Outer loop -  ${courses[x]}`);
   for(let y = 0; y < courses[x].length; y++) {
      console.log(` I am the Inner loop - ${courses[x][y]}`);
   }
}



// while loop --> it cannot execute anything if condition fails
console.log("while loop")
var m=0;
while(m<5){
   m++;
   console.log(m)
}


//do while loop --> it executes atleast on after fail
console.log("do while loop")
var n=0;
do{
   n++
   console.log(n)
}while(n<5)



console.log("Quiz")
var a = 0;
var b = 0;
while(a<3) {
   a++;
   b += a;
   console.log(b)
}

   

console.log("Quiz 1")
let i = 1;
   while(i>0){
   if(i==3){
   break
   }
   console.log(i);
     i = i + 1
   }
   console.log("break");



console.log("Quiz 2")
var num = 0;
while(num <= 3){
if(num !== 2){
   console.log(num)
}
num++;
}

  

console.log("20" + 200 - 200)



console.log("Quiz")
console.log(x);
x = 2
var y = x + 1
console.log(y)
var x;
