// E2flRrOTA2EZ05-xQND7ZfJevBWVtOLRh0S83z93c48

const imageContainer = document.getElementById('imagecontainer')

async function getImages(){
    //Logic to connect unsplash, get the images
    const response = await fetch("https://api.unsplash.com/photos/?client_id=E2flRrOTA2EZ05-xQND7ZfJevBWVtOLRh0S83z93c48")
    const imagesData = await response.json()

    imagesData.map(function(i){
        let imageUrl = i.urls.full

        const myImageElement = document.createElement("img")
        // console.log(myImageElement)
        myImageElement.setAttribute("src", imageUrl)
        // console.log(myImageElement)
        imageContainer.append(myImageElement)
    })


}

getImages()


window.addEventListener("scroll", function(){
    let myClientHeight = document.documentElement.clientHeight
    let myScrollHeight = document.documentElement.scrollHeight
    let myScrollTop = document.documentElement.scrollTop

    console.log(myClientHeight, myScrollHeight, myScrollTop)

    if(myClientHeight + myScrollTop >= myScrollHeight){
        getImages()
    }
})


// Which property gives the total height of the content visible on the screen in a single shot?
// clientHeight

// Which property gives the total height of the scroll in the entire page?
// scrollHeight

// Properties like clientHeight, scrollTop, and scrollHeight are accessible using which of the following object?
// window

// Which property gives the height of the content that is scrolled from the top of the page?
// scrollTop





// MODULE DAY 33

// How can we make a loader to be disabled on the screen?
// loader.hidden = true

// How do we get the DOM object in JavaScript?
// getElementbyId()

// How to assign the image source in JavaScript?
// image.src = “url”

// Javascript should be linked after the complete HTML code?
// True

// Which function calls another function after a time interval?
// setTimeout()

// Which keyword is used to wait for some time before storing the data back in a variable?
// await

// Which of the following statements in JavaScript defines arrays?
// It is an ordered list of values

// Which event is used to listen for a scroll action on the window object?
// scroll

