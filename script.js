console.log("conneted")

let numberOfMoles = 8

const container = document.querySelector(".container")

//create many moles holes dynamically
for (let i = 0; i < numberOfMoles; i++) {
  let hole = document.createElement("div")

  hole.classList.add("moleHole")
  hole.innerHTML = `
  
  
      <img class="mole" src="images/mole1.svg" alt="" />
 
  `
  container.appendChild(hole)
}

//GLOBAL VARIABLES
let score = 0

//select all moles
const moles = document.querySelectorAll(".mole")

//score
const s = document.querySelector(".score")

//pick random set of moles
const pickRandomMoles = (num) => {
  let randomMoles = []
  let pickedIndices = new Set()

  while (randomMoles.length < num) {
    let randomIndex = Math.floor(Math.random() * moles.length)
    if (!pickedIndices.has(randomIndex)) {
      pickedIndices.add(randomIndex)
      randomMoles.push(moles[randomIndex])
    }
  }
  return randomMoles
}

//selet number of moles to show and show them by adding and removing class

let showMoles = setInterval(() => {
  let numMolesToShow = Math.floor((Math.random() * moles.length) / 3) + 1

  let selectedMoles = pickRandomMoles(numMolesToShow)

  selectedMoles.forEach((selectedMole) => {
    selectedMole.src = "images/mole1.svg"
    selectedMole.classList.add("up")

    let duration = Math.floor(Math.random() * 3000) + 1000

    setTimeout(() => {
      selectedMole.classList.remove("up")
    }, duration)
  })
}, 2000)

//loop through moles and if they have the class up increase score and change image
moles.forEach((singleMole) => {
  singleMole.addEventListener("click", () => {
    if (singleMole.classList.contains("up")) {
      singleMole.src = "images/moleHurt.svg"

      setTimeout(() => {
        singleMole.classList.remove("up")
      }, 1000)

      score += 5
      s.innerHTML = score

      if (score > 10) {
        console.log("winner")
      }
      console.log(score)
    }
  })
})

//timer and losing winning method
let timeRemaining = 30
let timer = document.querySelector(".time")
let winner = document.querySelector(".winner")

timer.innerHTML = timeRemaining

let intervalId = setInterval(() => {
  if (timeRemaining > 0 && score >= 60) {
    console.log("winner")
    clearInterval(intervalId)
    clearInterval(showMoles)
    winner.style.display = "block"
  } else if (timeRemaining === 0 && score < 60) {
    console.log("loser")
    clearInterval(intervalId)
    clearInterval(showMoles)
  } else {
    timeRemaining--
    timer.innerHTML = timeRemaining
  }
}, 1000)

/*
const customCursor = document.getElementById("custom-cursor")

let index = 0

hammerImages = ["url('hammer.svg')", "url('mole.png')", "url('hammer.svg')"]
//copied that
document.addEventListener("mousemove", (e) => {
  customCursor.style.left = e.pageX + "px"
  customCursor.style.top = e.pageY + "px"
})

document.addEventListener("click", () => {
  const Interval = setInterval(() => {
    customCursor.style.background = hammerImages[index]
    customCursor.style.backgroundPosition = "center"
    customCursor.style.backgroundRepeat = "no-repeat"
    customCursor.style.backgroundSize = "contain"

    index++

    if (index >= hammerImages.length) {
      clearInterval(Interval)
      index = 0
    }
  }, 500)
})*/
