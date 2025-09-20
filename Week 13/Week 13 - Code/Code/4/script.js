document.getElementById("fetchJokes").addEventListener("click", function () {
  Promise.all([
    fetchJoke("https://official-joke-api.appspot.com/jokes/programming/random"),
    fetchJoke("https://official-joke-api.appspot.com/jokes/programming/random"),
    fetchJoke("https://official-joke-api.appspot.com/jokes/programming/random"),
    fetchJoke("https://official-joke-api.appspot.com/jokes/programming/random"),
  ]).then(([joke1, joke2]) => {
    document.getElementById("jokesOutput").innerHTML =
      "Joke 1: " +
      joke1.setup +
      " " +
      joke1.punchline +
      "<br>" +
      "Joke 2: " +
      joke2.setup +
      " " +
      joke2.punchline +
      "<br>";
  });
});

function fetchJoke(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        resolve(data[0]); // Resolve with the first joke object
      } else {
        reject(new Error("Request failed with status: " + xhr.status));
      }
    };
    xhr.send();
  });
}
