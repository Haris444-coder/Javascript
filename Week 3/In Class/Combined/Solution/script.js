// Generate a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

// Counter for guess attempts
let attempts = 7;

// Named function to make a guess
function makeGuess() {
  let userGuess = document.getElementById("guess").value;
  attempts = attempts - 1;

  if (userGuess > secretNumber) {
    document.getElementById("clue").innerHTML =
      "Too high! You have " + attempts + " attempts left.";
  } else if (userGuess < secretNumber) {
    document.getElementById("clue").innerHTML =
      "Too low! You have " + attempts + " attempts left.";
  } else {
    document.getElementById("clue").innerHTML =
      "Congratulations! You've guessed the number!";
    document.getElementById("guessButton").disabled = true;
  }

  if (attempts === 0) {
    document.getElementById("clue").innerHTML =
      "Sorry, you're out of attempts! The number was " + secretNumber;
    document.getElementById("guessButton").disabled = true;
  }
}

// Anonymous function for onmouseover
let hintButton = document.getElementById("hintButton");
hintButton.onmouseover = function () {
  if (secretNumber < 25) {
    document.getElementById("hint").innerHTML =
      "The secret number is less than 25. Good luck!";
  } else if (secretNumber >= 25 && secretNumber < 50) {
    document.getElementById("hint").innerHTML =
      "The secret number is between 25 and 50. Good luck!";
  } else if (secretNumber >= 50 && secretNumber < 75) {
    document.getElementById("hint").innerHTML =
      "The secret number is between 50 and 75. Good luck!";
  } else {
    document.getElementById("hint").innerHTML =
      "The secret number is greater than 75. Good luck!";
  }
};

// Assigning the makeGuess function to the guess button
let guessButton = document.getElementById("guessButton");
guessButton.onclick = makeGuess;
