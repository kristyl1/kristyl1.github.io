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