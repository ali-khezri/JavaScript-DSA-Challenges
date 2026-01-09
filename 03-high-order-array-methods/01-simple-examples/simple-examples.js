const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */

const doubledNumbers = numbers.map((num) => num * 2);
// console.log(doubledNumbers);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */

const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers);

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */

const sum = numbers.reduce((total, num) => {
  return total + num;
}, 0);
// console.log(sum);

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */

numbers.forEach((num) => {
  //   console.log(num);
});

/**
 * find: Returns the first array element that satisfies a specified condition.
 */

const foundNumber = numbers.find((num) => num > 2);
// console.log(foundNumber);

/**
 * some: Checks if at least one array element satisfies a condition.
 */

const hasEvenNUmber = numbers.some((num) => num % 2 === 0);
// console.log(hasEvenNUmber);

/**
 * every: Checks if all array elements satisfy a condition.
 */

const allNumsGreaterThanZero = numbers.every((num) => num > 0);
// console.log(allNumsGreaterThanZero);
