let form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let nameField = form.elements["name"];
  let phoneField = form.elements.phone;
  console.log(nameField.value);
  console.log(phoneField.value);
});
