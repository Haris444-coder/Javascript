// Deployed Code: https://lambent-sorbet-ce4c09.netlify.app/

var countdownElement = document.getElementById("countdown");
var levelOneButton = document.getElementById("levelOne");
var levelTwoButton = document.getElementById("levelTwo");
var levelThreeButton = document.getElementById("levelThree");
var levelFourButton = document.getElementById("levelFour");
var resultElement = document.getElementById("result");
var level = "";
var attempts = 0;

var countdownInterval;
var countdownValue;

var scoreboardElement = document.getElementById("scoreboard");

var scoreboardHeader = document.createElement("h2");
scoreboardHeader.innerText = "Scoreboard";
scoreboardElement.appendChild(scoreboardHeader);

var winsSection = document.createElement("div");
winsSection.innerText = "Wins: ";
scoreboardElement.appendChild(winsSection);

var lossesSection = document.createElement("div");
lossesSection.innerText = "Losses: ";
scoreboardElement.appendChild(lossesSection);

function startCountdown(startValue, interval) {
  countdownValue = startValue;
  countdownElement.innerText = countdownValue;

  countdownInterval = setInterval(function () {
    countdownValue--;
    countdownElement.innerText = countdownValue;

    if (countdownValue <= -1) {
      clearInterval(countdownInterval);
      countdownInterval = null;
      var loseImage = document.createElement("img");
      loseImage.src = "lose.png";
      lossesSection.appendChild(loseImage);
      resultElement.innerHTML =
        "You lost! " + "<br>Level: " + level + "<br>Attempts: " + attempts;
    }
  }, interval);
}

document.body.addEventListener("keydown", function (e) {
  e.preventDefault();
  if (e.key === " " && countdownInterval) {
    if (countdownValue === 0) {
      clearInterval(countdownInterval);
      countdownInterval = null;
      var winImage = document.createElement("img");
      winImage.src = "win.png";
      winsSection.appendChild(winImage);
      resultElement.innerHTML =
        "You won!" + "<br>Level: " + level + "<br>Attempts: " + attempts;
    } else {
      clearInterval(countdownInterval);
      countdownInterval = null;
      var loseImage = document.createElement("img");
      loseImage.src = "lose.png";
      lossesSection.appendChild(loseImage);
      resultElement.innerHTML =
        "You lost!" + "<br>Level: " + level + "<br>Attempts: " + attempts;
    }
  }
});

levelOneButton.addEventListener("click", function () {
  clearInterval(countdownInterval);
  startCountdown(50, 150);
  level = "Easy";
  attempts++;
});

levelTwoButton.addEventListener("click", function () {
  clearInterval(countdownInterval);
  startCountdown(50, 100);
  level = "Medium";
  attempts++;
});

levelThreeButton.addEventListener("click", function () {
  clearInterval(countdownInterval);
  startCountdown(50, 50);
  level = "Hard";
  attempts++;
});

levelFourButton.addEventListener("click", function () {
  clearInterval(countdownInterval);
  startCountdown(50, 10);
  level = "Super Hard";
  attempts++;
});
