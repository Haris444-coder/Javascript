let myForm = document.getElementById("myForm");

let nameField = document.getElementById("name");

nameField.addEventListener("blur", function () {
  console.log("Blur event triggered!");
});

nameField.addEventListener("focus", function () {
  console.log("Focus event triggered!");
});

nameField.addEventListener("input", function () {
  console.log("Input event triggered!");
});

nameField.addEventListener("change", function () {
  console.log("Change event triggered!");
});
