var countdownElement = document.getElementById("countdown");
var stopButton = document.getElementById("stopButton");

var countdownValue = 10;
countdownElement.innerHTML = countdownValue;

var countdownInterval = setInterval(function () {
  countdownValue--;
  countdownElement.innerHTML = countdownValue;

  if (countdownValue <= 0) {
    clearInterval(countdownInterval);
  }
}, 1000);

stopButton.onclick = function () {
  clearInterval(countdownInterval);
};
