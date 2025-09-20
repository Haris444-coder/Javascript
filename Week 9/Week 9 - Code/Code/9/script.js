let currentDate = new Date();
let specificDate = new Date(2024, 9, 31);
console.log(currentDate);
console.log(specificDate);

console.log((specificDate - currentDate) / 1000 / 60 / 60 / 24);
