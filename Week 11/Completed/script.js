class Student {
  constructor(name, studentId, grades) {
    this.name = name;
    this.studentId = studentId;
    this.grades = grades;
  }

  calculateAverage() {
    const total = this.grades.reduce((acc, grade) => acc + grade.mark, 0);
    return (total / this.grades.length).toFixed(2);
  }

  getHighestMark() {
    return this.grades.reduce(
      (highest, grade) => (grade.mark > highest.mark ? grade : highest),
      this.grades[0]
    );
  }

  getLowestMark() {
    return this.grades.reduce(
      (lowest, grade) => (grade.mark < lowest.mark ? grade : lowest),
      this.grades[0]
    );
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("studentFile")
    .addEventListener("change", function (e) {
      const fileReader = new FileReader();
      fileReader.onload = function () {
        const data = JSON.parse(fileReader.result);
        const students = data.map(
          (studentData) =>
            new Student(
              studentData.name,
              studentData.studentId,
              studentData.grades
            )
        );
        loadStudents(students);
      };
      fileReader.readAsText(e.target.files[0]);
    });
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
      alert("Average: " + student.calculateAverage());
    });
    avgCell.appendChild(avgButton);
    row.appendChild(avgCell);

    // Create and append highest mark button cell
    const highestCell = document.createElement("td");
    const highestButton = document.createElement("button");
    highestButton.textContent = "Highest Mark";
    highestButton.addEventListener("click", function () {
      const highest = student.getHighestMark();
      alert("Highest Mark: " + highest.courseCode + " - " + highest.mark);
    });
    highestCell.appendChild(highestButton);
    row.appendChild(highestCell);

    // Create and append lowest mark button cell
    const lowestCell = document.createElement("td");
    const lowestButton = document.createElement("button");
    lowestButton.textContent = "Lowest Mark";
    lowestButton.addEventListener("click", function () {
      const lowest = student.getLowestMark();
      alert("Lowest Mark: " + lowest.courseCode + " - " + lowest.mark);
    });
    lowestCell.appendChild(lowestButton);
    row.appendChild(lowestCell);

    // Add the complete row to the table body
    tableBody.appendChild(row);
  });
}
