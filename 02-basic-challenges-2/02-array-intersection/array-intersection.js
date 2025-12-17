// function arrayIntersection(arr1, arr2) {
//   let count = [];

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i]) && !count.includes(arr1[i])) {
//       count.push(arr1[i]);
//     }
//   }
//   return count;
// }

function arrayIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const count = new Set();

  for (const num of arr2) {
    if (set1.has(num)) {
      count.add(num);
    }
  }

  return Array.from(count);
}

module.exports = arrayIntersection;
