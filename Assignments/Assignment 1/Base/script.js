// ChatGPT Conversation Links:
// 1. https://chatgpt.com/share/679eb669-943c-8009-8f2c-8b1575d31c93
// 2.
// Add as many links as needed

const autoModeSequence = [
  "red",
  "yellow",
  "green",
  "yellow",
  "red",
  "yellow",
  "green",
  "red",
  "red",
  "green",
  "yellow",
  "red",
  "green",
  "yellow",
  "red",
  "yellow",
  "green",
  "yellow",
  "red",
  "yellow",
  "green",
  "red",
  "green",
  "yellow",
  "red",
  "green",
  "yellow",
  "red",
  "yellow",
  "green",
  "yellow",
  "red",
  "red",
  "yellow",
  "green",
  "red",
  "yellow",
  "green",
  "red",
  "yellow",
  "green",
  "yellow",
  "red",
  "yellow",
  "green",
  "yellow",
  "red",
  "yellow",
  "green",
];

//Red Button/Light
let redButton = document.getElementById("red-btn");
let redLight = document.getElementById("red");
redButton.onclick = function() {
  redLight.classList.add("active");
  yellowLight.classList.remove("active");
  greenLight.classList.remove("active");
  if (autoInterval) {
    clearInterval(autoInterval);
  }
  if (randomInterval) {
    clearInterval(randomInterval);
  }
}

//Yellow Button/light
let yellowButton = document.getElementById("yellow-btn");
let yellowLight = document.getElementById("yellow");
yellowButton.onclick = function() {
  yellowLight.classList.add("active");
  redLight.classList.remove("active");
  greenLight.classList.remove("active");
  if (autoInterval) {
    clearInterval(autoInterval);
  }
  if (randomInterval) {
    clearInterval(randomInterval);
  }
}

//Green Button/Light
let greenButton = document.getElementById("green-btn");
let greenLight = document.getElementById("green");
greenButton.onclick = function() {
  greenLight.classList.add("active");
  redLight.classList.remove("active");
  yellowLight.classList.remove("active");
  if (autoInterval) {
    clearInterval(autoInterval);
  }
  if (randomInterval) {
    clearInterval(randomInterval);
  }
}

//Auto Button/Light
let index = 0;
let autoInterval;
let autoButton = document.getElementById("auto-btn");
autoButton.onclick = function() {
  redLight.classList.remove("active");
  yellowLight.classList.remove("active");
  greenLight.classList.remove("active");
  if (autoInterval) {
    clearInterval(autoInterval);
    index = 0;
  }
  if (randomInterval) {
    clearInterval(randomInterval);
  }
  autoInterval = setInterval(function() {
    let color = autoModeSequence[index];
    if (color === "red") {
      redLight.classList.add("active");
      yellowLight.classList.remove("active");
      greenLight.classList.remove("active");
    } else if (color === "yellow") {
      yellowLight.classList.add("active");
      redLight.classList.remove("active");
      greenLight.classList.remove("active");
    } else if (color === "green") {
      greenLight.classList.add("active");
      redLight.classList.remove("active");
      yellowLight.classList.remove("active");
    }
    if (index >= autoModeSequence.length) {
      index = 0;
    }
    index++;
  }, 500);
}

//Random Button/Light
let randomInterval;
let randomIndex;
let randomColor;
let randomButton = document.getElementById("random-btn");
randomButton.onclick = function() {
  redLight.classList.remove("active");
  yellowLight.classList.remove("active");
  greenLight.classList.remove("active");
  if (autoInterval) {
    clearInterval(autoInterval);
  }
  if (randomInterval) {
    clearInterval(randomInterval);
  }
  randomInterval = setInterval(function() {
    randomIndex = Math.floor(Math.random() * autoModeSequence.length);
    randomColor = autoModeSequence[randomIndex];
    if (randomColor === "red") {
      redLight.classList.add("active");
      yellowLight.classList.remove("active");
      greenLight.classList.remove("active");
    } else if (randomColor === "yellow") {
      yellowLight.classList.add("active");
      redLight.classList.remove("active");
      greenLight.classList.remove("active");
    } else if (randomColor === "green") {
      greenLight.classList.add("active");
      redLight.classList.remove("active");
      yellowLight.classList.remove("active");
    }
  }, 500);
}

//Stop Button/Light
let stopButton = document.getElementById("stop-btn");
stopButton.onclick = function() {
  redLight.classList.remove("active");
  yellowLight.classList.remove("active");
  greenLight.classList.remove("active");
  if (autoInterval) {
    clearInterval(autoInterval);
  }
  if (randomInterval) {
    clearInterval(randomInterval);
  }
}