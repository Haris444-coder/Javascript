var counter = 1;
var counter2 = 1;
var output = "";

while (counter < 1) {
  output += counter + "<br>";
  counter++;
}

do {
  output += counter2 + "<br>";
  counter2++;
} while (counter2 < 1);

document.getElementById("output").innerHTML = output;
