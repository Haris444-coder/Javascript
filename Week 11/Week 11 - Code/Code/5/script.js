// Define a class
let Car = function (brand) {
  this.brand = brand;
};

// Add a method to the prototype
Car.prototype.getBrand = function () {
  return this.brand;
};

// Create an instance of the class
let myCar = new Car("Toyota");

console.log(myCar.getBrand()); // Outputs: Toyota
