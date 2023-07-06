import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Counter from './Counter';

describe("Counter Component", function(){

  test("Checking whether the initial count value is 0", function(){
    //Logic to check the count value 
    // getByText(), getByRole(), getByTestId()
    
    render(<Counter/>)
    const initialCountValue = Number(screen.getByTestId("countvalue").innerHTML)//<h2 data-testid="countvalue"/>
    expect (initialCountValue).toEqual(0)
  })

  test("Checking whether the count is 1 after we click on increase button once", async function(){
    //Logic to check whether the count is 1, when we click on increase button
    render(<Counter/>)
    const increaseButton = screen.getByRole("button", {name: "Increase"})//<button onClick={increaseIt}>Increase<button/>
    await userEvent.click(increaseButton)
    
    const countValue = Number(screen.getByTestId("countvalue").innerHTML)
    expect(countValue).toEqual(1)
  })

  test("Checking whether the count is -1 after we click on decrease button once", async function(){
    //Logic to check whether the count is 1, when we click on increase button
    render(<Counter/>)
    const decreaseButton = screen.getByRole("button", {name: "Decrease"})//<button onClick={increaseIt}>Increase<button/>
    await userEvent.click(decreaseButton)
    
    const countValue = Number(screen.getByTestId("countvalue").innerHTML)
    expect(countValue).toEqual(-1)
  })
})
