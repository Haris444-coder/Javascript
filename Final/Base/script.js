// ChatGPT Log: [https://chatgpt.com/share/67f95bb2-ea18-8009-b872-6927ec997f81]

// Question 1 – To-Do List
function Question1() {
  let add = document.getElementById("Q1-add-todo");
  let list = document.getElementById("Q1-todo-list");
  let clear = document.getElementById("Q1-clear-todo");
  loadTodos();
  add.addEventListener("click", function () {
    let comment  = document.getElementById("Q1-todo-input").value;
    if (comment !== ""){
      addTodo(comment);
    }
  })
  clear.addEventListener("click", function () {
    list.innerText = "";
    localStorage.removeItem("todos");
  })
  function addTodo(text){
    let li = document.createElement("li");
    li.innerText = text;
    list.appendChild(li);

    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(text);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function loadTodos() {
    let saved = JSON.parse(localStorage.getItem("todos")) || [];
    saved.forEach(function (todo) {
      let li = document.createElement("li");
      li.innerText = todo;
      list.appendChild(li);
    });
  }
}

// Question 2 – Pokémon API
function Question2() {
  let submit = document.getElementById("Q2-get-pokemon");
  let id = document.getElementById("Q2-pokemon-id");
  let image = document.getElementById("Q2-pokemon-img");
  submit.addEventListener("click", function() {
    let pokeId = parseInt(id.value);
    if (pokeId => 1 && pokeId <= 1024){
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
        .then(response => response.json())
        .then(data => {
          let imageUrl = data.sprites.other["official-artwork"].front_default;
          image.src = imageUrl;
          image.alt = data.name;
        })
        .catch(error => console.error("Error fetching Pokémon data:", error));
    }
  })
}

// Question 3 – Typing Game
function Question3() {
  let start = document.getElementById("Q3-start-typing");
  let interval;
  let time = 10;
  let textArea = document.getElementById("Q3-textarea");
  start.addEventListener("click", function() {
    interval = setInterval(function() {
      time--;
      if (time === 0) {
        clearInterval(interval);
        let text = textArea.value;
        let words = text.split(" ");
        let wordCount = words.filter(word => word !== "").length;
        alert("You won");
      }
    }, 1000);
  })
}

// Question 4 – Holiday Countdown
function Question4() {
  const holidays = {
    Halloween: "2025-10-31",
    Christmas: "2025-12-25",
    "New Year's Eve": "2025-12-31",
  };
  let dropdown = document.getElementById("Q4-holiday-dropdown");
  let display = document.getElementById("Q4-days-until");
  for (let holiday in holidays) {
    let option = document.createElement("option");
    option.value = holidays[holiday];
    option.textContent = holiday;
    dropdown.appendChild(option);
  }
  dropdown.addEventListener("change", function() {
    let selectedHoliday = dropdown.value;
    let currentDate = new Date();
    let holidayDate = new Date(selectedHoliday);
    let difference = holidayDate - currentDate;
    let daysLeft = Math.ceil(difference / (1000 / 60 / 60 / 24));
    display.innerText = `${daysLeft} day(s) remaining`;
  });
}

// Question 5 – Library JSON Interaction
function Question5() {
  let file = document.getElementById("Q5-file-input");
  let books = [];
}

// Question 6 – Form Validation
function Question6() {
  let code = document.getElementById("Q6-code");
  let name = document.getElementById("Q6-username");
  let nameRegex = /^[a-zA-Z0-9]+$/;
  code.addEventListener("input", function() {
    if (code.value !== "COMP125") {
      code.setCustomValidity("Code must be COMP125");
    }
    else {
      code.setCustomValidity("");
    }
  });

  name.addEventListener("input", function() {
    if (!nameRegex.test(name.value)) {
      name.setCustomValidity("Username must be letters and numbers only.");
    } else {
      name.setCustomValidity("");
    }
  });
}

// Question 7 – Custom Sort
function Question7() {}

// Initialize all questions
Question1();
Question2();
Question3();
Question4();
Question5();
Question6();
Question7();
