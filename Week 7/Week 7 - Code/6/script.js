let form = document.getElementById("myForm");
let passwordField = document.getElementById("password");
let confirmPasswordField = document.getElementById("confirmPassword");

passwordField.addEventListener("input", checkPasswordMatch);

confirmPasswordField.addEventListener("input", checkPasswordMatch);

function checkPasswordMatch() {
  console.log(passwordField.value === confirmPasswordField.value);
  if (passwordField.value !== confirmPasswordField.value) {
    confirmPasswordField.setCustomValidity("Passwords do not match");
  } else {
    confirmPasswordField.setCustomValidity("");
  }
}
