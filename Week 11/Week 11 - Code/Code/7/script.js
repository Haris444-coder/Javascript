let person = {
  name: "John",
  age: 30,
  city: "New York",
};

let myJSON = JSON.stringify(person);
console.log(myJSON); // Outputs: {"name":"John","age":30,"city":"New York"}

let myObj = JSON.parse(myJSON);
console.log(myObj); // Outputs: { name: 'John', age: 30, city: 'New York' }
