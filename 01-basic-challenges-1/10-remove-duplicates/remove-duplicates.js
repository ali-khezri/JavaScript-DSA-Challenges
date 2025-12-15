// function removeDuplicates(arr) {
//   const formatArr = new Set(arr);

//   return Array.from(formatArr);
// }

function removeDuplicates(arr) {
  const unique = [];

  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) unique.push(arr[i]);
  }

  return unique;
}

module.exports = removeDuplicates;
