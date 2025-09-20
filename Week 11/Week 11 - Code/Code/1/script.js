// Native object
let x = new Date(); // Date object

// Host object
let y = document.getElementById("myElement"); // DOM object

// Custom object
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let z = new Person("Bob", 45); // Person object

let a = z;

z.age = "25";

console.log(x);
console.log(y);
console.log(z);
console.log(a);
