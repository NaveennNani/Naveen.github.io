import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe("Wish Component", function(){
  
  test("Validating the prop data", function() {
    //Logic to check whether the h1 element displays Raju or not
    
    render(<App/>)

    const propElement = screen.getByTestId("recieveddata").innerHTML
    expect(propElement).toEqual("Raju")
  })
})
// Watch Mode