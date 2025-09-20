// Define the Student class
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.courses = [];
  }

  enroll(course) {
    this.courses.push(course);
    displayOutput(this.name + " has enrolled in " + course.name);
  }

  listCourses() {
    let coursesList = this.name + " is enrolled in the following courses:";
    this.courses.forEach(function (course) {
      coursesList += "<br>" + course.name;
    });
    displayOutput(coursesList);
  }
}

// Define the Teacher class
class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }

  assignToCourse(course) {
    course.setTeacher(this);
    displayOutput(this.name + " is now teaching " + course.name);
  }
}

// Define the Course class
class Course {
  constructor(name) {
    this.name = name;
    this.teacher = null;
    this.students = [];
  }

  setTeacher(teacher) {
    this.teacher = teacher;
  }

  addStudent(student) {
    this.students.push(student);
  }

  listStudents() {
    let studentsList = "Students in " + this.name + ":";
    this.students.forEach(function (student) {
      studentsList += "<br>" + student.name;
    });
    displayOutput(studentsList);
  }
}

// Create instances
var students = [];
var teachers = [];
var courses = [];

function createStudent() {
  var name = document.getElementById("studentName").value;
  var age = document.getElementById("studentAge").value;
  if (name && age) {
    var student = new Student(name, parseInt(age));
    students.push(student);
    updateStudentSelect();
    displayOutput("Student created: " + name);
  } else {
    displayOutput("Please enter both name and age.");
  }
}

function createTeacher() {
  var name = document.getElementById("teacherName").value;
  var subject = document.getElementById("teacherSubject").value;
  if (name && subject) {
    var teacher = new Teacher(name, subject);
    teachers.push(teacher);
    updateTeacherSelect();
    displayOutput("Teacher created: " + name);
  } else {
    displayOutput("Please enter both name and subject.");
  }
}

function createCourse() {
  var name = document.getElementById("courseName").value;
  if (name) {
    var course = new Course(name);
    courses.push(course);
    updateCourseSelect();
    displayOutput("Course created: " + name);
  } else {
    displayOutput("Please enter the course name.");
  }
}

function assignTeacherToCourse() {
  var teacherIndex = document.getElementById("teacherSelect").value;
  var courseIndex = document.getElementById("courseSelectForTeacher").value;
  if (teacherIndex !== "" && courseIndex !== "") {
    var teacher = teachers[teacherIndex];
    var course = courses[courseIndex];
    teacher.assignToCourse(course);
  } else {
    displayOutput("Select both a teacher and a course first.");
  }
}

function enrollStudentInCourse() {
  var studentIndex = document.getElementById("studentSelect").value;
  var courseIndex = document.getElementById("courseSelectForStudent").value;
  if (studentIndex !== "" && courseIndex !== "") {
    var student = students[studentIndex];
    var course = courses[courseIndex];
    student.enroll(course);
    course.addStudent(student);
  } else {
    displayOutput("Select both a student and a course first.");
  }
}

function listStudentCourses() {
  var studentIndex = document.getElementById("studentSelectForCourses").value;
  if (studentIndex !== "") {
    var student = students[studentIndex];
    student.listCourses();
  } else {
    displayOutput("Select a student first.");
  }
}

function listCourseStudents() {
  var courseIndex = document.getElementById("courseSelectForStudents").value;
  if (courseIndex !== "") {
    var course = courses[courseIndex];
    course.listStudents();
  } else {
    displayOutput("Select a course first.");
  }
}

function updateStudentSelect() {
  var studentSelects = document.querySelectorAll(
    "#studentSelect, #studentSelectForCourses"
  );
  studentSelects.forEach(function (select) {
    select.innerHTML = "";
    students.forEach(function (student, index) {
      var option = document.createElement("option");
      option.value = index;
      option.textContent = student.name;
      select.appendChild(option);
    });
  });
}

function updateTeacherSelect() {
  var teacherSelect = document.getElementById("teacherSelect");
  teacherSelect.innerHTML = "";
  teachers.forEach(function (teacher, index) {
    var option = document.createElement("option");
    option.value = index;
    option.textContent = teacher.name;
    teacherSelect.appendChild(option);
  });
}

function updateCourseSelect() {
  var courseSelects = document.querySelectorAll(
    "#courseSelectForTeacher, #courseSelectForStudent, #courseSelectForStudents"
  );
  courseSelects.forEach(function (select) {
    select.innerHTML = "";
    courses.forEach(function (course, index) {
      var option = document.createElement("option");
      option.value = index;
      option.textContent = course.name;
      select.appendChild(option);
    });
  });
}

function displayOutput(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}
