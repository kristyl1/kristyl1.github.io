//Testing - File is linked correctly
//console.log("Testing Hello")

const hours = new Date().getHours() // get the current hour

// const isMorning = hours >= 4 && hours < 12 // is it morning?
// const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
//const isEvening = hours >= 17 || hours < 4 // is it evening?

//Use let to determine variable to display
let textmessage;

//Display the morning message
if (hours >=4 && hours < 12) {
    textmessage = "Hello welcome to the morning!"
}
//Display the afternoon message
else if (hours >= 12 && hours < 17) {
    textmessage = "Hello welcome to the afternoon!"
}
//Display the evening message
else if (hours >= 17 || hours < 4) {
    textmessage = "Hello welcome to the nighttime!"
}

//Display the text message according to the time
const DivWelcome = document.querySelector('#welcome').innerHTML = textmessage;

//Assignment 4 - SECRET MESSAGE - ONLY ADD TO LOCALSTORAGE NOT WEBPAGE
const key = "It's a secret to everybody."
//Quote
const secretmessage = "The only thing we have to fear is fear itself. -Franklin D Roosevelt"

//Run the message to the local storage
localStorage.setItem(key, secretmessage)

//ASSIGNMENT 5 - CAROUSEL
const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}
showImages()

//addEventListener - PREVIOUS BUTTON
const prevbutton = document.querySelector('#prev')
prevbutton.addEventListener('click', () => {
    currentImage--
    showImages() //NEED TO CALL showImages
});

//addEventListner - NEXT BUTTON
const nextbutton = document.querySelector('#next')
nextbutton.addEventListener('click', () => {
    currentImage++
    showImages() //NEED TO CALL showImages
});

//SET THE TIME to move to the next image
function nextimage() {
    currentImage++ //MOVE THE NEXT IMAGE
    showImages() //SHOW THE IMAGES
}

setInterval(() => {
    //code to run Every 5 seconds
    nextimage() //Call the function
},5000)

showImages()
