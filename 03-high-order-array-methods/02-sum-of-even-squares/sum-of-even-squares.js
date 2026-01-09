function sumOfEvenSquares(numbers) {
  const evenNumbers = numbers.filter((num) => num % 2 === 0);

  const squareNumbers = evenNumbers.map((num) => num * num);

  const sumNumbers = squareNumbers.reduce((total, acc) => total + acc, 0);

  return sumNumbers;
}

module.exports = sumOfEvenSquares;
