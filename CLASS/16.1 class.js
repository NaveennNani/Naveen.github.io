// randnum
const randnum= parseInt(Math.random()*10+1);
console.log(randnum)
// accessing btn
const btn = document.getElementsByClassName('btn')[0];
// access form
const form = document.getElementsByClassName('border')[0];
// access notice
const notice = document.getElementById('notice')
// access score class
const score = document.getElementsByClassName('score')[0];


var count =0

// kaba-case   ,   camelCase 

btn.addEventListener('click', function(e){ 
    const num = document.getElementById('num').value;
    e.preventDefault();
    if(randnum > num){
        notice.innerText = "Try bigger number"
        form.style.borderColor='red'
        count++;
        score.innerText = count;
    }else if(randnum == num){
        notice.innerText = "congrats"
        form.style.borderColor='green'
        score.innerText = count;
    }else{
        count++;
        notice.innerText = "Try smaller number"
        form.style.borderColor='red'
        score.innerText = count;
    }
    form.reset();
})