console.log("connected")



myForm.addEventListener('submit', onSumbit);
function onSumbit(e){
e.preventDefault();
if (nameInput.value === || emailInput.value === ageInput.value === ''){
    msg.classList.add('error')
    msg.innerText = 'Please enter all fields'
    setTimeout(() => msg.remove(), 3000)
}else if (Number (ageInput.value) < 18){ 
    msg.classList.add('error')
    msg.innerText = 'Please enter age more then 18'
    setTimeout(() => msg.remove(), 3000)
} else {
const li = document.createElement('li');
li.append(`${nameInput.value} - ${emailInput.value} - ${ageInput.value}`);
    userList.append(li);
    nameInput.value = '';
    emailInput.value = '';
    ageInput.value = '';
    }
}