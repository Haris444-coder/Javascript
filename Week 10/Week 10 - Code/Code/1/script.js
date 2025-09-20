let numbers = [10, 20, 30];

// for loop
for (let i = 0; i < numbers.length; i++) {
  let doubledNumber = numbers[i] * 2;
  console.log(doubledNumber);
}

// for...of loop
for (let number of numbers) {
  let numberPlusFive = number + 5;
  console.log(numberPlusFive);
}

// .forEach()
numbers.forEach(function (number) {
  numberDivided = number / 10;
  console.log(numberDivided);
});
