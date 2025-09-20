var fruit = "Apple";
var output;
switch (fruit) {
  case "Banana":
    output = "You chose a Banana.";
    break;
  case "Apple":
    output = "You chose an Apple.";
    break;
  default:
    output = "We don't have that fruit.";
}
document.getElementById("output").innerHTML = output;
