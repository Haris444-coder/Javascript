try {
  calculateNumber();
} catch (error) {
  console.error("Error message:" + error);
} finally {
  console.log("This will always execute");
}

console.log("End of file");
