document
  .getElementById("selectFile")
  .addEventListener("change", function (event) {
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onload = function (event) {
      // Load pixar.json
      let contents = event.target.result;
      let json = JSON.parse(contents);
      for (i = 0; i < json.movies.length; i++) {
        console.log(json.movies[i]);
      }
    };

    reader.onerror = function (event) {
      console.error("File could not be read! Code " + event.target.error.code);
    };

    reader.readAsText(file);
  });
