import { render, screen, logRoles } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import SummaryPage from './SummaryPage';
import OrderPage from './OrderPage';


describe("Testing Card Component", function() {

  test("Checking the count of the images", function()
  {
    //Logic to check the count of the images
    render(<App/>)
    
    const myImages = screen.queryAllByTestId("image")
    // myImages = ["1st", "2nd", "3rd", ......) 
    expect(myImages.length).toEqual(2)
  })

  test("checking whether the URL of the image is proper or not", function(){
    render(<App/>)
    const myImages = screen.queryAllByTestId("image")
    // myImages = ["1st image detail is choclate","2nd image dertail is Venilla"]
    expect(myImages[0].getAttribute("src")).toEqual("https://www.yummytummyaarthi.com/wp-content/uploads/2014/11/1-36.jpg")
    expect(myImages[1].getAttribute("src")).toEqual("https://static.toiimg.com/thumb/63971154.cms?width=573&height=430")
  })

  // test("checking the order count or the quantity", function(){
  //   render(<App/>)
  //   const myAddButton = screen.queryAllByTestId("addbtn")
  //   // myAddButton = ["1st button" (Chocolate), "2nd button(Vanilla)"]
  //   userEvent.click(myAddButton[0])
  //   userEvent.click(myAddButton[0])
  //   userEvent.click(myAddButton[0])
  //   userEvent.click(myAddButton[0])
    
  //   const Quan = screen.queryByTestId("quantity")
  //   expect(Quan.innerHTML).toEqual("4")
  // })

  test("checking whether the initial quantity is 0 or not", function(){
    render(<SummaryPage/>)
    const myDiv = screen.queryByTestId("total")
    expect(myDiv.innerHTML).toEqual("0")
  })

  test("checking whether the order id", function(){
    render(<OrderPage/>)
    const myOrderId = screen.queryByTestId("id")
    expect(myOrderId.innerHTML).toEqual("400")
  })

  test("checking whether the order id", function(){
      const view = render(<OrderPage/>)
      // logRoles(view.container)
      screen.getAllByRole("heading")
    })
})


