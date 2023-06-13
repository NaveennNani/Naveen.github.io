// Moving from one HTML element to another HTML element is called as?
// traversing

// The tree which contains the represented HTML tags is called?
// DOM

// Which method is used to bring the HTML element back to the webpage after it is faded?
// fadeIn()

// Which method is used to reverse the fading property on an HTML element from the webpage?
// fadeToggle()

// Which method removes the HTML element from the webpage?
// fadeOut()

// Which of the following is a property of fadeTo()?
// fadeTo() takes opacity value ranging between 0 to 1, fadeTo() takes the first argument as duration, fadeTo() takes the first argument as the duration in milliseconds

// Which method slowly moves the HTML element downwards after it has travelled upward?
// slideDown()

// Can we have an animate method without passing any parameters?
// False

// What is the first parameter that has to be provided to animate()?
// css

// Which method is used to apply animation in jquery?
// animate()

// Can we pass linear as a third parameter to animate()?
// Yes

// Can we pass multiple CSS properties to animate()?
// True

// Multiple CSS properties should be enclosed within.
// {}

// Can we chain multiple methods together in jquery?
// Yes

// Which method can be used to delay the animation in jquery?
// delay()

// Can we pass a separate callback function to every fadeTo()?
// true

// The function that is given as an inner function to fadeTo() is called?
// callback function

// The function which is given to fadeTo() is?
// function expression, arrow function





// MODULE DAY 42

// Can we identify an HTML element in jquery using the tag name?
// True

// Can we pass swing as a third parameter to animate()?
// True

// Does show() accept any data like opacity?
// False

// Jquery is represented using which symbol?
// $

// We can identify the class of HTML element using which symbol?
// .

// We can identify the id of HTML element using which symbol?
// #

// Which method slowly moves the HTML element upwards and downwards depending on its situation?
// slideToggle()

// Which of the following code will identify tagname h1 element in jquery?
// $("h1")

// Which technology adds interactiveness to the website?
// jquery


$(function()
{
  $("form").fadeTo(2000, 0.2, function()
  {
    $("form").fadeTo(2000, 1)
  })
  
})


















