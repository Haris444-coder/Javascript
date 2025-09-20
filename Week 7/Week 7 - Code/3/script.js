let form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let select = form.elements["colors"];
  let selectedOption = select.value;
  let selectedOptionIndex = select.selectedIndex;
  let optionsCount = select.length;
  let firstOption = select.options[0];
  console.log(selectedOption);
  console.log(selectedOptionIndex);
  console.log(optionsCount);
  console.log(firstOption);
});
