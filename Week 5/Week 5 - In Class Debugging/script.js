/* Working Example: https://65bab3d865b4cc1d2a000c8b--phenomenal-sunshine-a0d203.netlify.app/*/

var secretNumber = Math.floor(Math.random() * 11); //should be *10 +1 not *11
var attempts = 3;


var guessButton = document.getElementById("guessButton");
guessButton.onclick = guessNumber;

function guessNumber() {
  var userGuess = document.getElementsByClassName("userInput").value; //meant to be getElementById

  if (userGuess == secretNumber) {
    document.getElementById("result").innerText = //this was set to as getElementsById, but it should be getElementById
      "You guessed correctly! The number was " + secretNumber;
  } else {
    attempts --;//this was set two decrese by 2, not 1
    if (attempts > 0) {
      document.getElementById("result").innerText =
        "Wrong guess. Try again! You have " + attempts + " attempts left.";
    } else {
      document.getElementById("result").innerText =
        "Game over! The correct number was " + secretNumber;
      resetGame(); //this is not defined
    }
  }
}
