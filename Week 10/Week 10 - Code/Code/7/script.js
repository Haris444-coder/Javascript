// setTimeout(function () {
//   console.log("This runs after 1 second");
// }, 1000);

// console.log("this run after set timeout");

function doSomethingLater(callback) {
  setTimeout(function () {
    console.log("Doing the thing...");
    callback();
  }, 1000); // Simulate a 1-second delay
}

// doSomethingLater();
doSomethingLater(function () {
  console.log("This happens after the delay.");
});
