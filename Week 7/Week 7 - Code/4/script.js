let form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let colorFields = form.elements["color"];

  for (let i = 0; i < colorFields.length; i++) {
    if (colorFields[i].checked) {
      console.log("Selected color: " + colorFields[i].value);
    }
  }
});
