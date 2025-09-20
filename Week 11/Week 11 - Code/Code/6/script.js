// Define a class
class Car {
  constructor(brand) {
    this.brand = brand;
  }

  getBrand() {
    return this.brand;
  }
}

// Create an instance of the class
let myCar = new Car("Toyota");

console.log(myCar.getBrand()); // Outputs: Toyota
