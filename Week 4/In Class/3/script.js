var output = "";
var i = 0;
while (i < 5) {
  output += i * 3 + "<br>";
  i++;
}
document.getElementById("output").innerHTML = output;
