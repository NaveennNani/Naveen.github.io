import { render, screen, within, getByTestId } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


function hasToContain (data1, data2, data3){ // data1 = myform, data2 = button, data3 = 2
// Logic to check whether 2 buttons are present inside the form or not

const myData = within (data1).queryAllByRole(data2) //within (myform).queryAllByRole(button)
// myData = [1st buttonDown, 2nd button]
if (myData.length === data3){
  //It means there are exactly 2 buttons kept inside the form
  return {
    pass: true
  }
}else{
    return{
      fail: false
    }
  }
}

describe("Matcher Component", function(){
  
  test("Checking the count of the buttons", function() {
    render(<App/>)
    // const myButtons = screen.getAllByRole("button")
    // expect (myButtons).toHaveLength(2)

    // <form>
    // <button>0k</button>
    // <button>Continue</button>
    // </form>
    
    const myform = screen.getByTestId("myform") 
    expect(myform).hasToContain ("button", 2)
  })
})

expect.extend({hasToContain})

// Watch Mode


// matchers(functions) in jest (toHaveLength(), toEqual(), toBeInTheDocument(). not.toBeInTheDocument())
// findAllByRole()-> When we want to find a HTML element that will be displayed on to the screen by taking sometime 
// This method returns a promise
// But in out case, button html element will be displayed immediatly on to the screen, without much delay 
// To identity that button element getAllByRole() will be sufficient 
// This method returns no promise