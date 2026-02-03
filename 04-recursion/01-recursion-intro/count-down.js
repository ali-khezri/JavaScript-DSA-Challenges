function countDown(num) {
  // Base case
  if (num <= 0) {
    console.log("Well done!");
    return;
  }
  // Recursive case
  console.log(num);
  num--;
  countDown(num);
}

module.exports = countDown;
