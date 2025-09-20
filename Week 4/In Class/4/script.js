var output = "";
var i = 10;
do {
  output += i * 3 + "<br>";
  i++;
} while (i < 5);
document.getElementById("output").innerHTML = output;
