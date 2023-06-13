const myAudio = document.querySelector("audio") 
const myPlay = document.getElementById("play")

isAudioPlaying = false

function playAudio(){
    isAudioPlaying = true 
    myAudio.play()
    myPlay.classList.replace("fa-play", "fa-pause")
}

function pauseAudio(){
    isAudioPlaying = false 
    myAudio.pause()
    myPlay.classList.replace("fa-pause", "fa-play" )
}


myPlay.addEventListener("click", function(){
    //Write the logic to play the audio and pause the audio
    if(isAudioPlaying){
        pauseAudio()
    }else{
        playAudio()
    }
})

const data = [
    {
    singer: "Anirudh Ravichander", 
    song: "Emmanavo", 
    info: "image1",
    indo: "audio1"
    },
    {
    singer: "Hesham Abdul Wahab", 
    song: "Na roja nuvve", 
    info: "image2",
    indo: "audio2"
    },
    {
    singer: "Manu", 
    song: "Annaya annavante", 
    info: "image3",
    indo: "audio3"
    }
]



const mySinger = document.getElementById("singer")
const mySong = document.getElementById("song")
const myImage = document.querySelector("img")
const myForward = document.getElementById("forward")
const myBackward = document.getElementById("backward")
const myProgressBar = document.getElementById("progressbar")


function loadSong(song)
{
    mySinger.innerText = song.singer
    mySong.innerText = song.song
    myImage.src = `33 class/images/${song.info}.jpg`//IMAGES/image-2.jpg
    myAudio.src = `33 class/audio/${song.indo}.mp3`//MUSIC/image-2.mp3
}


let songIndex = 0

myForward.addEventListener("click", function(){
    songIndex ++
    if(songIndex > data.length -1){
        songIndex = 0
    }

    //Logic where the next song will be played
    console.log(songIndex)
    loadSong(data[songIndex])
    
    playAudio()
    // loadData(myData [0])
})


myBackward.addEventListener("click", function(){
    songIndex-- //songIndex = 2
    if (songIndex < 0){
        songIndex = 2
    }
    console.log(songIndex)//1 
    loadSong(data[songIndex])//data[1]
    playAudio()
})

// Which event can be used on audio to get the properties related to time?
// timeupdate

// How can we fill the progress bar?
// using currentTime percentage

// CurrentTime and duration can be fetched by using which of the following property?
// srcElement


const DurationTime = document.getElementById("duration")
const CurrentTime = document.getElementById("currentTime")



function getData(event){
    const myCurrentTime = event.srcElement.currentTime 
    const myDuration = event.srcElement.duration // console.log(myCurrentTime, myDuration)
    
    const audioDurationPercentage = (myCurrentTime / myDuration) * 100 // console.log(audioDuration Percentage) 
    myProgressBar.style.width = `${audioDurationPercentage}%`
    
    const durationInMinutes = Math.floor((myDuration / 60)) 
    console.log(durationInMinutes)//2
    
    let durationInSeconds = Math.floor((myDuration % 60)) 
    console.log(durationInSeconds)//6
    
    if(durationInSeconds < 9){
        durationInSeconds = `0${durationInSeconds} `// --> 06
    }
        
    console.log(durationInMinutes, durationInSeconds)
    
    DurationTime.innerText = `${durationInMinutes}:${durationInSeconds}`

    const currentTimeInMinutes = Math.floor((myCurrentTime / 60))
    let currentTimeInSeconds = Math.floor((myCurrentTime % 60))
    
    if(currentTimeInSeconds < 9){
        currentTimeInSeconds = `0${currentTimeInSeconds}`
     } // --> 06

    CurrentTime.innerText = `${currentTimeInMinutes}:${currentTimeInSeconds}`
}

myAudio.addEventListener("timeupdate", getData)

























































