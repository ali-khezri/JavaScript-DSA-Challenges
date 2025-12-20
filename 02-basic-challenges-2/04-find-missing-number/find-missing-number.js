function findMissingNumber(arr) {
  if (arr.length === 0) return 1;

  let n = arr.length + 1;

  let arrSum = (n * (n + 1)) / 2;
  let currentSum = arr.reduce((acc, n) => acc + n, 0);

  return arrSum - currentSum;
}

module.exports = findMissingNumber;
