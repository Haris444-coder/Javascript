/**
 * School Record System Lab Instructions
 * -------------------------------------
 *
 * Goal:
 * - Enhance the provided Student class to manage student records effectively.
 * - Implement functionality to read student data from a JSON file and display it in a table.
 * - Provide interactive features to calculate and display each student's average grade, highest grade, and lowest grade.
 *
 * Base Code Provided:
 * You are provided with a skeleton of the Student class and a template to load and display student records.
 * Your task is to fill in the missing parts of the code marked with "FILL THIS IN".
 *
 * Instructions:
 * 1. Complete the constructor of the Student class to store the student's name, ID, and grades.
 * 2. Implement the following methods inside the Student class:
 *    - calculateAverage(): Calculates the student's average grade from their grades array.
 *    - getHighestMark(): Finds the highest grade among the student's grades and returns an object containing the course code and mark.
 *    - getLowestMark(): Finds the lowest grade among the student's grades and returns an object containing the course code and mark.
 * 3. Fill in the missing parts of the fileReader.onload function to parse the JSON data from the uploaded file and create an array of Student objects.
 * 4. Complete the event listener functions for the "Get Average", "Highest Mark", and "Lowest Mark" buttons to display the respective information for each student.
 *    - These functions should use the methods you implemented in the Student class.
 *
 * Additional Notes:
 * - Ensure your JSON file is correctly formatted and corresponds to the expected structure: an array of objects, each with name, studentId, and grades properties.
 * - Test your application thoroughly to ensure all functionality works as expected.
 *
 * Example Link:
 * https://65fc83830168fc5c82a1ad4b--delightful-banoffee-39aa89.netlify.app/
 *
 * Good luck, and make sure to structure your code neatly and comment where necessary!
 */

class Student {
  /** FILL THIS IN, YOU WILL NEED TO ADD SOME FUNCTIONS TOO**/
  constructor(name, studentId, grades) {
    this.name = name;
    this.studentId = studentId;
    this.grades = grades;
  }
}

document.getElementById("studentFile").addEventListener("change", function (e) {
  const fileReader = new FileReader();
  fileReader.onload = function (event) {
    /** FILL THIS IN **/
    let contents = event.target.result;
    let json = JSON.parse(contents);
    let students = [];
    json.forEach((student) => {
      console.log(students.push(new Student(student.name, student.studentId, student.grades)));
    });
  };
  fileReader.readAsText(e.target.files[0]);
});

function loadStudents(students) {
  const tableBody = document
    .getElementById("studentTable")
    .getElementsByTagName("tbody")[0];
  tableBody.innerHTML = ""; // Clear existing entries
  students.forEach((student) => {
    const row = document.createElement("tr"); // Create a new row

    // Create and populate name cell
    const nameCell = document.createElement("td");
    nameCell.textContent = student.name;
    row.appendChild(nameCell);

    // Create and populate student ID cell
    const idCell = document.createElement("td");
    idCell.textContent = student.studentId;
    row.appendChild(idCell);

    // Create and populate grades cell
    const gradesCell = document.createElement("td");
    gradesCell.textContent = student.grades
      .map(function (grade) {
        return grade.courseCode + ": " + grade.mark;
      })
      .join(", ");
    row.appendChild(gradesCell);

    // Create and append average button cell
    const avgCell = document.createElement("td");
    const avgButton = document.createElement("button");
    avgButton.textContent = "Get Average";
    avgButton.addEventListener("click", function () {
      /** FILL THIS IN, YOU CAN REFERENCE 'student' TO ACCESS THIS ITERATION OF THE STUDENT CLASS **/
    });
    avgCell.appendChild(avgButton);
    row.appendChild(avgCell);

    // Create and append highest mark button cell
    const highestCell = document.createElement("td");
    const highestButton = document.createElement("button");
    highestButton.textContent = "Highest Mark";
    highestButton.addEventListener("click", function () {
      /** FILL THIS IN, YOU CAN REFERENCE 'student' TO ACCESS THIS ITERATION OF THE STUDENT CLASS **/
    });
    highestCell.appendChild(highestButton);
    row.appendChild(highestCell);

    // Create and append lowest mark button cell
    const lowestCell = document.createElement("td");
    const lowestButton = document.createElement("button");
    lowestButton.textContent = "Lowest Mark";
    lowestButton.addEventListener("click", function () {
      /** FILL THIS IN, YOU CAN REFERENCE 'student' TO ACCESS THIS ITERATION OF THE STUDENT CLASS **/
    });
    lowestCell.appendChild(lowestButton);
    row.appendChild(lowestCell);

    // Add the complete row to the table body
    tableBody.appendChild(row);
  });
}
