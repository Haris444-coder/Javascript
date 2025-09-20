document.getElementById("demoButton").onclick = function () {
  var arr = [1, 2, 3];
  document.getElementById("demo").innerHTML = arr1[3];
  //arrays only go up to the length of the array - 1, so in the example of arr[1, 2, 3] it has a length of 2(3-1)
  //therefore arr[3] is undefined
  //arr1 is not defined, it should be arr
};
