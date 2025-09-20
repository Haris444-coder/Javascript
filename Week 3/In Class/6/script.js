/* 

Logical operators are used to determine the logic between variables or values. JavaScript includes logical operators such as && (and), || (or), and ! (not).

&& (and): Returns true if both statements are true
|| (or): Returns true if at least one statement is true
! (not): Reverses the result, returns false if the result is true and vice versa
*/

function checkLogic() {
  let logicalVar = 10;
  if (logicalVar > 5 && logicalVar < 15) {
    document.getElementById("logicalOperators").innerHTML =
      "logicalVar is between 5 and 15";
  } else {
    document.getElementById("logicalOperators").innerHTML =
      "logicalVar is not between 5 and 15";
  }
}
