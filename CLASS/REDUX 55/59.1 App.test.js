import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe("Wish Component", function(){
  
  test("Check whether li length is minimum one or not", async function(){
    //Logic
    render(<App/>)
    const allListItems = await screen.findAllByRole("listitem")
    // allListItems = [1st, 2nd, 3rd, 4th)
    expect(allListItems).toHaveLength(20)
  })

})
// Watch Mode