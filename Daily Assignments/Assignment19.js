const setOps = arr => {
    console.log('Original Array -> ');
    console.log(arr);
    const slicedArr = arr.slice(2, 6);
    console.log('Sliced Array -> ');
    console.log(slicedArr);
    const mySet = new Set();
    for(let i=0; i<slicedArr.length; i++){
        mySet.add(slicedArr[i])
    }
    console.log("Set is -> ");
    console.log(mySet);
    for(let i=0; i<slicedArr.length; i++){
        mySet.add(i)
    }
    console.log("Final Set is -> ");
    console.log(mySet);
}

setOps(['Java', 'JavaScript', 'Cobol', 'Pascal', 'Rust', 'Flutter', 'Kotlin'])