/* Example 1 */

function calculateX() {
  let x = 5;
  x = x * 2;
  x = x - 1;
  x = x + 3;
  console.log(x);
}

// calculateX();

/* Example 2 */

function calculateXsetTimeout() {
  let x = 5;
  setTimeout(function (x) {
    x = x * 2;
  }, 1000);
  x = x - 1;
  x = x + 3;
  console.log(x);
}

// calculateXsetTimeout();

/* Example 3 */

function calculateXCallBack(callback) {
  let x = 5;
  setTimeout(function () {
    x = x * 2;
    callback(x);
  }, 5000);
}

calculateXCallBack(function (x) {
  x = x - 1;
  x = x + 3;
  console.log(x);
});
