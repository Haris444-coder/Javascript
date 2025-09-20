document
  .getElementById("fetchJokes")
  .addEventListener("click", async function () {
    const joke1 = await fetchJoke(
      "https://official-joke-api.appspot.com/jokes/programming/random"
    );
    const joke2 = await fetchJoke(
      "https://official-joke-api.appspot.com/jokes/programming/random"
    );
    const joke3 = await fetchJoke(
      "https://official-joke-api.appspot.com/jokes/programming/random"
    );
    const joke4 = await fetchJoke(
      "https://official-joke-api.appspot.com/jokes/programming/random"
    );

    document.getElementById("jokesOutput").innerHTML =
      `Joke 1: ${joke1.setup} ${joke1.punchline}<br>` +
      `Joke 2: ${joke2.setup} ${joke2.punchline}<br>` +
      `Joke 3: ${joke3.setup} ${joke3.punchline}<br>` +
      `Joke 4: ${joke4.setup} ${joke4.punchline}<br>`;
  });

async function fetchJoke(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data[0];
}
