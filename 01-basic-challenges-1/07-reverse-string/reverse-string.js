function reverseString(str) {
  let count = "";
  for (let i = str.length - 1; i >= 0; i--) {
    count = count + str[i];
  }
  return count;
}

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

module.exports = reverseString;
