document.getElementById("runButton").addEventListener("click", function () {
  console.log("Dog");
  setTimeout(() => {
    console.log("Cat");
  }, 2000);
  console.log("Bird");
});
