// console.log('connected')

const massMark =  78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark **2;
const BMIJohn = massJohn / heightJohn **2;
const markHeigherBMI = BMIMark > BMIJohn;


console.log(BMIMark,BMIJohn,markHeigherBMI);

if(BMIMark > BMIJohn){
    console.log(`'Mark's BMI ${BMIMark} is higher than 'John's ${BMIJohn}`);
}else{
    console.log(`'John's BMI ${BMIJohn} is higher than 'Mark's ${BMIMark}`);
}


console.log('Break')

const scoreDolphins = (96 + 108 +89) / 3
const scoreKoalas = (88 + 91 + 110 )/ 3
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins){
    console.log('Koalas win the trophy')
} else if (scoreDolphins === scoreKoalas){ 
    console.log('Both win the trophy!')
}



function fruitProcessor(apples, oranges) {
    const juice =`Juice with ${apples} apples and ${oranges} oranges`
    return juice;
    }
    const myJuice = fruitProcessor (5,2)
    console.log(myJuice)



function userInfo(name, age, email){
    const user =`My name is ${name} and I am ${age} years old. You can contact me at ${email}`;
    return user
    }
    const myuser =userInfo('Naveen',22,'bokka@gmail.com')
    console.log(myuser)



    
    

const calcAverage = (a,b,c) => (a+b+c)/3;

let scoresDolphins = calcAverage (44,23,71);
let scoresKoalas = calcAverage (64,54,49); 
console.log(scoresDolphins, scoresKoalas)
    const checkWinner = function (avgDolhins, avgKoalas) {
    if (avgDolhins > 2* avgKoalas) {
    console.log('Dolphins win')
    }else if (avgKoalas > 2* avgDolhins) { 
        console.log('Koalas win')
    }else{
    console.log('No team wins!!!')
    }
}
    checkWinner (scoresDolphins, scoresKoalas);