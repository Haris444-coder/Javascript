let classroom = {
  students: ["John", "Jane", "Bob", "Alice", "Tom", "Emma"],
  passed: [],
  failed: [],

  moveToPass: function (name) {
    let index = this.students.indexOf(name);
    if (index !== -1) {
      this.students.splice(index, 1);
      this.passed.push(name);
    }
  },

  moveToFail: function (name) {
    let index = this.students.indexOf(name);
    if (index !== -1) {
      this.students.splice(index, 1);
      this.failed.push(name);
    }
  },
};

console.log("Students:", classroom.students);

classroom.moveToPass("John");
classroom.moveToPass("Jane");

console.log("Passed Students:", classroom.passed);
console.log("Students:", classroom.students);

classroom.moveToFail("Bob");

console.log("Failed Students:", classroom.failed);
console.log("Students:", classroom.students);
