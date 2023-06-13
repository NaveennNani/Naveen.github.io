const Form = document.getElementById("myform")
const Password = document.getElementById("mypassword")
const ConfirmPassword = document.getElementById("confirmpassword")
const Hesitate = document.getElementById("hesitate")

Form.addEventListener("submit", function(event){

    event.preventDefault()

    //We need to write the logic to check whether password and confirm password is matching or not
    
    isPasswordMatched = false

    if(Password.value == ConfirmPassword.value){

        isPasswordMatched = true    //Password Match
        Hesitate.innerText = "Successfully Registered"

        //Logic to get all the details 
        
        const data = {
            fullname: event.target[0].value, 
            phonenumber: event.target[1].value, 
            email: event.target[2].value, 
            url: event.target[3].value, 
            password: event.target[4].value, 
            confirmpassword: event.target[5].value,
        }
        
        console.log(data)

    }else{

        isPasswordMatched = false   //Password Do Not Match
        Hesitate.innerText = "Details not match or Recheck"
    }
})

// Which method exposes the data present in the form to the url bar when the form is submitted?
// GET

// Which of the method doesn’t expose the data present in the form to the URL bar when the form is submitted?
// POST



// MODOLE DAY 36

// Is it recommended to connect the javascript file to the html file in the head part?
// False

// Which attribute is added to the form so we can be redirected to a different page?
// action

// Which CSS property is used to make sure that the image occupies the complete screen?
// background-size

// Which of the following attribute is used to add a regular expression to an input element?
// pattern

// Which property can be used to control the input box that should take a minimum number?
// minlength

// Which property can be used to control the input box that should take a maximum number?
// maxlength