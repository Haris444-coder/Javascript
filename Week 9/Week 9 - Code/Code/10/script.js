function whatDoesThisDo() {
  const today = new Date();
  const specificDate = new Date(2025, 11, 25);
  const oneDay = 1000 * 60 * 60 * 24;
  const differenceMs = specificDate - today;
  return Math.round(differenceMs / oneDay);
}

console.log(whatDoesThisDo());
