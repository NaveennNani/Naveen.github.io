const mathsFunc = (num1, num2, num3, ...rest) => {
    console.log(`The numbers are ${num1}, ${num2} and ${num3}`);
    console.log('The array is -> ');
    console.log(rest);
    console.log(`Addition of first three numbers -> ${num1 + num2 + num3}`);
    console.log(`The minimum of the array is ${Math.min(...rest)}`)
    console.log(`The maximum of the array is ${Math.max(...rest)}`)
}

mathsFunc(12, 9, 10, 43, 22, 67, 89, 2, 23);