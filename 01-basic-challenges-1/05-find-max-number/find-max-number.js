// function findMaxNumber(number) {
//   return Math.max(...number);
// }

function findMaxNumber(number) {
  let max = number[0];
  for (let index = 1; index < number.length; index++) {
    if (number[index] > max) {
      max = number[index];
    }
  }
  return max;
}

module.exports = findMaxNumber;
