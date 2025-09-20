function checkNumber() {
  let num = 25;
  if (num > 15) {
    document.getElementById("ifStatement").innerHTML = "num is greater than 15";
  } else if (num > 10) {
    document.getElementById("ifStatement").innerHTML =
      "num is greater than 10 but less than or equal to 15";
  } else {
    document.getElementById("ifStatement").innerHTML =
      "num is less than or equal to 10";
  }
}
