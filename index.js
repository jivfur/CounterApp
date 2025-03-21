let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}
function save() {
    saveEl.innerText += count + "-"
    count = 0
}


// let username = "per"
// let message = "You have tree new notifications"
// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser)

// // Create two variables, name and greeting. The name variable should store your name,
// // and the greeting should store e.g. "Hi, my name is "
// let name = "Ivan"
// let greeting = "Hi, my name is"


// // Create a third variable, myGreeting, that contatenates the two strings
// // Log myGreeting to the console

// let myGreeting = greeting + " " + name
// console.log(myGreeting)

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el")

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
let name = "Ivan"
let greeting = "Welcome back "

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greeting + name
welcomeEl.innerText += "👋"
