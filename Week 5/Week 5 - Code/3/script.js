document.getElementById("demoButton").onclick = function () {
  var numbers = [1, 2, 3, 4, 5];
  var target = 3;
  debugger; // Start debugging
  //debugger will stop the code at that point and allow you to find the source of the error

  var found = searchTarget(numbers, target); // Step Into this function

  if (found) {
    document.getElementById("demo").innerHTML = "Found target in the array!";
  } else {
    document.getElementById("demo").innerHTML =
      "Target not found in the array!";
  }
};

function searchTarget(arr, target) {
  var found = false;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      found = true;
    } else {
      found = false;
    }
  }

  return found;
}

//to fix the code, we need to move the "return found;" within the for loop