let strong = document.querySelector(".strong")
let Evil = document.querySelector(".Evil")
let Regular = document.querySelector(".Regular")
let Froozen = document.querySelector(".Froozen")
let intro = document.querySelector(".intro")
let outro = document.querySelector(".outro")
let button = document.querySelector(".next")
let clicks = 0
let instructionButton = document.querySelector(".instructionsButton")
let container = document.querySelector(".container")
let close = document.querySelector(".close")
let welcome = document.querySelector(".Welcome")

button.addEventListener("click", () => {
  if (clicks == 0) {
    intro.style.display = "block"
    welcome.style.display = "none"
  }
  if (clicks == 1) {
    welcome.style.display = "none"
    intro.style.display = "none"
    Evil.style.display = "block"
    setTimeout(() => {
      document.querySelector(".evilImage").classList.add("up")
    }, 300)
  }

  if (clicks == 2) {
    welcome.style.display = "none"
    Regular.style.display = "block"
    Evil.style.display = "none"
    intro.style.display = "none"
    setTimeout(() => {
      document.querySelector(".regularImage").classList.add("up")
    }, 300)
  }

  if (clicks == 3) {
    welcome.style.display = "none"
    Regular.style.display = "none"
    Evil.style.display = "none"
    intro.style.display = "none"
    strong.style.display = "block"

    setTimeout(() => {
      document.querySelector(".strongImage").classList.add("up")
    }, 300)
  }

  if (clicks == 4) {
    Regular.style.display = "none"
    Evil.style.display = "none"
    intro.style.display = "none"
    strong.style.display = "none"
    Froozen.style.display = "block"

    setTimeout(() => {
      document.querySelector(".froozenImage").classList.add("up")
    }, 300)
  }

  if (clicks == 5) {
    Regular.style.display = "none"
    Evil.style.display = "none"
    intro.style.display = "none"
    strong.style.display = "none"
    Froozen.style.display = "none"
    outro.style.display = "block"
    button.innerHTML = "Play"

    if (button.innerHTML === "Play") {
      button.addEventListener("click", function () {
        window.location.href = "index.html"
      })
    }
  }

  clicks++
})

instructionButton.addEventListener("click", () => {
  document.querySelector(".instruction").style.display = "block"
  container.style.display = "none"
})

close.addEventListener("click", () => {
  document.querySelector(".instruction").style.display = "none"
  container.style.display = "block"
})
