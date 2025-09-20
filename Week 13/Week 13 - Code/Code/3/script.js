document.getElementById("fetchJokes").addEventListener("click", function () {
  getJoke(
    "https://official-joke-api.appspot.com/jokes/programming/random",
    function (joke1) {
      document.getElementById("jokesOutput").innerHTML +=
        "Joke 1: " + joke1[0].setup + " " + joke1[0].punchline + "<br>";
      getJoke(
        "https://official-joke-api.appspot.com/jokes/programming/random",
        function (joke2) {
          document.getElementById("jokesOutput").innerHTML +=
            "Joke 2: " + joke2[0].setup + " " + joke2[0].punchline + "<br>";
          getJoke(
            "https://official-joke-api.appspot.com/jokes/programming/random",
            function (joke3) {
              document.getElementById("jokesOutput").innerHTML += "";
              getJoke(
                "https://official-joke-api.appspot.com/jokes/programming/random",
                function (joke4) {
                  document.getElementById("jokesOutput").innerHTML +=
                    "Joke 4: " +
                    joke4[0].setup +
                    " " +
                    joke4[0].punchline +
                    "<br>";
                }
              );
            }
          );
        }
      );
    }
  );
});

function getJoke(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      callback(data);
    }
  };
  xhr.send();
}
