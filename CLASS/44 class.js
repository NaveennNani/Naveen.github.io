$(function(){
    // $("button").click(function(){

    // $("div").css("opacity", "8.3")
    // $("div").fadeTo(3000, "0.3")
    // })
    
    // $("button").dblclick(function(){
        // $("div").css("opacity", "8.3")
        // $("div").fadeTo(3000, "0.3")

    //    })




    // $("#login").hide()
    // $("#changeit").click(function(){
    // Logic to keep switching between the forms 
    // $("#login, #register").toggle()







    // hover events
    // $("button").hover(
    // function(){
        // $("div").css({"backgroundColor": "purple", "opacity": 0.7, "marginLeft": "400px"})
    // },
    // function(){
        // $("div").css({"backgroundColor": "green", "opacity": 0.6, "marginRight": "400px"}}}
    // })







    // Manage Mouse and Keyboard Events
    // $("button").mouseup (function(){
        // $("div").css({"backgroundColor": "purple", "opacity": 0.6})
        // })
        
    // $("button").mousedown (function(){
        // $("div").css({"backgroundColor": "purple", "opacity": 0.6})
        // })

    // $("button").mouseenter(function(){
        // $("div").css({"backgroundColor": "purple", "opacity": 0.6})
        // })
        
    // $("button").mouseleave (function(){
        // $("div").css({"backgroundColor": "purple", "opacity": 0.6})
        // })

    // $("button").keyup (function(){
        // $("div").css({"backgroundColor": "purple", "opacity": 0.6})
        // })
        
    // $("button").keydown (function(){
        // $("div").css({"backgroundColor": "purple", "opacity": 0.6})
        // })    

    // $("button").keypress (function(){
        // $("div").css({"backgroundColor": "purple", "opacity": 0.6})
        // })





    // Manage Multiple Events
    // this keyword refers to the HTML element on which the event is performed
    // $("div").on({
    
    // click: function(){
        // $(this).css("backgroundColor", "green")
        // },
    
    // mouse leave: function(){
        // $(this).css("backgroundColor", "magenta")
        //},
    
    // dblclick: function(){
        // $(this).css("backgroundColor", "purple")
    // })






    // Delegated Events 
    // The events that we apply directly on to the parent, where we would listen to the event for a newly added child elements
    
    // $(function(){
        // $("ol").on("click", function()
        // console.log("I have been clicked")
    // },
    // $("ol").append("<li><a href='#'>MAGENTA</a></li>"){
        // })







    //  Passing Data to Events
    // $("button").click({valid: "user is valid", invalid: "user is invalid"}, function(e){
        // const myUsername = $("#username").val()
        // const myPassword = $("#password").val()
    
    //    if (myUsername == "Raju" && myPassword == "Welcome"){
    // Popup(user is valid) 
    // alert(e.data.valid)
    // }else{
    //Pop(user is invalid)
    // alert@e.data.invalid)]
    // })




    $("#first").click(function()
    {
        $("img").fadeTo(2000, 0.5)
    })

    $("#second").click(function()
    {
        $("img").fadeTo(2000, 1)
    })


})






// MODULE DAY 44

// What is the name of the key that we need to use in order to access the data sent to a callback function? 
// data

// Which of the following reduces the modularity of the jquery script?
// code repeatability

// Which operator has to be used in order to access the key in the event handling function?
// .

// When an event occurs, to handle that event, we require?
/// event handlers

// Which method takes the second parameter as opacity?
// fadeTo()

// In total, how many functions can be given to hover()?
// 2

// Which event doesn't require click action to be performed on any HTML element?
// hover()

// Which method works with multiple events on a particular HTML element?
// on()

// When we pass multiple events in a proper structure not in a single line to on() are called?
// modular events

// When we pass multiple events in a single line to on() are called as?
// inline events

// Which of the following is the process of applying the event directly on to the parent?
// event delegation

// Which of the following is the proper way to pass the data to an event handling function?
// object

// Which method executes the event handling function when the tab key is released from the keyboard?
// keyup()

// Which method executes the event handling function when the tab key is pressed from the keyboard?
// keydown()





