let names = ["Alice", "Bob", "Charlie"];

// Non-modifying methods
console.log(names.indexOf("Bob"));

let hasTom = names.indexOf("Tom") !== -1;
console.log("Does the array contain 'Tom'? ", hasTom);

let hasBob = names.indexOf("Bob") !== -1;
console.log("Does the array contain 'Bob'? ", hasBob);

let commaSeparated = names.join(", ");
console.log("Comma-separated string: ", commaSeparated);

let firstTwo = names.slice(0, 2);
console.log("First two names: ", firstTwo);
