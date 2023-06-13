const buttons = document.querySelectorAll("button")
const myH1 = document.getElementById("h1")
const clearBtn = document.getElementById("allclear")
const equalBtn = document.getElementById("equal")

equalBtn.addEventListener("click", function() {
    //We need to write the logic to basically calculate the result 
    myH1.innerText = eval(myH1.innerText)
})


function getData(data){//data = 3
    if(myH1.innerText === "0"){
        myH1.innerText = data
    }else{
        myH1.innerText = myH1.innerText + data
    }
}

function addDecimal(){
    if(!myH1.innerText.includes(".")){
        myH1.innerText = `${myH1.innerText}.`
    }
}


buttons.forEach(function(btn){
    if(btn.classList.length == 0){
        btn.addEventListener("click", function(){
            getData(btn.innerText)
        })
    }else if(btn.classList.contains("operator")){
        btn.addEventListener("click", function(){
            getData(btn.innerText)
        })
    }else if(btn.classList.contains("decimal")){
        btn.addEventListener("click", function(){
            addDecimal()
        })
    }
})


clearBtn.addEventListener("click", function(){
    //Logic to basically clear the complete data 
    myH1.innerText = "0"
})



// In general, event handling is nothing but ____________
// function

// The events related to the browser are kept inside which object?
// Window

// Can eval() evaluate any length of expression that is displayed on the calculator display?
// true

// Is eval() a part of Javascript?
// True

// Which inbuilt function in javascript evaluates the expression that is displayed on the calculator display?
// eval()




// MODULE DAY 37

// What is the use of contains()?
// It checks for a substring inside a main string

// Which symbol identities that href attribute as the name of an anchor rather than an address or filename is?
// "#"











