const fileInput = document.getElementById("file");

fileInput.addEventListener("change", handleFileSelect);

function handleFileSelect(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    const fileContent = event.target.result;
    console.log("File Contents: ", fileContent);
  };

  reader.readAsText(file);
}
