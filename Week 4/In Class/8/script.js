var output = "";
for (var i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  output += i + "<br>";
}
document.getElementById("output").innerHTML = output;
