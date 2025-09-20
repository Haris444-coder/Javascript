var tasks = [
  "Review lecture notes on Data Structures",
  "Complete Java programming assignment",
  "Study for Calculus midterm exam",
  "Read chapter 4 of Operating Systems textbook",
  "Attend group meeting for Software Engineering project",
  "Research topics for Computer Networks presentation",
  "Schedule meeting with academic advisor",
  "Complete exercises on Codecademy for extra practice",
  "Review feedback on Database Systems assignment",
  "Prepare questions for next week's Algorithms tutorial",
];

document.getElementById("addButton").onclick = addTask;
document.getElementById("clearButton").onclick = clearAll;
document.getElementById("switchButton").onclick = switchColours;

function addTask() {
  var taskInput = document.getElementById("taskInput");
  var task = taskInput.value;
  tasks.push(task);
  taskInput.value = "";
  displayTasks();
}

function displayTasks() {
  var taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  for (var i = 0; i < tasks.length; i++) {
    taskList.innerHTML += '<div class="task">' + tasks[i] + "</div>";
  }
}

function clearAll() {
  tasks = [];
  displayTasks();
}

function switchColours() {
  var taskElements = document.getElementsByClassName("task");
  var colour = getRandomColour();
  for (var i = 0; i < taskElements.length; i++) {
    taskElements[i].style.color = colour;
  }
}

// Function to generate a random RGB colour
function getRandomColour() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + "," + green + "," + blue + ")";
}

// Display the initial tasks
displayTasks();
