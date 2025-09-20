// ChatGPT Conversation Links:
// 1. https://chatgpt.com/c/67b8ba40-4df4-8009-92a7-a210c32677e0
// 2.
// Add as many links as needed

// Hover Counters
function questionOne() {
  let hoverInCount = document.getElementById("hoverInCount");
  let hoverOutCount = document.getElementById("hoverOutCount");
  let hover = document.getElementById("hoverBox");
  if (hover) {
    hover.addEventListener("mouseover", function () {
      hoverInCount.textContent = parseInt(hoverInCount.textContent) + 1;
    })
    hover.addEventListener("mouseout", function () {
      hoverOutCount.textContent = parseInt(hoverOutCount.textContent) + 1;
    })
  }
}

// Simple Comment System
function questionTwo() {
  let submit = document.getElementById("postComment");
  let commentSection = document.getElementById("commentSection");
  submit.addEventListener("click", function () {
    let comment = document.getElementById("commentInput").value;
    commentSection.innerText = comment;
  })
}

// Typing Effect
function questionThree() {
  let submit = document.getElementById("startTyping");
  let output = document.getElementById("typingOutput");
  submit.addEventListener("click", function () {
    let text = document.getElementById("nameInput").value;
    let index = 0;
    let interval = setInterval(function () {
      if (index < text.length) {
        output.textContent += text[index];
        index++;
      } else {
        clearInterval(interval);
      }
    }, 500);
  })
}

// Division Calculator
function questionFour() {
  let submit = document.getElementById("divide");
  let output = document.getElementById("result");
  submit.addEventListener("click", function () {
    try {
      let num1 = parseInt(document.getElementById("num1").value);
      let num2 = parseInt(document.getElementById("num2").value);
    if (num2 === 0) {
      throw new Error ("Cannot divide by 0");
    }
    output.textContent = num1 / num2;
    }
    catch (error) {
      alert (error.message);
    }
  })
}

// Checkered Box Grid
function questionFive() {
  let squares = document.querySelectorAll(".checkerboard-square"); 
  const rows = 5; 
  const columns = 6;

  squares.forEach((square, index) => {
    let i = Math.floor(index / columns); 
    let j = index % columns; 

    
    if ((i + j) % 2 === 0) {
      square.style.backgroundColor = "green";
    } else {
      square.style.backgroundColor = "blue";
    }
  });
}

// Temperature Converter
function questionSix() {
  let celcius = document.getElementById("celciusInput").value;
  let farenheit = document.getElementById("farenheitInput").value;
  celcius.addEventListener("input", function () {
    let celcius = parseFloat(celcius.value);
    let farenheit = (celcius * (9/5)) + 32;
    farenheit.input.value = farenheit.toFixed(2);
  }); 
}

// Debugging Task (Buggy Vowel Counter)
function questionSeven() {
  var input = document.getElementById("debugInputs");
  var button = document.getElementById("checkVowels");
  var output = document.getElementById("vowelOutput");

  button.addEventListener("click", function () {
    var text = input.value;
    var count = 1;

    for (var i = 0; i <= text.length; i++) {
      var letter = text[i].toLowerCase();
      if (
        letter === "a" ||
        letter === "e" ||
        letter === "i" ||
        letter === "o"
      ) {
        count = count + 1;
      }
    }
    output.textContent = count;
  });
}

/* These call the functions above, do not remove them */

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();
