document.getElementById("mouseButton").onmouseover = function () {
  document.getElementById("mouseOverText").innerHTML =
    "Mouse is over the button!";
};

document.getElementById("mouseButton").onmouseout = function () {
  document.getElementById("mouseOverText").innerHTML ="";
};

document.getElementById("mouseButton").onclick = function () {
   document.getElementById("mouseOverText").innerHTML =
    "Mouse clicked the button!";
};
