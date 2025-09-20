/**
 * To-Do List App Lab Instructions
 * --------------------------------
 *
 * Goal: Your task is to replicate the functionality of the provided example.
 * Example Link: https://65a047f8c51a3b297fcdba3f--cerulean-mousse-4a9723.netlify.app/
 *
 * Key Functions to Implement:
 * 1. Add a task to the list.
 * 2. Increment the task counter upon adding a task.
 * 3. Reset the list of tasks.
 * 4. Reset the task counter.
 *
 * Note: You may need to understand and use 'parseInt' to complete this lab.
 *       You can search online to learn how it works.
 *
 * Lab Bonus:
 * - Add validation to prevent adding an empty task.
 * - Allow adding a task by pressing the 'Enter' key.
 *
 * Good luck!
 */


let currentNumber = 0;


function addTask(){
    //add task to the list
    //actual version
    const taskInput = document.getElementById("new-task");
    const taskList = document.getElementById("task-list");
    let newTask = taskInput.value;
    taskList.innerHTML = taskList.innerHTML + "<li>" + newTask + "</li>";

    //Increment numbers
    currentNumber++;
    document.getElementById("task-counter").textContent = currentNumber;
}


function clearTasks(){
    //Sets 'task-counter' to 0
    currentNumber=0;
    document.getElementById("task-counter").textContent = currentNumber;


    //Reset list of task
    document.getElementById("task-list").textContent = "";
    
}

