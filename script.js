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
let timeRemaining = 30
let intervalId
let showMoles
let sounds = ["hitSound.mp3", "hurtSound2.mp3", "hitSound3.mp3"]
let moleType = [
  "images/moleStrong.svg",
  "images/moleEvil2.svg",
  "images/mole1.svg",
  "images/moleFrozen.svg",
]

let moles = document.querySelectorAll(".mole")
let s = document.querySelector(".score")
let timer = document.querySelector(".time")
let winner = document.querySelector(".winner")
let loser = document.querySelector(".Loser")
let header = document.querySelector(".header")
let frozen = document.querySelector(".Frozen")

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

const gameLogic = () => {
  showMoles = setInterval(() => {
    let numMolesToShow = Math.floor((Math.random() * moles.length) / 3) + 1

    let selectedMoles = pickRandomMoles(numMolesToShow)

    let randomMoleType = Math.floor(Math.random() * moleType.length)

    selectedMoles.forEach((selectedMole) => {
      selectedMole.src = moleType[randomMoleType]
      selectedMole.classList.add("up")

      let duration = Math.floor(Math.random() * 3000) + 1000

      setTimeout(() => {
        selectedMole.classList.remove("up")
      }, duration)
    })
  }, 3000)

  //timer and losing winning method

  intervalId = setInterval(() => {
    if (timeRemaining > 0 && score >= 60) {
      console.log("winner")
      clearInterval(intervalId)
      clearInterval(showMoles)
      winner.style.display = "block"
    } else if (timeRemaining <= 0 && score < 60) {
      console.log("loser")
      clearInterval(intervalId)
      clearInterval(showMoles)
      loser.style.display = "block"
    } else {
      timeRemaining--
      timer.innerHTML = timeRemaining
    }
  }, 2000)
}
//selet number of moles to show and show them by adding and removing class

const startGame = () => {
  timeRemaining = 30
  score = 0
  timer.innerHTML = timeRemaining
  s.innerHTML = score
  winner.style.display = "none"
  loser.style.display = "none"

  gameLogic()
}

const freeze = () => {
  frozen.style.display = "block"
  clearInterval(showMoles)

  setTimeout(() => {
    gameLogic()
    frozen.style.display = "none"
  }, 5000)
}

//loop through moles and if they have the class up increase score and change image
moles.forEach((singleMole) => {
  singleMole.addEventListener("click", () => {
    if (singleMole.classList.contains("up")) {
      if (singleMole.src.includes("moleEvil2.svg")) {
        singleMole.src = "images/moleEvil.svg"
        new Audio("laugh.wav").play()
        timeRemaining -= 5
      } else if (singleMole.src.includes("moleStrong.svg")) {
        if (!singleMole.dataset.clicks) {
          singleMole.dataset.clicks = 0
        }

        let clicks = parseInt(singleMole.dataset.clicks)

        clicks++

        singleMole.dataset.clicks = clicks

        new Audio("hit.mp3").play()

        if (clicks >= 3) {
          singleMole.src = "images/moleHurt.svg"
          score += 10
          let randomSound = Math.floor(Math.random() * sounds.length)
          new Audio(sounds[randomSound]).play()
          singleMole.dataset.clicks = 0
        }
      } else if (singleMole.src.includes("moleFrozen.svg")) {
        freeze()
      } else {
        singleMole.src = "images/moleHurt.svg"

        let randomSound = Math.floor(Math.random() * sounds.length)
        new Audio(sounds[randomSound]).play()

        score += 5
        s.innerHTML = score
      }

      setTimeout(() => {
        singleMole.classList.remove("up")
        singleMole.dataset.clicks = 0
      }, 1000)
    }
  })
})

let playAgain = document.querySelectorAll(".playAgain")
playAgain.forEach((button) => {
  button.addEventListener("click", () => {
    startGame()
  })
})

//startGame()

//I COPIED THIS PART
//change curson to hammer
const customCursor = document.getElementById("custom-cursor")

container.addEventListener("mouseenter", () => {
  customCursor.style.display = "block"
})

container.addEventListener("mouseleave", () => {
  customCursor.style.display = "none"
})

container.addEventListener("mousemove", (e) => {
  const cursorWidth = customCursor.offsetWidth
  const cursorHeight = customCursor.offsetHeight

  customCursor.style.left = e.pageX - cursorWidth / 2 + "px"
  customCursor.style.top = e.pageY - cursorHeight / 2 + "px"
})

container.addEventListener("click", () => {
  customCursor.classList.add("click-effect")

  setTimeout(() => {
    customCursor.classList.remove("click-effect") //
  }, 150)
})
