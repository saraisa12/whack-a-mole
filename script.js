console.log("conneted")
let pickRandomHoles = []

//create many moles holes dynamically
for (let i = 0; i < 3; i++) {
  let hole = document.createElement("div")

  hole.innerHTML = `
  
  <div class="moleHole">
      <img src="mole2.png" alt="" />
    </div>
  `
  document.body.appendChild(hole)

  pickRandomHoles.push(Math.floor(Math.random() * 4))
}

console.log(pickRandomHoles)

//GLOBAL VARIABLES

let score = 0
//select all images
const image = document.querySelectorAll("img")

//choose random number of seconds in how the moles will appear
const randomTime = () => {
  const times = [1000, 2000, 3000, 4000, 5000, 6000]
  let number = Math.floor(Math.random() * times.length)
  console.log("times " + times[number])
  return times[number]
}

//toggle between appearing and hiding
const timer = () => {
  image[0].style.opacity = image[0].style.opacity === "0" ? "1" : "0"
  let nextTime = randomTime()
  setTimeout(timer, nextTime)
  console.log("random time " + nextTime)
}

//whenever the image is clicked score is increased
const increaseScore = () => {
  if (image[0].style.opacity == 1) {
    score += 5

    console.log("Score:", score)
  }
  return score
}

image[0].addEventListener("click", increaseScore)

//setTimeout(timer, randomTime())

// Initialize global variables
// Define variables for score, timer, mole position, mole visibility, game state, etc.

// Set up a random mechanism to display the mole
// Use random method to make the mole appear

// Make the mole go up and down
// Display the mole for a brief time, then hide it

// The mole should only be clickable if it is visible
// Ignore clicks when the mole is not shown

// The user should be able to start the game
// Implement a "Start" button to trigger the game

// A timer should be displayed, and the game should stop when the counter ends

// The mole should be displayed for a few seconds

// Score should increase when the mole is clicked
// Increment the score and update the display whenever the mole is clicked

//make the cursor a hammer
const customCursor = document.getElementById("custom-cursor")

document.addEventListener("mousemove", (e) => {
  customCursor.style.left = e.pageX + "px"
  customCursor.style.top = e.pageY + "px"
})
