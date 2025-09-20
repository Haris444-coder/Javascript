// ChatGPT Conversation Links:
// 1. https://chatgpt.com/share/67b2c095-d0c4-8009-a294-75eb61c0265a
// 2.
// Add as many links as needed

let words = ["PIZZA", "UNICORN", "ROBOT", "BANANA", "SPACESHIP", "NINJA"];

let currentWord = "";
let guessedLetters = [];
let lives = 6;
let gameOver = false;
let timeLeft = 10;
let timerStarted = false;
let timerInterval;

let gameContent = document.getElementById("game-content");
let classicModeBtn = document.getElementById("classic-mode");
let timeModeBtn = document.getElementById("time-mode");
let wordContainer = document.getElementById("word-container");
let livesDisplay = document.getElementById("lives-count");
let messageDisplay = document.getElementById("message");
let keys = document.querySelectorAll(".key");

function startGame() {
  resetGame();
  let randomIndex = Math.floor(Math.random() * words.length);
  currentWord = words[randomIndex];
  guessedLetters = [];
  lives = 6;

  gameContent.style.display = "block";
  livesDisplay.textContent = lives;
  messageDisplay.textContent = "";
  gameOver = false;

  createWordDisplay(); //changed this to createWordDisplay(); intead of updateWordDisplay();
}

function createWordDisplay() { //changed this to createWordDisplay(); intead of updateWordDisplay();
  wordContainer.innerHTML = "";

  for (let i = 0; i < currentWord.length; i++) {
    let span = document.createElement("span");
    span.textContent = "_";
    span.classList.add("word-underscore");
    wordContainer.appendChild(span);
  }
}

//added/updated the updateWordDisplay(); function
function updateWordDisplay() {
  for (let i = 0; i < currentWord.length; i++) {
    let span = wordContainer.children[i];
    if (guessedLetters.includes(currentWord[i])) {
      span.textContent = currentWord[i];
      span.classList.remove("word-underscore");
      span.classList.add("word-letter");
    }
    else {
      span.textContent = "_";
      span.classList.remove("word-letter");
      span.classList.add("word-underscore");
    }
  }
}

function resetGame() {
  clearInterval(timerInterval);
  guessedLetters = [];
  lives = 6;
  gameOver = false;
  timeLeft = 10;
  timerStarted = false;
  gameContent.style.display = "block";
  livesDisplay.textContent = lives;
  messageDisplay.textContent = "";
  document.getElementById("timer").style.display = "none";
  document.querySelectorAll(".key").forEach((key) => {
    key.disabled = false;
  });
}

classicModeBtn.addEventListener("click", () => {
  startGame();
});


//My code starts here
function handleInput(e) {
  let letter = "";
  if (gameOver) return;
  if (e.type === "keydown" && e.key.match(/^[a-zA-Z]$/)) {
    letter = e.key.toUpperCase();
  }
  else if (e.type === "click" && e.target.classList.contains("key")) {
    letter = e.target.dataset.key.toUpperCase();
  }
  else {
    return;
  }

  if (!letter || guessedLetters.includes(letter)) {
    return;
  }

  if (currentMode === "auto" && !timerStarted) {
    timerStarted = true;
    startTimer();
  }

  let button = document.querySelector(`.key[data-key="${letter.toLowerCase()}"]`);
  if (button) {
    button.disabled = true;
  }

  if (currentWord.includes(letter)) {
    if (!guessedLetters.includes(letter)) {
      guessedLetters.push(letter);
    }
  } else {
    if (!guessedLetters.includes(letter)) {
      lives--;
      livesDisplay.textContent = lives;
      guessedLetters.push(letter);
      if (lives === 0) {
        messageDisplay.textContent = "💀 Game Over! The word was: " + currentWord;
        gameOver = true;
        if (currentMode === "auto") {
          clearInterval(timerInterval);
        }
      }
    }
  }
  updateWordDisplay();

  let wordGuessed = true;
  for (let i = 0; i < currentWord.length; i++) {
    if (!guessedLetters.includes(currentWord[i])) {
      wordGuessed = false;
      break;
    }
  }
  if (wordGuessed) {
    messageDisplay.textContent = "🎉 You Win!";
    gameOver = true;
    if (currentMode === "auto") {
      clearInterval(timerInterval);
    }
  }
}

function startTimer() {
  document.getElementById("timer").style.display = "block";
  document.getElementById("time-left").textContent = timeLeft;
  timerInterval = setInterval(function() {
    if (timeLeft > 0) {
      timeLeft--;
      document.getElementById("time-left").textContent = timeLeft;
    }
    else {
      clearInterval(timerInterval);
      messageDisplay.textContent = "💀 Game Over! The word was: " + currentWord;
        gameOver = true;
    }
  }, 1000);
}

let currentMode = "classic";
function startAutoMode() {
  currentMode = "auto";
  resetGame();
  startGame();
  document.getElementById("timer").style.display = "block";
  document.getElementById("time-left").textContent = timeLeft;
}

document.getElementById("time-mode").addEventListener("click", () => {
  startAutoMode();
});

["keydown", "click"].forEach((event) => {
  document.addEventListener(event, handleInput);
});
